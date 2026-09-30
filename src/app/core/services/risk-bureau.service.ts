import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiskResponse } from '../models/risk-response.model';
import { CreditRequest } from '../models/credit-request.model';
import { environment } from '@environments/environment';

/**
 * Servicio para interactuar con el buró de riesgos.
 * Asegura consistencia y disponibilidad mediante patrones reactivos.
 */
@Injectable({
  providedIn: 'root'
})
export class RiskBureauService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrls.riskBureau;

  /**
   * Obtiene el perfil de riesgo de un cliente.
   * @param clientId ID del cliente
   * @returns Observable con el perfil de riesgo
   */
  getRiskProfile(clientId: string): Observable<RiskResponse> {
    return this.http.get<RiskResponse>(`${this.apiUrl}/profile/${clientId}`);
  }

  /**
   * Analiza el riesgo de una solicitud de crédito.
   * @param request Datos de la solicitud de crédito
   * @returns Observable con el análisis de riesgo
   */
  analyzeCreditRisk(request: CreditRequest): Observable<RiskResponse> {
    return this.http.post<RiskResponse>(
      `${this.apiUrl}/analyze`,
      request,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  /**
   * Actualiza el perfil de riesgo de un cliente.
   * @param clientId ID del cliente
   * @param updateData Datos para actualizar
   * @returns Observable confirmando la actualización
   */
  updateRiskProfile(clientId: string, updateData: { scoreAdjustment: number, notes: string }): Observable<{ success: boolean }> {
    return this.http.patch<{ success: boolean }>(
      `${this.apiUrl}/profile/${clientId}`,
      updateData,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}