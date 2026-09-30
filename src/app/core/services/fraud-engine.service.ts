import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FraudResponse } from '../models/fraud-response.model';
import { CreditRequest } from '../models/credit-request.model';
import { environment } from '@environments/environment';

/**
 * Servicio para interactuar con el motor antifraude.
 * Maneja flujos de datos reactivos para validación en tiempo real.
 */
@Injectable({
  providedIn: 'root'
})
export class FraudEngineService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrls.fraudEngine;

  /**
   * Analiza una solicitud de crédito en busca de fraudes.
   * @param request Datos de la solicitud de crédito
   * @returns Observable con el resultado del análisis
   */
  analyzeForFraud(request: CreditRequest): Observable<FraudResponse> {
    return this.http.post<FraudResponse>(
      `${this.apiUrl}/analyze`,
      request,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  /**
   * Obtiene el historial de fraudes para un cliente.
   * @param clientId ID del cliente
   * @returns Observable con el historial de fraudes
   */
  getFraudHistory(clientId: string): Observable<FraudResponse[]> {
    return this.http.get<FraudResponse[]>(`${this.apiUrl}/history/${clientId}`);
  }

  /**
   * Marca una transacción como sospechosa.
   * @param transactionId ID de la transacción
   * @param reason Razón para marcar como sospechosa
   * @returns Observable confirmando el marcado
   */
  flagSuspiciousTransaction(transactionId: string, reason: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiUrl}/flag`,
      { transactionId, reason },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}