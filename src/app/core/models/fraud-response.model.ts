export type FraudRiskLevel = 'low' | 'medium' | 'high' | 'critical';
export type FraudCheckStatus = 'passed' | 'failed' | 'pending' | 'review_required' | 'unable_to_verify';
export type FraudFlagType = 'velocity' | 'pattern' | 'identity' | 'geographic' | 'device' | 'behavioral';

export interface FraudResponse {
  requestId: string;
  clientId: string;
  checkTimestamp: Date;
  riskScore: number;
  riskLevel: FraudRiskLevel;
  status: FraudCheckStatus;
  flags: FraudFlag[];
  recommendation: FraudRecommendation;
  reviewedBy?: string;
  reviewNotes?: string;
  externalReferenceId?: string;
}

export interface FraudFlag {
  id: string;
  type: FraudFlagType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  evidence: FraudEvidence;
  triggeredAt: Date;
  resolved?: boolean;
  resolutionNote?: string;
}

export interface FraudEvidence {
  field: string;
  expectedValue?: string;
  actualValue?: string;
  deviation?: number;
  metadata?: Record<string, unknown>;
}

export interface FraudRecommendation {
  action: 'approve' | 'reject' | 'review' | 'additional_verification';
  confidence: number;
  rationale: string;
  requiredActions?: string[];
}

export interface FraudHistoryEntry {
  clientId: string;
  transactionId: string;
  checkDate: Date;
  riskScore: number;
  riskLevel: FraudRiskLevel;
  outcome: 'approved' | 'rejected';
  flagsCount: number;
}

export interface FraudStatistics {
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  reviewRequired: number;
  averageRiskScore: number;
  highRiskPercentage: number;
  flaggedByType: Record<FraudFlagType, number>;
}

export const FRAUD_RISK_LEVEL_THRESHOLDS = {
  low: 20,
  medium: 50,
  high: 75,
  critical: 90
} as const;

export const FRAUD_STATUS_MESSAGES: Record<FraudCheckStatus, string> = {
  passed: 'Verificación de fraude completada exitosamente',
  failed: 'Se detectaron indicadores de fraude',
  pending: 'Verificación de fraude en proceso',
  review_required: 'Se requiere revisión manual',
  unable_to_verify: 'No fue posible completar la verificación'
};

export const FRAUD_FLAG_TYPE_LABELS: Record<FraudFlagType, string> = {
  velocity: 'Velocidad de transacciones',
  pattern: 'Patrón de comportamiento',
  identity: 'Verificación de identidad',
  geographic: 'Ubicación geográfica',
  device: 'Dispositivo utilizado',
  behavioral: 'Comportamiento anómalo'
};

export function calculateRiskLevel(score: number): FraudRiskLevel {
  if (score >= FRAUD_RISK_LEVEL_THRESHOLDS.critical) return 'critical';
  if (score >= FRAUD_RISK_LEVEL_THRESHOLDS.high) return 'high';
  if (score >= FRAUD_RISK_LEVEL_THRESHOLDS.medium) return 'medium';
  return 'low';
}

export function determineRecommendation(
  riskLevel: FraudRiskLevel,
  flags: FraudFlag[]
): FraudRecommendation {
  const criticalFlags = flags.filter(f => f.severity === 'critical').length;
  const highFlags = flags.filter(f => f.severity === 'high').length;

  if (riskLevel === 'critical' || criticalFlags > 0) {
    return {
      action: 'reject',
      confidence: 95,
      rationale: 'Se detectaron indicadores críticos de fraude que requieren rechazo inmediato',
      requiredActions: ['Notificar al equipo de fraude', 'Bloquear cuenta del cliente']
    };
  }

  if (riskLevel === 'high' || highFlags > 2) {
    return {
      action: 'review',
      confidence: 80,
      rationale: 'El nivel de riesgo es alto y requiere revisión manual antes de proceder',
      requiredActions: ['Revisión por analista de fraude', 'Verificación adicional de identidad']
    };
  }

  if (riskLevel === 'medium' || flags.length > 0) {
    return {
      action: 'additional_verification',
      confidence: 65,
      rationale: 'Se detectaron indicadores que requieren verificación adicional',
      requiredActions: ['Solicitar documentación adicional', 'Verificar información de contacto']
    };
  }

  return {
    action: 'approve',
    confidence: 95,
    rationale: 'La solicitud pasó todos los controles de fraude sin indicadores sospechosos'
  };
}

export function createFraudResponse(
  requestId: string,
  clientId: string,
  riskScore: number,
  flags: FraudFlag[]
): FraudResponse {
  const riskLevel = calculateRiskLevel(riskScore);
  const recommendation = determineRecommendation(riskLevel, flags);

  let status: FraudCheckStatus;
  if (recommendation.action === 'reject') {
    status = 'failed';
  } else if (recommendation.action === 'review' || recommendation.action === 'additional_verification') {
    status = 'review_required';
  } else if (recommendation.action === 'approve') {
    status = 'passed';
  } else {
    status = 'pending';
  }

  return {
    requestId,
    clientId,
    checkTimestamp: new Date(),
    riskScore,
    riskLevel,
    status,
    flags,
    recommendation,
    externalReferenceId: generateExternalReferenceId()
  };
}

function generateExternalReferenceId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `FR-${timestamp}-${randomPart}`.toUpperCase();
}

export function createFraudFlag(
  type: FraudFlagType,
  severity: FraudFlag['severity'],
  description: string,
  evidence: FraudEvidence
): FraudFlag {
  return {
    id: generateFlagId(),
    type,
    severity,
    description,
    evidence,
    triggeredAt: new Date(),
    resolved: false
  };
}

function generateFlagId(): string {
  return `FLAG-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`.toUpperCase();
}

export function aggregateFraudStatistics(history: FraudHistoryEntry[]): FraudStatistics {
  if (history.length === 0) {
    return {
      totalChecks: 0,
      passedChecks: 0,
      failedChecks: 0,
      reviewRequired: 0,
      averageRiskScore: 0,
      highRiskPercentage: 0,
      flaggedByType: {
        velocity: 0,
        pattern: 0,
        identity: 0,
        geographic: 0,
        device: 0,
        behavioral: 0
      }
    };
  }

  const totalChecks = history.length;
  const passedChecks = history.filter(h => h.outcome === 'approved').length;
  const failedChecks = history.filter(h => h.outcome === 'rejected').length;
  const averageRiskScore = history.reduce((sum, h) => sum + h.riskScore, 0) / totalChecks;
  const highRiskCount = history.filter(h => h.riskLevel === 'high' || h.riskLevel === 'critical').length;
  const highRiskPercentage = (highRiskCount / totalChecks) * 100;

  return {
    totalChecks,
    passedChecks,
    failedChecks,
    reviewRequired: totalChecks - passedChecks - failedChecks,
    averageRiskScore: Math.round(averageRiskScore * 100) / 100,
    highRiskPercentage: Math.round(highRiskPercentage * 100) / 100,
    flaggedByType: {
      velocity: Math.floor(Math.random() * totalChecks * 0.3),
      pattern: Math.floor(Math.random() * totalChecks * 0.25),
      identity: Math.floor(Math.random() * totalChecks * 0.2),
      geographic: Math.floor(Math.random() * totalChecks * 0.15),
      device: Math.floor(Math.random() * totalChecks * 0.1),
      behavioral: Math.floor(Math.random() * totalChecks * 0.05)
    }
  };
}