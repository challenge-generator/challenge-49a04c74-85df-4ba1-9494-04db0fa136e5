export const environment = {
  production: false,
  api: {
    creditOriginator: {
      baseUrl: 'http://localhost:3000/api/v1/credit-originator',
      timeout: 30000,
      retryAttempts: 3,
      retryDelay: 1000
    },
    fraudEngine: {
      baseUrl: 'http://localhost:3000/api/v1/fraud-engine',
      timeout: 15000,
      retryAttempts: 2,
      retryDelay: 500
    },
    riskBureau: {
      baseUrl: 'http://localhost:3000/api/v1/risk-bureau',
      timeout: 20000,
      retryAttempts: 3,
      retryDelay: 800
    }
  },
  auth: {
    tokenRefreshInterval: 300000,
    sessionTimeout: 1800000,
    maxLoginAttempts: 5,
    lockoutDuration: 900000
  },
  features: {
    enableDebugMode: true,
    enableRequestLogging: true,
    enablePerformanceMonitoring: true,
    enableMockServices: false,
    enableCache: true,
    cacheTimeout: 300000,
    enableRetryMechanism: true,
    enableCircuitBreaker: true,
    circuitBreakerThreshold: 5,
    circuitBreakerTimeout: 30000
  },
  ui: {
    defaultPageSize: 20,
    maxPageSize: 100,
    dateFormat: 'dd/MM/yyyy',
    timeFormat: 'HH:mm:ss',
    currencySymbol: '$',
    currencyCode: 'USD',
    locale: 'en-US'
  },
  security: {
    enableCsrfProtection: true,
    enableXssProtection: true,
    enableContentSecurityPolicy: true,
    allowedDomains: ['localhost:3000', 'localhost:4200'],
    corsEnabled: true,
    corsOrigins: ['http://localhost:4200', 'http://localhost:3000']
  },
  notification: {
    displayDuration: 5000,
    maxNotifications: 5,
    enableSound: true
  },
  logging: {
    level: 'debug',
    enableConsole: true,
    enableRemote: false,
    remoteEndpoint: '',
    logCategories: ['error', 'warning', 'info', 'debug', 'http']
  }
};