import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {
  Observable,
  throwError,
  BehaviorSubject,
  timer
} from 'rxjs';
import {
  catchError,
  retry,
  timeout,
  map,
  finalize,
  shareReplay
} from 'rxjs/operators';

export interface HttpRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  body?: unknown;
  headers?: HttpHeaders;
  params?: HttpParams;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
  observe?: 'body' | 'response' | 'events';
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface RetryConfig {
  maxRetries: number;
  delayMs: number;
  exponentialBackoff?: boolean;
}

export interface HttpError {
  status: number;
  message: string;
  url?: string;
  timestamp: Date;
  details?: unknown;
}

export interface RequestMetrics {
  url: string;
  method: string;
  statusCode: number;
  duration: number;
  timestamp: Date;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.credit-processing.example.com';

  private readonly activeRequests$ = new BehaviorSubject<number>(0);
  private readonly requestMetrics$ = new BehaviorSubject<RequestMetrics[]>([]);
  private readonly defaultRetryConfig: RetryConfig = {
    maxRetries: 3,
    delayMs: 1000,
    exponentialBackoff: true
  };

  readonly activeRequests = this.activeRequests$.asObservable();
  readonly metrics = this.requestMetrics$.asObservable();

  request<T>(config: HttpRequestConfig): Observable<T> {
    const startTime = Date.now();
    this.activeRequests$.next(this.activeRequests$.value + 1);

    const fullUrl = this.buildFullUrl(config.url);
    const httpConfig = this.buildHttpConfig(config);

    return this.executeRequest<T>(fullUrl, httpConfig).pipe(
      timeout(30000),
      retry({
        count: this.defaultRetryConfig.maxRetries,
        delay: (error, retryCount) => this.calculateRetryDelay(retryCount)
      }),
      map(response => this.extractData<T>(response, config)),
      catchError(error => this.handleError(error, config)),
      finalize(() => {
        this.activeRequests$.next(this.activeRequests$.value - 1);
        this.recordMetrics(
          config.url,
          config.method,
          0,
          Date.now() - startTime,
          false
        );
      }),
      shareReplay(1)
    );
  }

  get<T>(url: string, options?: Partial<HttpRequestConfig>): Observable<T> {
    return this.request<T>({
      method: 'GET',
      url,
      ...options
    });
  }

  post<T>(url: string, body: unknown, options?: Partial<HttpRequestConfig>): Observable<T> {
    return this.request<T>({
      method: 'POST',
      url,
      body,
      ...options
    });
  }

  put<T>(url: string, body: unknown, options?: Partial<HttpRequestConfig>): Observable<T> {
    return this.request<T>({
      method: 'PUT',
      url,
      body,
      ...options
    });
  }

  patch<T>(url: string, body: unknown, options?: Partial<HttpRequestConfig>): Observable<T> {
    return this.request<T>({
      method: 'PATCH',
      url,
      body,
      ...options
    });
  }

  delete<T>(url: string, options?: Partial<HttpRequestConfig>): Observable<T> {
    return this.request<T>({
      method: 'DELETE',
      url,
      ...options
    });
  }

  private buildFullUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `${this.baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  }

  private buildHttpConfig(config: HttpRequestConfig): HttpRequestConfig {
    const defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return {
      ...config,
      headers: config.headers || defaultHeaders,
      responseType: config.responseType || 'json',
      observe: config.observe || 'body',
      withCredentials: config.withCredentials ?? true
    };
  }

  private executeRequest<T>(url: string, config: HttpRequestConfig): Observable<T> {
    return this.http.request<T>(
      config.method,
      url,
      {
        body: config.body,
        headers: config.headers,
        params: config.params,
        responseType: config.responseType,
        observe: config.observe,
        reportProgress: config.reportProgress,
        withCredentials: config.withCredentials
      }
    );
  }

  private extractData<T>(response: unknown, config: HttpRequestConfig): T {
    if (config.observe === 'response') {
      return (response as { body: T }).body;
    }
    return response as T;
  }

  private handleError(error: HttpErrorResponse, config: HttpRequestConfig): Observable<never> {
    let errorMessage: string;
    let httpError: HttpError;

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de cliente: ${error.error.message}`;
      httpError = {
        status: 0,
        message: errorMessage,
        url: config.url,
        timestamp: new Date(),
        details: error.error
      };
    } else {
      errorMessage = this.getServerErrorMessage(error);
      httpError = {
        status: error.status,
        message: errorMessage,
        url: config.url,
        timestamp: new Date(),
        details: error.error
      };
    }

    this.recordMetrics(
      config.url,
      config.method,
      error.status,
      0,
      false
    );

    console.error('HTTP Error:', httpError);
    return throwError(() => httpError);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 0:
        return 'No se pudo conectar con el servidor';
      case 400:
        return error.error?.message || 'Solicitud incorrecta';
      case 401:
        return 'No autorizado - Token de sesión expirado';
      case 403:
        return 'Acceso denegado - Permisos insuficientes';
      case 404:
        return 'Recurso no encontrado';
      case 408:
        return 'Tiempo de espera agotado';
      case 422:
        return error.error?.message || 'Datos de validación incorrectos';
      case 429:
        return 'Demasiadas solicitudes - Rate limit excedido';
      case 500:
        return 'Error interno del servidor';
      case 502:
        return 'Puerta de enlace incorrecta';
      case 503:
        return 'Servicio no disponible';
      case 504:
        return 'Tiempo de espera de gateway agotado';
      default:
        return `Error desconocido: ${error.status} - ${error.message}`;
    }
  }

  private calculateRetryDelay(retryCount: number): Observable<number> {
    const { delayMs, exponentialBackoff } = this.defaultRetryConfig;
    const delay = exponentialBackoff
      ? delayMs * Math.pow(2, retryCount - 1)
      : delayMs;
    return timer(delay);
  }

  private recordMetrics(
    url: string,
    method: string,
    statusCode: number,
    duration: number,
    success: boolean
  ): void {
    const metrics: RequestMetrics = {
      url,
      method,
      statusCode,
      duration,
      timestamp: new Date(),
      success
    };

    const currentMetrics = this.requestMetrics$.value;
    const updatedMetrics = [...currentMetrics, metrics].slice(-100);
    this.requestMetrics$.next(updatedMetrics);
  }

  clearMetrics(): void {
    this.requestMetrics$.next([]);
  }

  getMetricsSummary(): { total: number; successRate: number; avgDuration: number } {
    const metrics = this.requestMetrics$.value;
    if (metrics.length === 0) {
      return { total: 0, successRate: 0, avgDuration: 0 };
    }

    const successful = metrics.filter(m => m.success).length;
    const totalDuration = metrics.reduce((sum, m) => sum + m.duration, 0);

    return {
      total: metrics.length,
      successRate: (successful / metrics.length) * 100,
      avgDuration: totalDuration / metrics.length
    };
  }
}