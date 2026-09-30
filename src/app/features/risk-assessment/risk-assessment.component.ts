import { Component, OnInit, OnDestroy, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { Subject, takeUntil, catchError, of, finalize } from 'rxjs';
import { RiskBureauService } from '@app/core/services/risk-bureau.service';
import { CreditRequest } from '@app/core/models/credit-request.model';
import { RiskResponse } from '@app/core/models/risk-response.model';

interface RiskFactor {
  category: string;
  score: number;
  weight: number;
  contribution: number;
  description: string;
}

interface CreditHistorySummary {
  totalAccounts: number;
  activeAccounts: number;
  delinquentAccounts: number;
  averageUtilization: number;
  recentInquiries: number;
}

@Component({
  selector: 'app-risk-assessment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './risk-assessment.component.html',
  styleUrl: './risk-assessment.component.scss'
})
export class RiskAssessmentComponent implements OnInit, OnDestroy {
  private readonly riskBureauService = inject(RiskBureauService);
  private readonly fb = inject(FormBuilder);
  private readonly destroy$ = new Subject<void>();

  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly riskProfile = signal<RiskResponse | null>(null);
  readonly riskFactors = signal<RiskFactor[]>([]);
  readonly creditHistory = signal<CreditHistorySummary | null>(null);
  readonly clientId = signal<string>('');

  readonly overallRiskScore = computed(() => {
    const factors = this.riskFactors();
    if (factors.length === 0) return 0;
    const weightedSum = factors.reduce((acc, factor) => acc + factor.contribution, 0);
    return Math.min(100, Math.max(0, weightedSum));
  });

  readonly riskCategory = computed(() => {
    const score = this.overallRiskScore();
    if (score >= 70) return { label: 'Alto Riesgo', class: 'risk-high' };
    if (score >= 40) return { label: 'Riesgo Medio', class: 'risk-medium' };
    return { label: 'Bajo Riesgo', class: 'risk-low' };
  });

  readonly isHighRisk = computed(() => this.overallRiskScore() >= 70);
  readonly canApprove = computed(() => this.overallRiskScore() < 70);

  riskAssessmentForm: FormGroup = this.fb.group({
    clientId: ['', [Validators.required, Validators.minLength(8)]],
    requestedAmount: [0, [Validators.required, Validators.min(1000)]],
    loanTerm: [12, [Validators.required, Validators.min(1), Validators.max(360)]],
    collateralValue: [0, [Validators.min(0)]]
  });

  constructor() {
    effect(() => {
      const profile = this.riskProfile();
      if (profile) {
        this.analyzeRiskFactors(profile);
      }
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeForm(): void {
    const storedClientId = localStorage.getItem('currentClientId');
    if (storedClientId) {
      this.clientId.set(storedClientId);
      this.riskAssessmentForm.patchValue({ clientId: storedClientId });
      this.loadRiskProfile(storedClientId);
    }
  }

  loadRiskProfile(clientId: string): void {
    if (!clientId || clientId.length < 8) {
      this.errorMessage.set('ID de cliente inválido');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.clientId.set(clientId);

    this.riskBureauService.getRiskProfile(clientId).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage.set(this.extractErrorMessage(error));
        return of(null);
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      if (response) {
        this.riskProfile.set(response);
        this.creditHistory.set({
          totalAccounts: response.creditHistory?.totalAccounts || 0,
          activeAccounts: response.creditHistory?.activeAccounts || 0,
          delinquentAccounts: response.creditHistory?.delinquentAccounts || 0,
          averageUtilization: response.creditHistory?.averageUtilization || 0,
          recentInquiries: response.creditHistory?.recentInquiries || 0
        });
      }
    });
  }

  analyzeCreditRisk(): void {
    const formValue = this.riskAssessmentForm.value;
    const request: CreditRequest = {
      clientId: formValue.clientId,
      requestedAmount: formValue.requestedAmount,
      loanTerm: formValue.loanTerm,
      collateralValue: formValue.collateralValue,
      purpose: 'RISK_ANALYSIS',
      income: 0,
      existingDebt: 0
    };

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.riskBureauService.analyzeCreditRisk(request).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage.set(this.extractErrorMessage(error));
        return of(null);
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      if (response) {
        this.riskProfile.set(response);
        this.analyzeRiskFactors(response);
      }
    });
  }

  private analyzeRiskFactors(profile: RiskResponse): void {
    const factors: RiskFactor[] = [];
    const baseScore = profile.riskScore || 0;

    factors.push({
      category: 'Historial Crediticio',
      score: profile.creditScore || 0,
      weight: 0.35,
      contribution: (profile.creditScore || 0) * 0.35,
      description: 'Evaluación del historial de pagos y comportamiento crediticio'
    });

    factors.push({
      category: 'Capacidad de Pago',
      score: profile.debtToIncomeRatio ? Math.max(0, 100 - profile.debtToIncomeRatio * 100) : 50,
      weight: 0.25,
      contribution: profile.debtToIncomeRatio ? Math.max(0, (100 - profile.debtToIncomeRatio * 100) * 0.25) : 12.5,
      description: 'Relación entre ingresos y deudas existentes'
    });

    factors.push({
      category: 'Estabilidad Financiera',
      score: profile.employmentLength ? Math.min(100, profile.employmentLength * 10) : 30,
      weight: 0.20,
      contribution: profile.employmentLength ? Math.min(100, profile.employmentLength * 10) * 0.20 : 6,
      description: 'Antigüedad en el empleo actual'
    });

    factors.push({
      category: 'Utilización de Crédito',
      score: profile.creditUtilization ? Math.max(0, 100 - profile.creditUtilization) : 50,
      weight: 0.15,
      contribution: profile.creditUtilization ? Math.max(0, (100 - profile.creditUtilization) * 0.15) : 7.5,
      description: 'Porcentaje de crédito disponible utilizado'
    });

    factors.push({
      category: 'Recientes Consultas',
      score: profile.recentInquiries && profile.recentInquiries > 5 ? 20 : 80,
      weight: 0.05,
      contribution: profile.recentInquiries && profile.recentInquiries > 5 ? 1 : 4,
      description: 'Número de consultas recientes en el buró'
    });

    this.riskFactors.set(factors);
  }

  updateRiskProfile(): void {
    const clientId = this.clientId();
    if (!clientId) {
      this.errorMessage.set('No hay cliente seleccionado');
      return;
    }

    const profile = this.riskProfile();
    if (!profile) {
      this.errorMessage.set('No hay perfil de riesgo para actualizar');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const updateData = {
      lastUpdated: new Date().toISOString(),
      overallScore: this.overallRiskScore(),
      category: this.riskCategory().label
    };

    this.riskBureauService.updateRiskProfile(clientId, updateData).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage.set(this.extractErrorMessage(error));
        return of(null);
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      if (response) {
        this.riskProfile.set({ ...profile, ...response });
      }
    });
  }

  private extractErrorMessage(error: unknown): string {
    if (error && typeof error === 'object' && 'message' in error) {
      return String(error.message);
    }
    return 'Error desconocido al procesar la solicitud de riesgo';
  }

  onClientIdChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.riskAssessmentForm.patchValue({ clientId: value });
  }

  onSubmit(): void {
    if (this.riskAssessmentForm.valid) {
      const clientId = this.riskAssessmentForm.get('clientId')?.value;
      this.loadRiskProfile(clientId);
    } else {
      this.riskAssessmentForm.markAllAsTouched();
    }
  }

  clearResults(): void {
    this.riskProfile.set(null);
    this.riskFactors.set([]);
    this.creditHistory.set(null);
    this.errorMessage.set(null);
  }
}