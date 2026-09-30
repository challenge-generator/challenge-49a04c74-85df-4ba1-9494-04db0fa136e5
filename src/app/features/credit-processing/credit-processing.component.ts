import { Component, OnInit, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CreditOriginatorService } from '../../core/services/credit-originator.service';
import { FraudEngineService } from '../../core/services/fraud-engine.service';
import { RiskBureauService } from '../../core/services/risk-bureau.service';
import { CreditRequest } from '../../core/models/credit-request.model';
import { FraudResponse } from '../../core/models/fraud-response.model';
import { RiskResponse } from '../../core/models/risk-response.model';

interface ProcessingState {
  step: 'idle' | 'submitting' | 'fraud-check' | 'risk-assessment' | 'completed' | 'error';
  approvalId?: string;
  fraudResult?: FraudResponse;
  riskResult?: RiskResponse;
  errorMessage?: string;
}

@Component({
  selector: 'app-credit-processing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './credit-processing.component.html',
  styleUrl: './credit-processing.component.scss'
})
export class CreditProcessingComponent implements OnInit {
  private readonly creditService = inject(CreditOriginatorService);
  private readonly fraudService = inject(FraudEngineService);
  private readonly riskService = inject(RiskBureauService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly creditForm: FormGroup = this.fb.group({
    clientId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    clientName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    clientEmail: ['', [Validators.required, Validators.email]],
    clientPhone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
    requestedAmount: ['', [Validators.required, Validators.min(1000), Validators.max(1000000)]],
    currency: ['USD', [Validators.required]],
    loanTerm: ['', [Validators.required, Validators.min(6), Validators.max(360)]],
    loanPurpose: ['', [Validators.required]],
    monthlyIncome: ['', [Validators.required, Validators.min(0)]],
    employmentStatus: ['', [Validators.required]]
  });

  readonly state = signal<ProcessingState>({ step: 'idle' });

  readonly isLoading = computed(() => 
    this.state().step === 'submitting' || 
    this.state().step === 'fraud-check' || 
    this.state().step === 'risk-assessment'
  );

  readonly currentStep = computed(() => {
    const step = this.state().step;
    if (step === 'idle' || step === 'error') return 0;
    if (step === 'submitting') return 1;
    if (step === 'fraud-check') return 2;
    if (step === 'risk-assessment') return 3;
    if (step === 'completed') return 4;
    return 0;
  });

  readonly canSubmit = computed(() => this.creditForm.valid && !this.isLoading());

  readonly loanPurposes = [
    { value: 'personal', label: 'Personal' },
    { value: 'business', label: 'Negocio' },
    { value: 'home_improvement', label: 'Mejora de Hogar' },
    { value: 'debt_consolidation', label: 'Consolidación de Deudas' },
    { value: 'education', label: 'Educación' },
    { value: 'other', label: 'Otro' }
  ];

  readonly employmentStatuses = [
    { value: 'employed', label: 'Empleado' },
    { value: 'self_employed', label: 'Autónomo' },
    { value: 'entrepreneur', label: 'Emprendedor' },
    { value: 'retired', label: 'Jubilado' },
    { value: 'unemployed', label: 'Desempleado' }
  ];

  readonly currencies = ['USD', 'EUR', 'GBP', 'MXN', 'CAD'];

  constructor() {
    effect(() => {
      const currentState = this.state();
      if (currentState.step === 'completed') {
        this.snackBar.open(
          `Solicitud procesada exitosamente. ID: ${currentState.approvalId}`,
          'Cerrar',
          { duration: 5000, panelClass: 'success-snackbar' }
        );
      } else if (currentState.step === 'error') {
        this.snackBar.open(
          currentState.errorMessage || 'Error al procesar la solicitud',
          'Cerrar',
          { duration: 5000, panelClass: 'error-snackbar' }
        );
      }
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(): void {
    if (!this.canSubmit()) {
      this.creditForm.markAllAsTouched();
      return;
    }

    const creditRequest: CreditRequest = this.buildCreditRequest();
    this.processCreditRequest(creditRequest);
  }

  private buildCreditRequest(): CreditRequest {
    const formValue = this.creditForm.value;
    return {
      clientId: formValue.clientId,
      clientName: formValue.clientName,
      clientEmail: formValue.clientEmail,
      clientPhone: formValue.clientPhone,
      requestedAmount: Number(formValue.requestedAmount),
      currency: formValue.currency,
      loanTerm: Number(formValue.loanTerm),
      loanPurpose: formValue.loanPurpose,
      monthlyIncome: Number(formValue.monthlyIncome),
      employmentStatus: formValue.employmentStatus,
      requestDate: new Date().toISOString(),
      status: 'pending'
    };
  }

  private processCreditRequest(request: CreditRequest): void {
    this.state.set({ step: 'submitting' });

    this.creditService.submitCreditRequest(request).subscribe({
      next: (response) => {
        const approvalId = response.approvalId || this.generateApprovalId();
        this.state.set({ step: 'fraud-check', approvalId });
        this.checkFraud(request, approvalId);
      },
      error: (error) => {
        this.state.set({ 
          step: 'error', 
          errorMessage: error.message || 'Error al enviar la solicitud' 
        });
      }
    });
  }

  private checkFraud(request: CreditRequest, approvalId: string): void {
    this.state.update(s => ({ ...s, step: 'fraud-check' }));

    this.fraudService.analyzeForFraud(request).subscribe({
      next: (fraudResult) => {
        if (fraudResult.isFraudulent) {
          this.state.set({ 
            step: 'error', 
            approvalId,
            errorMessage: `Transacción flagged como sospechosa: ${fraudResult.reason || 'Verificación fallida'}` 
          });
          return;
        }

        this.state.set({ 
          step: 'risk-assessment', 
          approvalId, 
          fraudResult 
        });
        this.assessRisk(request, approvalId, fraudResult);
      },
      error: (error) => {
        this.state.set({ 
          step: 'error', 
          approvalId,
          errorMessage: error.message || 'Error en la verificación antifraude' 
        });
      }
    });
  }

  private assessRisk(request: CreditRequest, approvalId: string, fraudResult: FraudResponse): void {
    this.state.update(s => ({ ...s, step: 'risk-assessment' }));

    this.riskService.analyzeCreditRisk(request).subscribe({
      next: (riskResult) => {
        const riskScore = riskResult.riskScore || 0;
        const approved = riskScore <= 70;

        if (!approved) {
          this.state.set({ 
            step: 'error', 
            approvalId,
            fraudResult,
            riskResult,
            errorMessage: `Riesgo demasiado alto: Score ${riskScore}. Se requiere revisión manual.` 
          });
          return;
        }

        this.state.set({ 
          step: 'completed', 
          approvalId, 
          fraudResult, 
          riskResult 
        });
      },
      error: (error) => {
        this.state.set({ 
          step: 'error', 
          approvalId,
          fraudResult,
          errorMessage: error.message || 'Error en la evaluación de riesgo' 
        });
      }
    });
  }

  private generateApprovalId(): string {
    return 'APR-' + Date.now().toString(36).toUpperCase() + '-' + 
           Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  resetForm(): void {
    this.creditForm.reset({
      currency: 'USD',
      loanTerm: '',
      loanPurpose: '',
      employmentStatus: ''
    });
    this.state.set({ step: 'idle' });
  }

  getErrorMessage(field: string): string {
    const control = this.creditForm.get(field);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'Este campo es requerido';
    if (control.errors['minlength']) return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
    if (control.errors['maxlength']) return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
    if (control.errors['min']) return `Valor mínimo: ${control.errors['min'].min}`;
    if (control.errors['max']) return `Valor máximo: ${control.errors['max'].max}`;
    if (control.errors['email']) return 'Correo electrónico inválido';
    if (control.errors['pattern']) return 'Formato inválido';

    return 'Campo inválido';
  }
}