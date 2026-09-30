import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from '../../app.routes';
import { authInterceptor } from './auth.interceptor';

export interface SecurityPolicy {
  sessionTimeout: number;
  maxLoginAttempts: number;
  requireMfa: boolean;
  allowedOrigins: string[];
  corsEnabled: boolean;
}

export interface AuthConfig {
  issuer: string;
  audience: string;
  jwksUri: string;
  tokenEndpoint: string;
  scopes: string[];
}

export const DEFAULT_SECURITY_POLICY: SecurityPolicy = {
  sessionTimeout: 1800,
  maxLoginAttempts: 5,
  requireMfa: true,
  allowedOrigins: ['http://localhost:4200'],
  corsEnabled: true
};

export const DEFAULT_AUTH_CONFIG: AuthConfig = {
  issuer: 'https://auth.example.com',
  audience: 'credit-processing-api',
  jwksUri: 'https://auth.example.com/.well-known/jwks.json',
  tokenEndpoint: 'https://auth.example.com/oauth/token',
  scopes: ['credit:read', 'credit:write', 'fraud:read', 'risk:read']
};

export function createSecurityConfig(
  customPolicy?: Partial<SecurityPolicy>,
  customAuthConfig?: Partial<AuthConfig>
): ApplicationConfig {
  const securityPolicy: SecurityPolicy = {
    ...DEFAULT_SECURITY_POLICY,
    ...customPolicy
  };

  const authConfig: AuthConfig = {
    ...DEFAULT_AUTH_CONFIG,
    ...customAuthConfig
  };

  return {
    providers: [
      provideRouter(routes),
      provideHttpClient(
        withInterceptors([authInterceptor])
      ),
      {
        provide: 'SECURITY_POLICY',
        useValue: securityPolicy
      },
      {
        provide: 'AUTH_CONFIG',
        useValue: authConfig
      }
    ]
  };
}