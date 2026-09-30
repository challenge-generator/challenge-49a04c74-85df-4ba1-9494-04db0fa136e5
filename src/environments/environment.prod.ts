export const environment = {
  production: true,
  api: {
    creditOriginator: {
      baseUrl: 'https://api.credit-processor.example.com/v1/credit-originator',
      timeout: 25000,
      retryAttempts: 2,
      retryDelay: 1500
    },
    fraudEngine: {
      baseUrl: 'https://api.fraud-detection.example.com/v1/fraud-engine',
      timeout: 12000,
      retryAttempts: 1,
      retryDelay: 1000
    },
    riskBureau: {
      baseUrl: 'https://api.risk-bureau.example.com/v1/risk-bureau',
      timeout: 18000,
      retryAttempts: 2,
      retryDelay: 1200
    }
  },
  auth: {
    tokenRefreshInterval: 240000,
    sessionTimeout: 3600000,
    maxLoginAttempts: 3,
    lockoutDuration: 1800000
  },
  features: {
    enableDebugMode: false,
    enableRequestLogging: false,
    enablePerformanceMonitoring: true,
    enableMockServices: false,
    enableCache: true,
    cacheTimeout: 600000,
    enableRetryMechanism: true,
    enableCircuitBreaker: true,
    circuitBreakerThreshold: 10,
    circuitBreakerTimeout: 60000
  },
  ui: {
    defaultPageSize: 25,
    maxPageSize: 50,
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'HH:mm:ss',
    currencySymbol: '$',
    currencyCode: 'USD',
    locale: 'en-US'
  },
  security: {
    enableCsrfProtection: true,
    enableXssProtection: true,
    enableContentSecurityPolicy: true,
    allowedDomains: ['api.credit-processor.example.com', 'app.credit-processor.example.com'],
    corsEnabled: true,
    corsOrigins: ['https://app.credit-processor.example.com']
  },
  notification: {
    displayDuration: 3000,
    maxNotifications: 3,
    enableSound: false
  },
  logging: {
    level: 'error',
    enableConsole: false,
    enableRemote: true,
    remoteEndpoint: 'https://logs.credit-processor.example.com/api/v1/logs',
    logCategories: ['error', 'warning']
  }
};