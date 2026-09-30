export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
  UNKNOWN = 'UNKNOWN'
}

export enum RiskCategory {
  CREDIT = 'CREDIT',
  FRAUD = 'FRAUD',
  OPERATIONAL = 'OPERATIONAL',
  COMPLIANCE = 'COMPLIANCE',
  MARKET = 'MARKET'
}

export enum RiskStatus {
  ACTIVE = 'ACTIVE',
  MONITORED = 'MONITORED',
  MITIGATED = 'MITIGATED',
  CLOSED = 'CLOSED',
  ESCALATED = 'ESCALATED'
}

export interface CreditScore {
  score: number;
  range: {
    min: number;
    max: number;
  };
  lastUpdated: Date;
  bureauSource: string;
}

export interface DebtLoad {
  totalOutstanding: number;
  monthlyPayment: number;
  debtToIncomeRatio: number;
  creditUtilization: number;
  openAccounts: number;
  closedAccounts: number;
}

export interface PaymentHistory {
  onTimePayments: number;
  latePayments: number;
  veryLatePayments: number;
  collections: number;
  bankruptcies: number;
  lastDelinquency: Date | null;
  paymentTrend: 'improving' | 'stable' | 'declining';
}

export interface RiskFactor {
  category: RiskCategory;
  description: string;
  severity: RiskLevel;
  weight: number;
  mitigationSuggestions: string[];
  detectedAt: Date;
}

export interface RiskIndicator {
  code: string;
  description: string;
  value: string | number | boolean;
  threshold: number;
  isTriggered: boolean;
  impactScore: number;
}

export interface RiskProfile {
  clientId: string;
  overallRiskLevel: RiskLevel;
  riskScore: number;
  creditScore: CreditScore;
  debtLoad: DebtLoad;
  paymentHistory: PaymentHistory;
  riskFactors: RiskFactor[];
  riskIndicators: RiskIndicator[];
  status: RiskStatus;
  createdAt: Date;
  updatedAt: Date;
  nextReviewDate: Date;
  bureauInquiries: InquiryRecord[];
}

export interface InquiryRecord {
  inquiryDate: Date;
  inquirerName: string;
  inquirerType: 'CREDIT_BUREAU' | 'FINANCIAL_INSTITUTION' | 'GOVERNMENT' | 'OTHER';
  purpose: string;
  result: 'APPROVED' | 'DENIED' | 'PENDING' | 'WITHDRAWN';
}

export interface RiskAnalysisResult {
  requestId: string;
  clientId: string;
  profile: RiskProfile;
  recommendation: RiskRecommendation;
  processingTime: number;
  analyzedAt: Date;
}

export interface RiskRecommendation {
  action: 'APPROVE' | 'DENY' | 'REVIEW' | 'CONDITIONAL_APPROVAL';
  confidence: number;
  conditions: ApprovalCondition[];
  reasoning: string;
  alternativeProducts: string[];
}

export interface ApprovalCondition {
  type: 'COLLATERAL' | 'GUARANTOR' | 'INSURANCE' | 'LOWER_AMOUNT' | 'SHORTER_TERM' | 'HIGHER_RATE' | 'OTHER';
  description: string;
  required: boolean;
  estimatedImpact: number;
}

export interface RiskThresholdConfig {
  minScoreForApproval: number;
  maxDebtToIncomeRatio: number;
  maxCreditUtilization: number;
  latePaymentTolerance: number;
  bankruptcyLookbackYears: number;
  fraudProbabilityThreshold: number;
}

export interface RiskUpdateRequest {
  clientId: string;
  creditScore?: Partial<CreditScore>;
  debtLoad?: Partial<DebtLoad>;
  paymentHistory?: Partial<PaymentHistory>;
  status?: RiskStatus;
  notes?: string;
  updatedBy: string;
}

export interface RiskResponse {
  success: boolean;
  profile?: RiskProfile;
  analysisResult?: RiskAnalysisResult;
  error?: RiskError;
  metadata: ResponseMetadata;
}

export interface RiskError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  bureauError?: boolean;
}

export interface ResponseMetadata {
  requestId: string;
  timestamp: Date;
  processingTimeMs: number;
  bureauSource: string;
  dataFreshness: 'REAL_TIME' | 'NEAR_REAL_TIME' | 'CACHED' | 'STALE';
}

export const DEFAULT_RISK_THRESHOLDS: RiskThresholdConfig = {
  minScoreForApproval: 650,
  maxDebtToIncomeRatio: 0.43,
  maxCreditUtilization: 0.30,
  latePaymentTolerance: 2,
  bankruptcyLookbackYears: 7,
  fraudProbabilityThreshold: 0.15
};

export function mapRiskLevelToNumber(level: RiskLevel): number {
  const mapping: Record<RiskLevel, number> = {
    [RiskLevel.LOW]: 1,
    [RiskLevel.MEDIUM]: 2,
    [RiskLevel.HIGH]: 3,
    [RiskLevel.CRITICAL]: 4,
    [RiskLevel.UNKNOWN]: 0
  };
  return mapping[level] ?? 0;
}

export function isRiskLevel(value: string): value is RiskLevel {
  return Object.values(RiskLevel).includes(value as RiskLevel);
}

export function calculateOverallRiskScore(profile: RiskProfile): number {
  const baseScore = profile.creditScore.score;
  const debtPenalty = profile.debtLoad.debtToIncomeRatio * 100;
  const latePenalty = (profile.paymentHistory.latePayments + profile.paymentHistory.veryLatePayments * 2) * 5;
  const factorPenalty = profile.riskFactors.reduce((acc, factor) => {
    return acc + (mapRiskLevelToNumber(factor.severity) * factor.weight * 10);
  }, 0);
  return Math.max(0, Math.min(100, baseScore - debtPenalty - latePenalty - factorPenalty));
}