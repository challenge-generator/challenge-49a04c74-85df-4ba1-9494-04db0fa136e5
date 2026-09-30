export type CreditStatus = 'pending' | 'approved' | 'rejected' | 'under_review' | 'cancelled';
export type CreditType = 'personal' | 'commercial' | 'microcredit' | 'revolving';
export type EmploymentType = 'permanent' | 'contractual' | 'self_employed' | 'freelance' | 'retired';

export interface CreditRequest {
  requestId: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  creditType: CreditType;
  requestedAmount: number;
  currency: string;
  termMonths: number;
  purpose: string;
  monthlyIncome: number;
  employmentType: EmploymentType;
  employerName?: string;
  employmentYears: number;
  existingDebts: number;
  collateralProvided: boolean;
  collateralDescription?: string;
  creditScore?: number;
  status: CreditStatus;
  submittedAt: Date;
  processedAt?: Date;
  approvedBy?: string;
  rejectionReason?: string;
  fraudCheckRequired: boolean;
  riskAssessmentRequired: boolean;
}

export interface CreditRequestFormData {
  clientId: string;
  creditType: CreditType;
  requestedAmount: number;
  termMonths: number;
  purpose: string;
  monthlyIncome: number;
  employmentType: EmploymentType;
  employerName?: string;
  employmentYears: number;
  existingDebts: number;
  collateralProvided: boolean;
  collateralDescription?: string;
}

export interface CreditRequestValidation {
  isValid: boolean;
  errors: CreditRequestValidationError[];
}

export interface CreditRequestValidationError {
  field: string;
  message: string;
  code: string;
}

export const CREDIT_TYPE_LABELS: Record<CreditType, string> = {
  personal: 'Crédito Personal',
  commercial: 'Crédito Comercial',
  microcredit: 'Microcrédito',
  revolving: 'Crédito Revolving'
};

export const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  permanent: 'Contrato Permanente',
  contractual: 'Contrato Temporal',
  self_employed: 'Autónomo',
  freelance: 'Freelance',
  retired: 'Jubilado'
};

export const CREDIT_STATUS_LABELS: Record<CreditStatus, string> = {
  pending: 'Pendiente',
  approved: 'Aprobado',
  rejected: 'Rechazado',
  under_review: 'En Revisión',
  cancelled: 'Cancelado'
};

export const MIN_CREDIT_AMOUNT = 1000;
export const MAX_CREDIT_AMOUNT = 500000;
export const MIN_TERM_MONTHS = 3;
export const MAX_TERM_MONTHS = 120;
export const MIN_MONTHLY_INCOME = 500;

export function validateCreditRequest(data: CreditRequestFormData): CreditRequestValidation {
  const errors: CreditRequestValidationError[] = [];

  if (!data.clientId || data.clientId.trim().length === 0) {
    errors.push({
      field: 'clientId',
      message: 'El identificador del cliente es obligatorio',
      code: 'REQUIRED_CLIENT_ID'
    });
  }

  if (data.requestedAmount < MIN_CREDIT_AMOUNT) {
    errors.push({
      field: 'requestedAmount',
      message: `El monto mínimo solicitado es ${MIN_CREDIT_AMOUNT}`,
      code: 'AMOUNT_TOO_LOW'
    });
  }

  if (data.requestedAmount > MAX_CREDIT_AMOUNT) {
    errors.push({
      field: 'requestedAmount',
      message: `El monto máximo solicitado es ${MAX_CREDIT_AMOUNT}`,
      code: 'AMOUNT_TOO_HIGH'
    });
  }

  if (data.termMonths < MIN_TERM_MONTHS) {
    errors.push({
      field: 'termMonths',
      message: `El plazo mínimo es de ${MIN_TERM_MONTHS} meses`,
      code: 'TERM_TOO_SHORT'
    });
  }

  if (data.termMonths > MAX_TERM_MONTHS) {
    errors.push({
      field: 'termMonths',
      message: `El plazo máximo es de ${MAX_TERM_MONTHS} meses`,
      code: 'TERM_TOO_LONG'
    });
  }

  if (data.monthlyIncome < MIN_MONTHLY_INCOME) {
    errors.push({
      field: 'monthlyIncome',
      message: `El ingreso mínimo requerido es ${MIN_MONTHLY_INCOME}`,
      code: 'INCOME_TOO_LOW'
    });
  }

  const debtToIncomeRatio = data.existingDebts / data.monthlyIncome;
  if (debtToIncomeRatio > 0.5) {
    errors.push({
      field: 'existingDebts',
      message: 'La ratio deuda/ingreso excede el 50%',
      code: 'HIGH_DEBT_RATIO'
    });
  }

  if (data.employmentType === 'permanent' && !data.employerName) {
    errors.push({
      field: 'employerName',
      message: 'El nombre del empleador es obligatorio para empleados permanentes',
      code: 'REQUIRED_EMPLOYER'
    });
  }

  if (data.collateralProvided && (!data.collateralDescription || data.collateralDescription.trim().length === 0)) {
    errors.push({
      field: 'collateralDescription',
      message: 'La descripción del colateral es obligatoria cuando se proporciona garantía',
      code: 'REQUIRED_COLLATERAL_DESCRIPTION'
    });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function createCreditRequest(
  formData: CreditRequestFormData,
  clientName: string,
  clientEmail: string,
  clientPhone: string
): CreditRequest {
  return {
    requestId: generateRequestId(),
    clientId: formData.clientId,
    clientName,
    clientEmail,
    clientPhone,
    creditType: formData.creditType,
    requestedAmount: formData.requestedAmount,
    currency: 'USD',
    termMonths: formData.termMonths,
    purpose: formData.purpose,
    monthlyIncome: formData.monthlyIncome,
    employmentType: formData.employmentType,
    employerName: formData.employerName,
    employmentYears: formData.employmentYears,
    existingDebts: formData.existingDebts,
    collateralProvided: formData.collateralProvided,
    collateralDescription: formData.collateralDescription,
    status: 'pending',
    submittedAt: new Date(),
    fraudCheckRequired: true,
    riskAssessmentRequired: true
  };
}

function generateRequestId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 10);
  return `CR-${timestamp}-${randomPart}`.toUpperCase();
}

export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  termMonths: number
): number {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) {
    return principal / termMonths;
  }
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);
  return Math.round(payment * 100) / 100;
}

export function calculateDebtToIncomeRatio(monthlyDebt: number, monthlyIncome: number): number {
  if (monthlyIncome <= 0) return 0;
  return Math.round((monthlyDebt / monthlyIncome) * 10000) / 100;
}

export function isEligibleForFastTrack(request: CreditRequest): boolean {
  return (
    request.creditScore !== undefined &&
    request.creditScore >= 700 &&
    request.requestedAmount <= 50000 &&
    request.existingDebts / request.monthlyIncome <= 0.3
  );
}