import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditRequest } from '../models/credit-request.model';
import { environment } from '@environments/environment';

/**
 * Servicio para interactuar con el origenador de créditos.
 * Aplica patrones reactivos para manejar flujos de datos asíncronos.
 */
@Injectable({
  providedIn: 'root'
})
export class CreditOriginatorService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrls.creditOriginator;

  /**
   * Envía una solicitud de crédito al origenador.
   * @param request Datos de la solicitud de crédito
   * @returns Observable con la respuesta del origenador
   */
  submitCreditRequest(request: CreditRequest): Observable<{ approvalId: string, status: string }> {
    return this.http.post<{ approvalId: string, status: string }>(
      `${this.apiUrl}/submit`,
      request,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  /**
   * Obtiene el estado de una solicitud de crédito.
   * @param approvalId ID de la aprobación
   * @returns Observable con el estado actual
   */
  getRequestStatus(approvalId: string): Observable<{ status: string, details?: string }> {
    return this.http.get<{ status: string, details?: string }>(
      `${this.apiUrl}/status/${approvalId}`
    );
  }

  /**
   * Cancela una solicitud de crédito en proceso.
   * @param approvalId ID de la aprobación
   * @returns Observable confirmando la cancelación
   */
  cancelRequest(approvalId: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(
      `${this.apiUrl}/cancel/${approvalId}`
    );
  }
}