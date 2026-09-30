import { Component, OnInit, OnDestroy, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil, catchError, of, finalize } from 'rxjs';
import { FraudEngineService } from '@app/core/services/fraud-engine.service';
import { FraudResponse } from '@app/core/models/fraud-response.model';
import { CreditRequest } from '@app/core/models/credit-request.model';

interface FraudAlert {
  id: string;
  clientId: string;
  transactionId: string;
  riskScore: number;
  flags: string[];
  timestamp: Date;
  status: 'pending' | 'investigating' | 'cleared' | 'confirmed';
}

interface FraudMetrics {
  totalAnalyzed: number;
  flaggedCount: number;
  clearedCount: number;
  confirmedFraudCount: number;
  averageRiskScore: number;
}

@Component({
  selector: 'app-fraud-detection',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  templateUrl: './fraud-detection.component.html',
  styleUrls: ['./fraud-detection.component.scss']
})
export class FraudDetectionComponent implements OnInit, OnDestroy {
  private readonly fraudEngineService = inject(FraudEngineService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  private readonly destroy$ = new Subject<void>();

  readonly alerts = signal<FraudAlert[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedAlert = signal<FraudAlert | null>(null);
  readonly searchQuery = signal<string>('');
  readonly statusFilter = signal<string>('all');
  readonly currentPage = signal<number>(0);
  readonly pageSize = signal<number>(10);

  readonly metrics = computed<FraudMetrics>(() => {
    const alertList = this.alerts();
    const total = alertList.length;
    const flagged = alertList.filter(a => a.status === 'pending' || a.status === 'investigating').length;
    const cleared = alertList.filter(a => a.status === 'cleared').length;
    const confirmed = alertList.filter(a => a.status === 'confirmed').length;
    const avgScore = total > 0
      ? alertList.reduce((sum, a) => sum + a.riskScore, 0) / total
      : 0;

    return {
      totalAnalyzed: total,
      flaggedCount: flagged,
      clearedCount: cleared,
      confirmedFraudCount: confirmed,
      averageRiskScore: Math.round(avgScore * 100) / 100
    };
  });

  readonly filteredAlerts = computed(() => {
    let result = this.alerts();
    const query = this.searchQuery().toLowerCase();
    const status = this.statusFilter();

    if (query) {
      result = result.filter(alert =>
        alert.clientId.toLowerCase().includes(query) ||
        alert.transactionId.toLowerCase().includes(query) ||
        alert.flags.some(flag => flag.toLowerCase().includes(query))
      );
    }

    if (status !== 'all') {
      result = result.filter(alert => alert.status === status);
    }

    return result;
  });

  readonly displayedColumns: string[] = ['clientId', 'transactionId', 'riskScore', 'flags', 'timestamp', 'status', 'actions'];

  readonly analysisForm: FormGroup = this.fb.group({
    clientId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    amount: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
  });

  constructor() {
    effect(() => {
      const currentMetrics = this.metrics();
      if (currentMetrics.confirmedFraudCount > 0) {
        this.snackBar.open(
          `Alerta: ${currentMetrics.confirmedFraudCount} caso(s) de fraude confirmado(s)`,
          'Cerrar',
          { duration: 5000, panelClass: 'snackbar-danger' }
        );
      }
    });
  }

  ngOnInit(): void {
    this.loadAlerts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAlerts(): void {
    this.isLoading.set(true);
    this.fraudEngineService.getFraudHistory('default-client')
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error loading fraud alerts:', error);
          this.showError('Error al cargar las alertas de fraude');
          return of([]);
        }),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe(responses => {
        const alerts: FraudAlert[] = responses.map((response, index) => ({
          id: `alert-${index}`,
          clientId: response.clientId || 'unknown',
          transactionId: response.transactionId || `txn-${index}`,
          riskScore: response.riskScore || 0,
          flags: response.flags || [],
          timestamp: response.analyzedAt ? new Date(response.analyzedAt) : new Date(),
          status: this.mapRiskToStatus(response.riskScore || 0)
        }));
        this.alerts.set(alerts);
      });
  }

  analyzeTransaction(): void {
    if (this.analysisForm.invalid) {
      this.analysisForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    const formValue = this.analysisForm.value;

    const request: CreditRequest = {
      clientId: formValue.clientId,
      amount: formValue.amount,
      description: formValue.description,
      requestDate: new Date()
    };

    this.fraudEngineService.analyzeForFraud(request)
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error analyzing transaction:', error);
          this.showError('Error al analizar la transacción');
          return of(null);
        }),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe(response => {
        if (response) {
          this.handleAnalysisResult(response);
        }
      });
  }

  private handleAnalysisResult(response: FraudResponse): void {
    const alert: FraudAlert = {
      id: `alert-${Date.now()}`,
      clientId: response.clientId,
      transactionId: response.transactionId || `txn-${Date.now()}`,
      riskScore: response.riskScore,
      flags: response.flags,
      timestamp: new Date(),
      status: this.mapRiskToStatus(response.riskScore)
    };

    this.alerts.update(current => [alert, ...current]);

    if (response.riskScore >= 70) {
      this.showError(`Alto riesgo detectado: ${response.riskScore}%`);
    } else if (response.riskScore >= 40) {
      this.showWarning(`Riesgo medio detectado: ${response.riskScore}%`);
    } else {
      this.showSuccess(`Transacción analizada: riesgo bajo (${response.riskScore}%)`);
    }
  }

  private mapRiskToStatus(riskScore: number): 'pending' | 'investigating' | 'cleared' | 'confirmed' {
    if (riskScore >= 80) return 'confirmed';
    if (riskScore >= 50) return 'investigating';
    if (riskScore >= 30) return 'pending';
    return 'cleared';
  }

  selectAlert(alert: FraudAlert): void {
    this.selectedAlert.set(alert);
  }

  clearAlert(alert: FraudAlert): void {
    this.flagTransaction(alert.transactionId, 'Cleared by analyst')
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error clearing alert:', error);
          this.showError('Error al marcar alerta como aclarada');
          return of(null);
        })
      )
      .subscribe(() => {
        this.alerts.update(alerts =>
          alerts.map(a => a.id === alert.id ? { ...a, status: 'cleared' as const } : a)
        );
        this.showSuccess('Alerta marcada como aclarada');
      });
  }

  confirmFraud(alert: FraudAlert): void {
    this.flagTransaction(alert.transactionId, 'Confirmed fraud by analyst')
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error confirming fraud:', error);
          this.showError('Error al confirmar fraude');
          return of(null);
        })
      )
      .subscribe(() => {
        this.alerts.update(alerts =>
          alerts.map(a => a.id === alert.id ? { ...a, status: 'confirmed' as const } : a)
        );
        this.showSuccess('Fraude confirmado correctamente');
      });
  }

  private flagTransaction(transactionId: string, reason: string) {
    return this.fraudEngineService.flagSuspiciousTransaction(transactionId, reason);
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  onStatusFilter(status: string): void {
    this.statusFilter.set(status);
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.statusFilter.set('all');
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      pending: '#ff9800',
      investigating: '#2196f3',
      cleared: '#4caf50',
      confirmed: '#f44336'
    };
    return colors[status] || '#757575';
  }

  getRiskLevel(score: number): string {
    if (score >= 70) return 'Alto';
    if (score >= 40) return 'Medio';
    return 'Bajo';
  }

  getRiskColor(score: number): string {
    if (score >= 70) return '#f44336';
    if (score >= 40) return '#ff9800';
    return '#4caf50';
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: ['snackbar-error']
    });
  }

  private showWarning(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 4000,
      panelClass: ['snackbar-warning']
    });
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }
}