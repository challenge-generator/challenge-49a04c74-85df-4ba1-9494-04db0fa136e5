# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/app/infrastructure/security/auth.interceptor.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/app/infrastructure/security/auth.service.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/app/infrastructure/security/security.config.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/app/core/models/credit-request.model.ts` — `CreditRequestValidationError.push`: Se invoca `push` sobre `CreditRequestValidationError`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/core/models/fraud-response.model.ts` — `FraudFlag.filter`: Se invoca `filter` sobre `FraudFlag`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/core/models/fraud-response.model.ts` — `FraudHistoryEntry.filter`: Se invoca `filter` sobre `FraudHistoryEntry`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/core/models/fraud-response.model.ts` — `FraudHistoryEntry.reduce`: Se invoca `reduce` sobre `FraudHistoryEntry`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/core/models/risk-response.model.ts` — `RiskFactor.reduce`: Se invoca `reduce` sobre `RiskFactor`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/fraud-detection/fraud-detection.component.ts` — `FraudAlert.set`: Se invoca `set` sobre `FraudAlert`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/fraud-detection/fraud-detection.component.ts` — `FraudAlert.update`: Se invoca `update` sobre `FraudAlert`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/fraud-detection/fraud-detection.component.ts` — `FraudAlert.map`: Se invoca `map` sobre `FraudAlert`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/risk-assessment/risk-assessment.component.ts` — `RiskFactor.reduce`: Se invoca `reduce` sobre `RiskFactor`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/risk-assessment/risk-assessment.component.ts` — `RiskFactor.push`: Se invoca `push` sobre `RiskFactor`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/infrastructure/http/http-client.service.ts` — `RequestMetrics.filter`: Se invoca `filter` sobre `RequestMetrics`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/infrastructure/http/http-client.service.ts` — `RequestMetrics.reduce`: Se invoca `reduce` sobre `RequestMetrics`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Master

### Brecha de conocimiento
Aplica el framework de buenas prácticas de arquitectura en Cloud Computing. Cierre de brecha: mejorar la aplicación de patrones arquitectónicos en entornos cloud, garantizando escalabilidad, seguridad y mantenibilidad

### Misión / candidato
Candidato con experiencia senior en equipos de producto.

### Reto
- Tema: Framework de buenas prácticas de arquitectura
- Seniority: master-l1
- Tipo: theoretical
- Título: Aplicación de patrones arquitectónicos en entornos cloud
- Tiempo estimado: 2 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Exploración del sistema y sus restricciones — objetivo: Identificar las restricciones y ambigüedades del sistema en el contexto de cloud computing. — entregable (NO resolver): Lista de restricciones y ambigüedades identificadas en el sistema.
- Fase 2: Evaluación de una decisión controversial — objetivo: Evaluar una decisión controversial en la aplicación de patrones arquitectónicos y justificar la elección. — entregable (NO resolver): Registro de la decisión que incluye contexto, fuerzas, opciones con pros/contras, decisión y consecuencias.
- Fase 3: Comunicación a audiencias distintas — objetivo: Comunicar la decisión tomada a audiencias con diferentes niveles de abstracción. — entregable (NO resolver): Dos presentaciones (una técnica y una de negocio) que comunican la decisión tomada.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "credit-processing-app",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.0.0",
    "@angular/common": "~20.0.0",
    "@angular/compiler": "~20.0.0",
    "@angular/core": "~20.0.0",
    "@angular/forms": "~20.0.0",
    "@angular/platform-browser": "~20.0.0",
    "@angular/platform-browser-dynamic": "~20.0.0",
    "@angular/router": "~20.0.0",
    "@angular/material": "^17.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0",
    "jwt-decode": "^4.0.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.0.0",
    "@angular/cli": "~20.0.0",
    "@angular/compiler-cli": "~20.0.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.4.2",
    "eslint": "^8.56.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsdoc": "^48.0.0",
    "eslint-plugin-prefer-arrow": "^1.2.3"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "credit-processing-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "skipTests": true
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/credit-processing-app",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all",
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            },
            "development": {
              "optimization": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "credit-processing-app:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "credit-processing-app:build:production"
            },
            "development": {
              "browserTarget": "credit-processing-app:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "credit-processing-app:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        },
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "credit-processing-app:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "credit-processing-app:serve:production"
            }
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false,
    "schematicCollections": [
      "@schematics/angular"
    ]
  },
  "schematics": {
    "@schematics/angular:component": {
      "style": "scss",
      "skipTests": true
    }
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ],
    "paths": {
      "@app/*": ["src/app/*"],
      "@environments/*": ["src/environments/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}

// === ARCHIVO: src/app/core/services/credit-originator.service.ts ===
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

// === ARCHIVO: src/app/core/services/fraud-engine.service.ts ===
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

// === ARCHIVO: src/app/core/services/risk-bureau.service.ts ===
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

// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { ErrorHandler } from '@angular/core';

class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    console.error('[FATAL] Error no controlado en la aplicación:', error.message);
    console.error('Stack trace:', error.stack);
    
    const errorEvent = new CustomEvent('app:error', {
      detail: {
        message: error.message,
        timestamp: new Date().toISOString(),
        type: error.name
      }
    });
    window.dispatchEvent(errorEvent);
  }
}

const enhancedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};

console.log('[BOOTSTRAP] Iniciando aplicación de procesamiento de créditos...');
console.log('[BOOTSTRAP] Entorno:', 'development');
console.log('[BOOTSTRAP] Angular version: 20.0.0');

if (!window.fetch) {
  console.error('[BOOTSTRAP] ERROR: El navegador no soporta la API Fetch');
}

const startTime = performance.now();

bootstrapApplication(AppComponent, enhancedConfig)
  .then(appRef => {
    const bootTime = performance.now() - startTime;
    console.log(`[BOOTSTRAP] Aplicación iniciada correctamente en ${bootTime.toFixed(2)}ms`);
    
    appRef.components.forEach((componentRef, token) => {
      console.log(`[BOOTSTRAP] Componente registrado: ${token?.toString() || 'anonymous'}`);
    });
    
    window.dispatchEvent(new CustomEvent('app:ready', {
      detail: { bootTime, timestamp: new Date().toISOString() }
    }));
  })
  .catch(err => {
    console.error('[BOOTSTRAP] ERROR FATAL durante el arranque de la aplicación:');
    console.error(err);
    
    const rootElement = document.querySelector('app-root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="
          padding: 40px;
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #fff5f5;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        ">
          <h1 style="color: #c53030; margin-bottom: 16px;">Error de Inicialización</h1>
          <p style="color: #742a2a; margin-bottom: 24px;">
            La aplicación no pudo iniciar correctamente.
          </p>
          <pre style="
            background: #fed7d7;
            padding: 16px;
            border-radius: 8px;
            text-align: left;
            max-width: 600px;
            overflow-x: auto;
            font-size: 12px;
          ">${err?.message || err || 'Error desconocido'}</pre>
          <button onclick="window.location.reload()" style="
            margin-top: 24px;
            padding: 12px 24px;
            background: #e53e3e;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
          ">Reintentar</button>
        </div>
      `;
    }
    
    throw err;
  });

window.addEventListener('unhandledrejection', (event) => {
  console.error('[BOOTSTRAP] Promise rejection no manejada:', event.reason);
  event.preventDefault();
});

window.addEventListener('error', (event) => {
  if (event.filename?.includes('main.ts') || event.filename?.includes('bundle.js')) {
    console.error('[BOOTSTRAP] Error de carga de recursos:', event.message);
  }
});

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Credit Processing App - Sistema de Gestión de Créditos</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aplicación de procesamiento de solicitudes de crédito con evaluación de riesgo y detección de fraude">
  <meta name="author" content="Pragma Architecture Team">
  <meta name="theme-color" content="#1976d2">
  
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body {
      height: 100%;
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #fafafa;
      color: rgba(0, 0, 0, 0.87);
    }
    
    .app-loading {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      z-index: 9999;
    }
    
    .app-loading .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e0e0e0;
      border-top-color: #1976d2;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    .app-loading .message {
      margin-top: 16px;
      color: #757575;
      font-size: 14px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .app-loading.hidden {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-out;
    }
  </style>
</head>
<body>
  <app-root>
    <div class="app-loading">
      <div class="spinner"></div>
      <div class="message">Cargando sistema de procesamiento de créditos...</div>
    </div>
  </app-root>
  
  <noscript>
    <div style="
      padding: 40px;
      text-align: center;
      font-family: sans-serif;
      background: #fff3cd;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    ">
      <h1 style="color: #856404;">JavaScript Requerido</h1>
      <p style="color: #856404; margin-top: 16px;">
        Esta aplicación requiere JavaScript para funcionar.
        Por favor, habilite JavaScript en su navegador.
      </p>
    </div>
  </noscript>
  
  <script>
    (function() {
      window.addEventListener('app:ready', function() {
        var loadingElement = document.querySelector('.app-loading');
        if (loadingElement) {
          loadingElement.classList.add('hidden');
          setTimeout(function() {
            loadingElement.remove();
          }, 300);
        }
      });
      
      window.addEventListener('app:error', function(event) {
        console.error('Error capturado en index.html:', event.detail);
      });
    })();
  </script>
</body>
</html>

// === ARCHIVO: src/app/core/models/credit-request.model.ts ===
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

// === ARCHIVO: src/app/core/models/fraud-response.model.ts ===
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

// === ARCHIVO: src/app/core/models/risk-response.model.ts ===
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

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { authInterceptor } from './infrastructure/security/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([authInterceptor])
    ),
    provideAnimationsAsync()
  ]
};

// === ARCHIVO: src/app/features/credit-processing/credit-processing.component.ts ===
import { Component, OnInit, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CreditOriginatorService } from '../../core/services/credit-originator.service';
import { FraudEngineService } from '../../core/services/fraud-engine.service';
import { RiskBureauService } from '../../core/services/risk-bureau.service';
import { CreditRequest } from '../../core/models/credit-request.model';
import { FraudResponse } from '../../core/models/fraud-response.model';
import { RiskResponse } from '../../core/models/risk-response.model';

interface ProcessingState {
  step: 'idle' | 'submitting' | 'fraud-check' | 'risk-assessment' | 'completed' | 'error';
  approvalId?: string;
  fraudResult?: FraudResponse;
  riskResult?: RiskResponse;
  errorMessage?: string;
}

@Component({
  selector: 'app-credit-processing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './credit-processing.component.html',
  styleUrl: './credit-processing.component.scss'
})
export class CreditProcessingComponent implements OnInit {
  private readonly creditService = inject(CreditOriginatorService);
  private readonly fraudService = inject(FraudEngineService);
  private readonly riskService = inject(RiskBureauService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly creditForm: FormGroup = this.fb.group({
    clientId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    clientName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    clientEmail: ['', [Validators.required, Validators.email]],
    clientPhone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
    requestedAmount: ['', [Validators.required, Validators.min(1000), Validators.max(1000000)]],
    currency: ['USD', [Validators.required]],
    loanTerm: ['', [Validators.required, Validators.min(6), Validators.max(360)]],
    loanPurpose: ['', [Validators.required]],
    monthlyIncome: ['', [Validators.required, Validators.min(0)]],
    employmentStatus: ['', [Validators.required]]
  });

  readonly state = signal<ProcessingState>({ step: 'idle' });

  readonly isLoading = computed(() => 
    this.state().step === 'submitting' || 
    this.state().step === 'fraud-check' || 
    this.state().step === 'risk-assessment'
  );

  readonly currentStep = computed(() => {
    const step = this.state().step;
    if (step === 'idle' || step === 'error') return 0;
    if (step === 'submitting') return 1;
    if (step === 'fraud-check') return 2;
    if (step === 'risk-assessment') return 3;
    if (step === 'completed') return 4;
    return 0;
  });

  readonly canSubmit = computed(() => this.creditForm.valid && !this.isLoading());

  readonly loanPurposes = [
    { value: 'personal', label: 'Personal' },
    { value: 'business', label: 'Negocio' },
    { value: 'home_improvement', label: 'Mejora de Hogar' },
    { value: 'debt_consolidation', label: 'Consolidación de Deudas' },
    { value: 'education', label: 'Educación' },
    { value: 'other', label: 'Otro' }
  ];

  readonly employmentStatuses = [
    { value: 'employed', label: 'Empleado' },
    { value: 'self_employed', label: 'Autónomo' },
    { value: 'entrepreneur', label: 'Emprendedor' },
    { value: 'retired', label: 'Jubilado' },
    { value: 'unemployed', label: 'Desempleado' }
  ];

  readonly currencies = ['USD', 'EUR', 'GBP', 'MXN', 'CAD'];

  constructor() {
    effect(() => {
      const currentState = this.state();
      if (currentState.step === 'completed') {
        this.snackBar.open(
          `Solicitud procesada exitosamente. ID: ${currentState.approvalId}`,
          'Cerrar',
          { duration: 5000, panelClass: 'success-snackbar' }
        );
      } else if (currentState.step === 'error') {
        this.snackBar.open(
          currentState.errorMessage || 'Error al procesar la solicitud',
          'Cerrar',
          { duration: 5000, panelClass: 'error-snackbar' }
        );
      }
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(): void {
    if (!this.canSubmit()) {
      this.creditForm.markAllAsTouched();
      return;
    }

    const creditRequest: CreditRequest = this.buildCreditRequest();
    this.processCreditRequest(creditRequest);
  }

  private buildCreditRequest(): CreditRequest {
    const formValue = this.creditForm.value;
    return {
      clientId: formValue.clientId,
      clientName: formValue.clientName,
      clientEmail: formValue.clientEmail,
      clientPhone: formValue.clientPhone,
      requestedAmount: Number(formValue.requestedAmount),
      currency: formValue.currency,
      loanTerm: Number(formValue.loanTerm),
      loanPurpose: formValue.loanPurpose,
      monthlyIncome: Number(formValue.monthlyIncome),
      employmentStatus: formValue.employmentStatus,
      requestDate: new Date().toISOString(),
      status: 'pending'
    };
  }

  private processCreditRequest(request: CreditRequest): void {
    this.state.set({ step: 'submitting' });

    this.creditService.submitCreditRequest(request).subscribe({
      next: (response) => {
        const approvalId = response.approvalId || this.generateApprovalId();
        this.state.set({ step: 'fraud-check', approvalId });
        this.checkFraud(request, approvalId);
      },
      error: (error) => {
        this.state.set({ 
          step: 'error', 
          errorMessage: error.message || 'Error al enviar la solicitud' 
        });
      }
    });
  }

  private checkFraud(request: CreditRequest, approvalId: string): void {
    this.state.update(s => ({ ...s, step: 'fraud-check' }));

    this.fraudService.analyzeForFraud(request).subscribe({
      next: (fraudResult) => {
        if (fraudResult.isFraudulent) {
          this.state.set({ 
            step: 'error', 
            approvalId,
            errorMessage: `Transacción flagged como sospechosa: ${fraudResult.reason || 'Verificación fallida'}` 
          });
          return;
        }

        this.state.set({ 
          step: 'risk-assessment', 
          approvalId, 
          fraudResult 
        });
        this.assessRisk(request, approvalId, fraudResult);
      },
      error: (error) => {
        this.state.set({ 
          step: 'error', 
          approvalId,
          errorMessage: error.message || 'Error en la verificación antifraude' 
        });
      }
    });
  }

  private assessRisk(request: CreditRequest, approvalId: string, fraudResult: FraudResponse): void {
    this.state.update(s => ({ ...s, step: 'risk-assessment' }));

    this.riskService.analyzeCreditRisk(request).subscribe({
      next: (riskResult) => {
        const riskScore = riskResult.riskScore || 0;
        const approved = riskScore <= 70;

        if (!approved) {
          this.state.set({ 
            step: 'error', 
            approvalId,
            fraudResult,
            riskResult,
            errorMessage: `Riesgo demasiado alto: Score ${riskScore}. Se requiere revisión manual.` 
          });
          return;
        }

        this.state.set({ 
          step: 'completed', 
          approvalId, 
          fraudResult, 
          riskResult 
        });
      },
      error: (error) => {
        this.state.set({ 
          step: 'error', 
          approvalId,
          fraudResult,
          errorMessage: error.message || 'Error en la evaluación de riesgo' 
        });
      }
    });
  }

  private generateApprovalId(): string {
    return 'APR-' + Date.now().toString(36).toUpperCase() + '-' + 
           Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  resetForm(): void {
    this.creditForm.reset({
      currency: 'USD',
      loanTerm: '',
      loanPurpose: '',
      employmentStatus: ''
    });
    this.state.set({ step: 'idle' });
  }

  getErrorMessage(field: string): string {
    const control = this.creditForm.get(field);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'Este campo es requerido';
    if (control.errors['minlength']) return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
    if (control.errors['maxlength']) return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
    if (control.errors['min']) return `Valor mínimo: ${control.errors['min'].min}`;
    if (control.errors['max']) return `Valor máximo: ${control.errors['max'].max}`;
    if (control.errors['email']) return 'Correo electrónico inválido';
    if (control.errors['pattern']) return 'Formato inválido';

    return 'Campo inválido';
  }
}

// === ARCHIVO: src/app/features/credit-processing/credit-processing.component.html ===
<div class="credit-processing-container">
  <mat-card class="credit-card">
    <mat-card-header>
      <mat-card-title>
        <mat-icon>account_balance</mat-icon>
        Procesamiento de Crédito
      </mat-card-title>
      <mat-card-subtitle>
        Complete el formulario para iniciar la evaluación de su solicitud
      </mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      @if (state().step === 'error') {
        <div class="error-banner">
          <mat-icon>error_outline</mat-icon>
          <span>{{ state().errorMessage }}</span>
          <button mat-stroked-button color="primary" (click)="resetForm()">
            <mat-icon>refresh</mat-icon>
            Nueva Solicitud
          </button>
        </div>
      }

      @if (state().step === 'completed') {
        <div class="success-banner">
          <mat-icon>check_circle</mat-icon>
          <div class="success-content">
            <h3>Solicitud Aprobada</h3>
            <p>ID de aprobación: <strong>{{ state().approvalId }}</strong></p>
            @if (state().riskResult) {
              <p>Score de riesgo: {{ state().riskResult?.riskScore }}/100</p>
            }
          </div>
          <button mat-stroked-button color="primary" (click)="resetForm()">
            <mat-icon>add</mat-icon>
            Nueva Solicitud
          </button>
        </div>
      }

      <mat-stepper [linear]="true" [selectedIndex]="currentStep()" #stepper>
        <mat-step [stepControl]="creditForm" label="Datos del Cliente">
          <form [formGroup]="creditForm" class="form-section">
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>ID Cliente</mat-label>
                <input matInput formControlName="clientId" placeholder="CLT-00001">
                <mat-error>{{ getErrorMessage('clientId') }}</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Nombre Completo</mat-label>
                <input matInput formControlName="clientName" placeholder="Juan Pérez">
                <mat-error>{{ getErrorMessage('clientName') }}</mat-error>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Correo Electrónico</mat-label>
                <input matInput type="email" formControlName="clientEmail" placeholder="juan@ejemplo.com">
                <mat-error>{{ getErrorMessage('clientEmail') }}</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Teléfono</mat-label>
                <input matInput formControlName="clientPhone" placeholder="+1234567890">
                <mat-error>{{ getErrorMessage('clientPhone') }}</mat-error>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Estado de Empleo</mat-label>
                <mat-select formControlName="employmentStatus">
                  @for (status of employmentStatuses; track status.value) {
                    <mat-option [value]="status.value">{{ status.label }}</mat-option>
                  }
                </mat-select>
                <mat-error>{{ getErrorMessage('employmentStatus') }}</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Ingreso Mensual</mat-label>
                <input matInput type="number" formControlName="monthlyIncome" placeholder="5000">
                <span matTextSuffix>USD</span>
                <mat-error>{{ getErrorMessage('monthlyIncome') }}</mat-error>
              </mat-form-field>
            </div>

            <div class="step-actions">
              <button mat-flat-button color="primary" matStepperNext [disabled]="!creditForm.valid">
                Siguiente
                <mat-icon>arrow_forward</mat-icon>
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step label="Detalles del Crédito">
          <form [formGroup]="creditForm" class="form-section">
            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Monto Solicitado</mat-label>
                <input matInput type="number" formControlName="requestedAmount" placeholder="50000">
                <span matTextSuffix>USD</span>
                <mat-error>{{ getErrorMessage('requestedAmount') }}</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Moneda</mat-label>
                <mat-select formControlName="currency">
                  @for (currency of currencies; track currency) {
                    <mat-option [value]="currency">{{ currency }}</mat-option>
                  }
                </mat-select>
                <mat-error>{{ getErrorMessage('currency') }}</mat-error>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Plazo (meses)</mat-label>
                <input matInput type="number" formControlName="loanTerm" placeholder="24">
                <mat-error>{{ getErrorMessage('loanTerm') }}</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Propósito del Crédito</mat-label>
                <mat-select formControlName="loanPurpose">
                  @for (purpose of loanPurposes; track purpose.value) {
                    <mat-option [value]="purpose.value">{{ purpose.label }}</mat-option>
                  }
                </mat-select>
                <mat-error>{{ getErrorMessage('loanPurpose') }}</mat-error>
              </mat-form-field>
            </div>

            <div class="step-actions">
              <button mat-stroked-button matStepperPrevious>
                <mat-icon>arrow_back</mat-icon>
                Atrás
              </button>
              <button mat-flat-button color="primary" matStepperNext [disabled]="!creditForm.valid">
                Siguiente
                <mat-icon>arrow_forward</mat-icon>
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step label="Revisión y Envío">
          <div class="review-section">
            <h3>Resumen de la Solicitud</h3>
            
            <div class="summary-grid">
              <div class="summary-item">
                <span class="label">Cliente:</span>
                <span class="value">{{ creditForm.get('clientName')?.value }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Email:</span>
                <span class="value">{{ creditForm.get('clientEmail')?.value }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Monto:</span>
                <span class="value">{{ creditForm.get('requestedAmount')?.value | number }} {{ creditForm.get('currency')?.value }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Plazo:</span>
                <span class="value">{{ creditForm.get('loanTerm')?.value }} meses</span>
              </div>
              <div class="summary-item">
                <span class="label">Propósito:</span>
                <span class="value">{{ creditForm.get('loanPurpose')?.value }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Ingreso Mensual:</span>
                <span class="value">{{ creditForm.get('monthlyIncome')?.value | number }} USD</span>
              </div>
            </div>

            <div class="step-actions">
              <button mat-stroked-button matStepperPrevious [disabled]="isLoading()">
                <mat-icon>arrow_back</mat-icon>
                Atrás
              </button>
              <button 
                mat-flat-button 
                color="primary" 
                (click)="onSubmit()" 
                [disabled]="!canSubmit()">
                @if (isLoading()) {
                  <mat-spinner diameter="20"></mat-spinner>
                  Procesando...
                } @else {
                  <mat-icon>send</mat-icon>
                  Enviar Solicitud
                }
              </button>
            </div>
          </div>
        </mat-step>

        <mat-step label="Procesamiento">
          <div class="processing-section">
            @switch (state().step) {
              @case ('submitting') {
                <mat-spinner diameter="50"></mat-spinner>
                <p>Enviando solicitud al originador de créditos...</p>
              }
              @case ('fraud-check') {
                <mat-spinner diameter="50"></mat-spinner>
                <p>Ejecutando verificación antifraude...</p>
              }
              @case ('risk-assessment') {
                <mat-spinner diameter="50"></mat-spinner>
                <p>Evaluando riesgo crediticio...</p>
              }
              @default {
                <p>Estado del procesamiento: {{ state().step }}</p>
              }
            }
          </div>
        </mat-step>

        <mat-step label="Resultado">
          <div class="result-section">
            @if (state().step === 'completed') {
              <mat-icon class="result-icon success">check_circle</mat-icon>
              <h3>¡Solicitud Procesada Exitosamente!</h3>
              <p>Su solicitud ha sido aprobada y procesada.</p>
              <button mat-flat-button color="primary" (click)="resetForm()">
                Nueva Solicitud
              </button>
            }
          </div>
        </mat-step>
      </mat-stepper>
    </mat-card-content>
  </mat-card>
</div>

// === ARCHIVO: src/app/features/credit-processing/credit-processing.component.scss ===
.credit-processing {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #fafafa;
  min-height: calc(100vh - 64px);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e0e0e0;

    h1 {
      font-size: 1.75rem;
      font-weight: 600;
      color: #212121;
      margin: 0;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  &__card {
    background: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }

    &--highlight {
      border-left: 4px solid #3f51b5;
    }

    &--warning {
      border-left: 4px solid #ff9800;
    }

    &--danger {
      border-left: 4px solid #f44336;
    }

    &--success {
      border-left: 4px solid #4caf50;
    }
  }

  &__card-title {
    font-size: 1.125rem;
    font-weight: 500;
    color: #424242;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
  }

  &__card-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;

    &-label {
      font-size: 0.875rem;
      color: #757575;
      font-weight: 400;
    }

    &-value {
      font-size: 0.875rem;
      color: #212121;
      font-weight: 500;

      &--pending {
        color: #ff9800;
      }

      &--approved {
        color: #4caf50;
      }

      &--rejected {
        color: #f44336;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    mat-form-field {
      width: 100%;
    }
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  }

  &__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  &__error {
    background-color: #ffebee;
    color: #c62828;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
  }

  &__success {
    background-color: #e8f5e9;
    color: #2e7d32;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
  }

  &__table {
    width: 100%;
    overflow-x: auto;

    table {
      width: 100%;
      border-collapse: collapse;

      th {
        background-color: #f5f5f5;
        color: #424242;
        font-weight: 500;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
      }

      td {
        padding: 1rem;
        border-bottom: 1px solid #e0e0e0;
        color: #616161;
      }

      tr:hover {
        background-color: #fafafa;
      }
    }
  }

  &__status-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;

    &--pending {
      background-color: #fff3e0;
      color: #e65100;
    }

    &--approved {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    &--rejected {
      background-color: #ffebee;
      color: #c62828;
    }

    &--processing {
      background-color: #e3f2fd;
      color: #1565c0;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    &__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    &__content {
      grid-template-columns: 1fr;
    }

    &__actions {
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }
}

// === ARCHIVO: src/app/features/fraud-detection/fraud-detection.component.ts ===
import { Component, OnInit, OnDestroy, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil, catchError, of, finalize } from 'rxjs';
import { FraudEngineService } from '@app/core/services/fraud-engine.service';
import { FraudResponse } from '@app/core/models/fraud-response.model';
import { CreditRequest } from '@app/core/models/credit-request.model';

interface FraudAlert {
  id: string;
  clientId: string;
  transactionId: string;
  riskScore: number;
  flags: string[];
  timestamp: Date;
  status: 'pending' | 'investigating' | 'cleared' | 'confirmed';
}

interface FraudMetrics {
  totalAnalyzed: number;
  flaggedCount: number;
  clearedCount: number;
  confirmedFraudCount: number;
  averageRiskScore: number;
}

@Component({
  selector: 'app-fraud-detection',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  templateUrl: './fraud-detection.component.html',
  styleUrls: ['./fraud-detection.component.scss']
})
export class FraudDetectionComponent implements OnInit, OnDestroy {
  private readonly fraudEngineService = inject(FraudEngineService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  private readonly destroy$ = new Subject<void>();

  readonly alerts = signal<FraudAlert[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly selectedAlert = signal<FraudAlert | null>(null);
  readonly searchQuery = signal<string>('');
  readonly statusFilter = signal<string>('all');
  readonly currentPage = signal<number>(0);
  readonly pageSize = signal<number>(10);

  readonly metrics = computed<FraudMetrics>(() => {
    const alertList = this.alerts();
    const total = alertList.length;
    const flagged = alertList.filter(a => a.status === 'pending' || a.status === 'investigating').length;
    const cleared = alertList.filter(a => a.status === 'cleared').length;
    const confirmed = alertList.filter(a => a.status === 'confirmed').length;
    const avgScore = total > 0
      ? alertList.reduce((sum, a) => sum + a.riskScore, 0) / total
      : 0;

    return {
      totalAnalyzed: total,
      flaggedCount: flagged,
      clearedCount: cleared,
      confirmedFraudCount: confirmed,
      averageRiskScore: Math.round(avgScore * 100) / 100
    };
  });

  readonly filteredAlerts = computed(() => {
    let result = this.alerts();
    const query = this.searchQuery().toLowerCase();
    const status = this.statusFilter();

    if (query) {
      result = result.filter(alert =>
        alert.clientId.toLowerCase().includes(query) ||
        alert.transactionId.toLowerCase().includes(query) ||
        alert.flags.some(flag => flag.toLowerCase().includes(query))
      );
    }

    if (status !== 'all') {
      result = result.filter(alert => alert.status === status);
    }

    return result;
  });

  readonly displayedColumns: string[] = ['clientId', 'transactionId', 'riskScore', 'flags', 'timestamp', 'status', 'actions'];

  readonly analysisForm: FormGroup = this.fb.group({
    clientId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    amount: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
  });

  constructor() {
    effect(() => {
      const currentMetrics = this.metrics();
      if (currentMetrics.confirmedFraudCount > 0) {
        this.snackBar.open(
          `Alerta: ${currentMetrics.confirmedFraudCount} caso(s) de fraude confirmado(s)`,
          'Cerrar',
          { duration: 5000, panelClass: 'snackbar-danger' }
        );
      }
    });
  }

  ngOnInit(): void {
    this.loadAlerts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAlerts(): void {
    this.isLoading.set(true);
    this.fraudEngineService.getFraudHistory('default-client')
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error loading fraud alerts:', error);
          this.showError('Error al cargar las alertas de fraude');
          return of([]);
        }),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe(responses => {
        const alerts: FraudAlert[] = responses.map((response, index) => ({
          id: `alert-${index}`,
          clientId: response.clientId || 'unknown',
          transactionId: response.transactionId || `txn-${index}`,
          riskScore: response.riskScore || 0,
          flags: response.flags || [],
          timestamp: response.analyzedAt ? new Date(response.analyzedAt) : new Date(),
          status: this.mapRiskToStatus(response.riskScore || 0)
        }));
        this.alerts.set(alerts);
      });
  }

  analyzeTransaction(): void {
    if (this.analysisForm.invalid) {
      this.analysisForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    const formValue = this.analysisForm.value;

    const request: CreditRequest = {
      clientId: formValue.clientId,
      amount: formValue.amount,
      description: formValue.description,
      requestDate: new Date()
    };

    this.fraudEngineService.analyzeForFraud(request)
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error analyzing transaction:', error);
          this.showError('Error al analizar la transacción');
          return of(null);
        }),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe(response => {
        if (response) {
          this.handleAnalysisResult(response);
        }
      });
  }

  private handleAnalysisResult(response: FraudResponse): void {
    const alert: FraudAlert = {
      id: `alert-${Date.now()}`,
      clientId: response.clientId,
      transactionId: response.transactionId || `txn-${Date.now()}`,
      riskScore: response.riskScore,
      flags: response.flags,
      timestamp: new Date(),
      status: this.mapRiskToStatus(response.riskScore)
    };

    this.alerts.update(current => [alert, ...current]);

    if (response.riskScore >= 70) {
      this.showError(`Alto riesgo detectado: ${response.riskScore}%`);
    } else if (response.riskScore >= 40) {
      this.showWarning(`Riesgo medio detectado: ${response.riskScore}%`);
    } else {
      this.showSuccess(`Transacción analizada: riesgo bajo (${response.riskScore}%)`);
    }
  }

  private mapRiskToStatus(riskScore: number): 'pending' | 'investigating' | 'cleared' | 'confirmed' {
    if (riskScore >= 80) return 'confirmed';
    if (riskScore >= 50) return 'investigating';
    if (riskScore >= 30) return 'pending';
    return 'cleared';
  }

  selectAlert(alert: FraudAlert): void {
    this.selectedAlert.set(alert);
  }

  clearAlert(alert: FraudAlert): void {
    this.flagTransaction(alert.transactionId, 'Cleared by analyst')
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error clearing alert:', error);
          this.showError('Error al marcar alerta como aclarada');
          return of(null);
        })
      )
      .subscribe(() => {
        this.alerts.update(alerts =>
          alerts.map(a => a.id === alert.id ? { ...a, status: 'cleared' as const } : a)
        );
        this.showSuccess('Alerta marcada como aclarada');
      });
  }

  confirmFraud(alert: FraudAlert): void {
    this.flagTransaction(alert.transactionId, 'Confirmed fraud by analyst')
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Error confirming fraud:', error);
          this.showError('Error al confirmar fraude');
          return of(null);
        })
      )
      .subscribe(() => {
        this.alerts.update(alerts =>
          alerts.map(a => a.id === alert.id ? { ...a, status: 'confirmed' as const } : a)
        );
        this.showSuccess('Fraude confirmado correctamente');
      });
  }

  private flagTransaction(transactionId: string, reason: string) {
    return this.fraudEngineService.flagSuspiciousTransaction(transactionId, reason);
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  onStatusFilter(status: string): void {
    this.statusFilter.set(status);
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.statusFilter.set('all');
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      pending: '#ff9800',
      investigating: '#2196f3',
      cleared: '#4caf50',
      confirmed: '#f44336'
    };
    return colors[status] || '#757575';
  }

  getRiskLevel(score: number): string {
    if (score >= 70) return 'Alto';
    if (score >= 40) return 'Medio';
    return 'Bajo';
  }

  getRiskColor(score: number): string {
    if (score >= 70) return '#f44336';
    if (score >= 40) return '#ff9800';
    return '#4caf50';
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: ['snackbar-error']
    });
  }

  private showWarning(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 4000,
      panelClass: ['snackbar-warning']
    });
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }
}

// === ARCHIVO: src/app/features/fraud-detection/fraud-detection.component.html ===
<div class="fraud-detection">
  <div class="fraud-detection__header">
    <h1>Detección de Fraudes</h1>
    <div class="fraud-detection__header-actions">
      <button mat-raised-button color="primary" (click)="loadAlerts()">
        <mat-icon>refresh</mat-icon>
        Actualizar
      </button>
    </div>
  </div>

  <div class="fraud-detection__metrics">
    <mat-card class="fraud-detection__metric-card">
      <mat-card-content>
        <div class="metric-card__icon" style="background-color: #e3f2fd;">
          <mat-icon style="color: #1976d2;">analytics</mat-icon>
        </div>
        <div class="metric-card__content">
          <span class="metric-card__label">Total Analizados</span>
          <span class="metric-card__value">{{ metrics().totalAnalyzed }}</span>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="fraud-detection__metric-card fraud-detection__metric-card--warning">
      <mat-card-content>
        <div class="metric-card__icon" style="background-color: #fff3e0;">
          <mat-icon style="color: #f57c00;">warning</mat-icon>
        </div>
        <div class="metric-card__content">
          <span class="metric-card__label">Pendientes</span>
          <span class="metric-card__value">{{ metrics().flaggedCount }}</span>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="fraud-detection__metric-card fraud-detection__metric-card--success">
      <mat-card-content>
        <div class="metric-card__icon" style="background-color: #e8f5e9;">
          <mat-icon style="color: #388e3c;">check_circle</mat-icon>
        </div>
        <div class="metric-card__content">
          <span class="metric-card__label">Aclarados</span>
          <span class="metric-card__value">{{ metrics().clearedCount }}</span>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="fraud-detection__metric-card fraud-detection__metric-card--danger">
      <mat-card-content>
        <div class="metric-card__icon" style="background-color: #ffebee;">
          <mat-icon style="color: #d32f2f;">gavel</mat-icon>
        </div>
        <div class="metric-card__content">
          <span class="metric-card__label">Fraudes Confirmados</span>
          <span class="metric-card__value">{{ metrics().confirmedFraudCount }}</span>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card class="fraud-detection__metric-card fraud-detection__metric-card--info">
      <mat-card-content>
        <div class="metric-card__icon" style="background-color: #f3e5f5;">
          <mat-icon style="color: #7b1fa2;">speed</mat-icon>
        </div>
        <div class="metric-card__content">
          <span class="metric-card__label">Riesgo Promedio</span>
          <span class="metric-card__value">{{ metrics().averageRiskScore }}%</span>
        </div>
      </mat-card-content>
    </mat-card>
  </div>

  <div class="fraud-detection__content">
    <mat-card class="fraud-detection__analysis-card">
      <mat-card-header>
        <mat-card-title>
          <mat-icon>search</mat-icon>
          Análisis de Transacción
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="analysisForm" (ngSubmit)="analyzeTransaction()" class="fraud-detection__form">
          <mat-form-field appearance="outline">
            <mat-label>ID de Cliente</mat-label>
            <input matInput formControlName="clientId" placeholder="Ingrese el ID del cliente">
            <mat-error *ngIf="analysisForm.get('clientId')?.hasError('required')">
              El ID de cliente es requerido
            </mat-error>
            <mat-error *ngIf="analysisForm.get('clientId')?.hasError('minlength')">
              Mínimo 5 caracteres
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Monto</mat-label>
            <input matInput type="number" formControlName="amount" placeholder="Ingrese el monto">
            <span matTextPrefix>$&nbsp;</span>
            <mat-error *ngIf="analysisForm.get('amount')?.hasError('required')">
              El monto es requerido
            </mat-error>
            <mat-error *ngIf="analysisForm.get('amount')?.hasError('min')">
              El monto debe ser mayor a 0
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Descripción</mat-label>
            <textarea matInput formControlName="description" rows="3" 
                      placeholder="Describa la transacción"></textarea>
            <mat-error *ngIf="analysisForm.get('description')?.hasError('required')">
              La descripción es requerida
            </mat-error>
            <mat-error *ngIf="analysisForm.get('description')?.hasError('minlength')">
              Mínimo 10 caracteres
            </mat-error>
          </mat-form-field>

          <div class="fraud-detection__form-actions">
            <button mat-button type="button" (click)="analysisForm.reset()">
              Limpiar
            </button>
            <button mat-raised-button color="primary" type="submit" 
                    [disabled]="isLoading() || analysisForm.invalid">
              <mat-icon>security</mat-icon>
              Analizar
            </button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>

    <mat-card class="fraud-detection__alerts-card">
      <mat-card-header>
        <mat-card-title>
          <mat-icon>notification_important</mat-icon>
          Alertas de Fraude
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="fraud-detection__filters">
          <mat-form-field appearance="outline" class="fraud-detection__search">
            <mat-label>Buscar</mat-label>
            <input matInput [value]="searchQuery()" 
                   (input)="onSearch($any($event.target).value)" 
                   placeholder="Buscar por cliente, transacción o bandera">
            <mat-icon matSuffix>search</mat-icon>
          </mat-form-field>

          <mat-form-field appearance="outline" class="fraud-detection__status-filter">
            <mat-label>Estado</mat-label>
            <mat-select [value]="statusFilter()" 
                        (selectionChange)="onStatusFilter($event.value)">
              <mat-option value="all">Todos</mat-option>
              <mat-option value="pending">Pendiente</mat-option>
              <mat-option value="investigating">En Investigación</mat-option>
              <mat-option value="cleared">Aclarado</mat-option>
              <mat-option value="confirmed">Confirmado</mat-option>
            </mat-select>
          </mat-form-field>

          <button mat-stroked-button (click)="clearFilters()">
            <mat-icon>clear</mat-icon>
            Limpiar
          </button>
        </div>

        <div class="fraud-detection__table-container">
          <div *ngIf="isLoading()" class="fraud-detection__loading">
            <mat-spinner diameter="40"></mat-spinner>
            <span>Analizando transacciones...</span>
          </div>

          <table mat-table [dataSource]="filteredAlerts()" 
                 *ngIf="!isLoading() && filteredAlerts().length > 0"
                 class="fraud-detection__table">
            <ng-container matColumnDef="clientId">
              <th mat-header-cell *matHeaderCellDef>Cliente</th>
              <td mat-cell *matCellDef="let alert">{{ alert.clientId }}</td>
            </ng-container>

            <ng-container matColumnDef="transactionId">
              <th mat-header-cell *matHeaderCellDef>Transacción</th>
              <td mat-cell *matCellDef="let alert">{{ alert.transactionId }}</td>
            </ng-container>

            <ng-container matColumnDef="riskScore">
              <th mat-header-cell *matHeaderCellDef>Riesgo</th>
              <td mat-cell *matCellDef="let alert">
                <div class="risk-indicator">
                  <span class="risk-indicator__score" 
                        [style.color]="getRiskColor(alert.riskScore)">
                    {{ alert.riskScore }}%
                  </span>
                  <span class="risk-indicator__level"
                        [style.background-color]="getRiskColor(alert.riskScore)">
                    {{ getRiskLevel(alert.riskScore) }}
                  </span>
                </div>
              </td>
            </ng-container>

            <ng-container matColumnDef="flags">
              <th mat-header-cell *matHeaderCellDef>Banderas</th>
              <td mat-cell *matCellDef="let alert">
                <mat-chip-set>
                  <mat-chip *ngFor="let flag of alert.flags.slice(0, 2)" 
                            class="flag-chip">
                    {{ flag }}
                  </mat-chip>
                  <mat-chip *ngIf="alert.flags.length > 2" 
                            class="flag-chip flag-chip--more">
                    +{{ alert.flags.length - 2 }}
                  </mat-chip>
                </mat-chip-set>
              </td>
            </ng-container>

            <ng-container matColumnDef="timestamp">
              <th mat-header-cell *matHeaderCellDef>Fecha</th>
              <td mat-cell *matCellDef="let alert">
                {{ alert.timestamp | date:'dd/MM/yyyy HH:mm' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Estado</th>
              <td mat-cell *matCellDef="let alert">
                <span class="status-badge" 
                      [style.background-color]="getStatusColor(alert.status) + '20'"
                      [style.color]="getStatusColor(alert.status)">
                  {{ alert.status | titlecase }}
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let alert">
                <button mat-icon-button color="primary" 
                        (click)="selectAlert(alert)" 
                        matTooltip="Ver detalles">
                  <mat-icon>visibility</mat-icon>
                </button>
                <button mat-icon-button color="accent" 
                        *ngIf="alert.status !== 'cleared'"
                        (click)="clearAlert(alert)" 
                        matTooltip="Marcar como aclarado">
                  <mat-icon>check_circle_outline</mat-icon>
                </button>
                <button mat-icon-button color="warn" 
                        *ngIf="alert.status !== 'confirmed'"
                        (click)="confirmFraud(alert)" 
                        matTooltip="Confirmar fraude">
                  <mat-icon>gavel</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>

          <div *ngIf="!isLoading() && filteredAlerts().length === 0" 
               class="fraud-detection__empty">
            <mat-icon>inbox</mat-icon>
            <span>No se encontraron alertas</span>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  </div>

  <mat-card *ngIf="selectedAlert()" class="fraud-detection__detail-card">
    <mat-card-header>
      <mat-card-title>Detalles de Alerta</mat-card-title>
      <button mat-icon-button (click)="selectedAlert.set(null)" class="close-button">
        <mat-icon>close</mat-icon>
      </button>
    </mat-card-header>
    <mat-card-content>
      <div class="detail-card__content">
        <div class="detail-card__row">
          <span class="detail-card__label">ID de Alerta</span>
          <span class="detail-card__value">{{ selectedAlert()?.id }}</span>
        </div>
        <div class="detail-card__row">
          <span class="detail-card__label">Cliente</span>
          <span class="detail-card__value">{{ selectedAlert()?.clientId }}</span>
        </div>
        <div class="detail-card__row">
          <span class="detail-card__label">Transacción</span>
          <span class="detail-card__value">{{ selectedAlert()?.transactionId }}</span>
        </div>
        <div class="detail-card__row">
          <span class="detail-card__label">Puntuación de Riesgo</span>
          <span class="detail-card__value" 
                [style.color]="getRiskColor(selectedAlert()?.riskScore || 0)">
            {{ selectedAlert()?.riskScore }}%
          </span>
        </div>
        <div class="detail-card__row">
          <span class="detail-card__label">Fecha</span>
          <span class="detail-card__value">
            {{ selectedAlert()?.timestamp | date:'dd/MM/yyyy HH:mm:ss' }}
          </span>
        </div>
        <div class="detail-card__row">
          <span class="detail-card__label">Estado</span>
          <span class="detail-card__value">
            <span class="status-badge" 
                  [style.background-color]="getStatusColor(selectedAlert()?.status || '') + '20'"
                  [style.color]="getStatusColor(selectedAlert()?.status || '')">
              {{ selectedAlert()?.status | titlecase }}
            </span>
          </span>
        </div>
        <div class="detail-card__flags">
          <span class="detail-card__label">Banderas Detectadas</span>
          <mat-chip-set>
            <mat-chip *ngFor="let flag of selectedAlert()?.flags" 
                      class="flag-chip flag-chip--detail">
              <mat-icon>flag</mat-icon>
              {{ flag }}
            </mat-chip>
          </mat-chip-set>
        </div>
      </div>
    </mat-card-content>
  </mat-card>
</div>

// === ARCHIVO: src/app/features/fraud-detection/fraud-detection.component.scss ===
.fraud-detection {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--surface-color, #ffffff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color, #e0e0e0);
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary, #212121);
    margin: 0;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;

    &--pending {
      background-color: #fff3e0;
      color: #e65100;
    }

    &--analyzing {
      background-color: #e3f2fd;
      color: #1565c0;
    }

    &--approved {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    &--rejected {
      background-color: #ffebee;
      color: #c62828;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__section-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary, #757575);
    margin: 0;
  }

  &__metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  &__metric {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem;
    background-color: var(--background-subtle, #f5f5f5);
    border-radius: 6px;
    border-left: 3px solid var(--primary-color, #1976d2);

    &-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-secondary, #757575);
    }

    &-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary, #212121);
    }

    &--high-risk {
      border-left-color: #d32f2f;
      .fraud-detection__metric-value {
        color: #d32f2f;
      }
    }

    &--medium-risk {
      border-left-color: #f57c00;
      .fraud-detection__metric-value {
        color: #f57c00;
      }
    }

    &--low-risk {
      border-left-color: #388e3c;
      .fraud-detection__metric-value {
        color: #388e3c;
      }
    }
  }

  &__rules {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__rule {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: var(--background-subtle, #f5f5f5);
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--border-color, #e0e0e0);
    }

    &-name {
      font-size: 0.875rem;
      color: var(--text-primary, #212121);
    }

    &-status {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;

      &--passed {
        color: #388e3c;
      }

      &--failed {
        color: #d32f2f;
      }

      &--warning {
        color: #f57c00;
      }
    }
  }

  &__history {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-height: 250px;
    overflow-y: auto;
  }

  &__history-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background-color: var(--background-subtle, #f5f5f5);
    border-radius: 4px;
    border-left: 3px solid transparent;

    &--high {
      border-left-color: #d32f2f;
    }

    &--medium {
      border-left-color: #f57c00;
    }

    &--low {
      border-left-color: #388e3c;
    }

    &-date {
      font-size: 0.75rem;
      color: var(--text-secondary, #757575);
    }

    &-amount {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-primary, #212121);
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color, #e0e0e0);
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;

    &--primary {
      background-color: var(--primary-color, #1976d2);
      color: white;

      &:hover {
        background-color: #1565c0;
      }

      &:disabled {
        background-color: #bdbdbd;
        cursor: not-allowed;
      }
    }

    &--secondary {
      background-color: transparent;
      color: var(--primary-color, #1976d2);
      border: 1px solid var(--primary-color, #1976d2);

      &:hover {
        background-color: rgba(25, 118, 210, 0.08);
      }
    }
  }

  &__spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &__loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
  }

  &--loading {
    position: relative;
  }
}

// === ARCHIVO: src/app/features/risk-assessment/risk-assessment.component.ts ===
import { Component, OnInit, OnDestroy, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { Subject, takeUntil, catchError, of, finalize } from 'rxjs';
import { RiskBureauService } from '@app/core/services/risk-bureau.service';
import { CreditRequest } from '@app/core/models/credit-request.model';
import { RiskResponse } from '@app/core/models/risk-response.model';

interface RiskFactor {
  category: string;
  score: number;
  weight: number;
  contribution: number;
  description: string;
}

interface CreditHistorySummary {
  totalAccounts: number;
  activeAccounts: number;
  delinquentAccounts: number;
  averageUtilization: number;
  recentInquiries: number;
}

@Component({
  selector: 'app-risk-assessment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './risk-assessment.component.html',
  styleUrl: './risk-assessment.component.scss'
})
export class RiskAssessmentComponent implements OnInit, OnDestroy {
  private readonly riskBureauService = inject(RiskBureauService);
  private readonly fb = inject(FormBuilder);
  private readonly destroy$ = new Subject<void>();

  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly riskProfile = signal<RiskResponse | null>(null);
  readonly riskFactors = signal<RiskFactor[]>([]);
  readonly creditHistory = signal<CreditHistorySummary | null>(null);
  readonly clientId = signal<string>('');

  readonly overallRiskScore = computed(() => {
    const factors = this.riskFactors();
    if (factors.length === 0) return 0;
    const weightedSum = factors.reduce((acc, factor) => acc + factor.contribution, 0);
    return Math.min(100, Math.max(0, weightedSum));
  });

  readonly riskCategory = computed(() => {
    const score = this.overallRiskScore();
    if (score >= 70) return { label: 'Alto Riesgo', class: 'risk-high' };
    if (score >= 40) return { label: 'Riesgo Medio', class: 'risk-medium' };
    return { label: 'Bajo Riesgo', class: 'risk-low' };
  });

  readonly isHighRisk = computed(() => this.overallRiskScore() >= 70);
  readonly canApprove = computed(() => this.overallRiskScore() < 70);

  riskAssessmentForm: FormGroup = this.fb.group({
    clientId: ['', [Validators.required, Validators.minLength(8)]],
    requestedAmount: [0, [Validators.required, Validators.min(1000)]],
    loanTerm: [12, [Validators.required, Validators.min(1), Validators.max(360)]],
    collateralValue: [0, [Validators.min(0)]]
  });

  constructor() {
    effect(() => {
      const profile = this.riskProfile();
      if (profile) {
        this.analyzeRiskFactors(profile);
      }
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeForm(): void {
    const storedClientId = localStorage.getItem('currentClientId');
    if (storedClientId) {
      this.clientId.set(storedClientId);
      this.riskAssessmentForm.patchValue({ clientId: storedClientId });
      this.loadRiskProfile(storedClientId);
    }
  }

  loadRiskProfile(clientId: string): void {
    if (!clientId || clientId.length < 8) {
      this.errorMessage.set('ID de cliente inválido');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.clientId.set(clientId);

    this.riskBureauService.getRiskProfile(clientId).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage.set(this.extractErrorMessage(error));
        return of(null);
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      if (response) {
        this.riskProfile.set(response);
        this.creditHistory.set({
          totalAccounts: response.creditHistory?.totalAccounts || 0,
          activeAccounts: response.creditHistory?.activeAccounts || 0,
          delinquentAccounts: response.creditHistory?.delinquentAccounts || 0,
          averageUtilization: response.creditHistory?.averageUtilization || 0,
          recentInquiries: response.creditHistory?.recentInquiries || 0
        });
      }
    });
  }

  analyzeCreditRisk(): void {
    const formValue = this.riskAssessmentForm.value;
    const request: CreditRequest = {
      clientId: formValue.clientId,
      requestedAmount: formValue.requestedAmount,
      loanTerm: formValue.loanTerm,
      collateralValue: formValue.collateralValue,
      purpose: 'RISK_ANALYSIS',
      income: 0,
      existingDebt: 0
    };

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.riskBureauService.analyzeCreditRisk(request).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage.set(this.extractErrorMessage(error));
        return of(null);
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      if (response) {
        this.riskProfile.set(response);
        this.analyzeRiskFactors(response);
      }
    });
  }

  private analyzeRiskFactors(profile: RiskResponse): void {
    const factors: RiskFactor[] = [];
    const baseScore = profile.riskScore || 0;

    factors.push({
      category: 'Historial Crediticio',
      score: profile.creditScore || 0,
      weight: 0.35,
      contribution: (profile.creditScore || 0) * 0.35,
      description: 'Evaluación del historial de pagos y comportamiento crediticio'
    });

    factors.push({
      category: 'Capacidad de Pago',
      score: profile.debtToIncomeRatio ? Math.max(0, 100 - profile.debtToIncomeRatio * 100) : 50,
      weight: 0.25,
      contribution: profile.debtToIncomeRatio ? Math.max(0, (100 - profile.debtToIncomeRatio * 100) * 0.25) : 12.5,
      description: 'Relación entre ingresos y deudas existentes'
    });

    factors.push({
      category: 'Estabilidad Financiera',
      score: profile.employmentLength ? Math.min(100, profile.employmentLength * 10) : 30,
      weight: 0.20,
      contribution: profile.employmentLength ? Math.min(100, profile.employmentLength * 10) * 0.20 : 6,
      description: 'Antigüedad en el empleo actual'
    });

    factors.push({
      category: 'Utilización de Crédito',
      score: profile.creditUtilization ? Math.max(0, 100 - profile.creditUtilization) : 50,
      weight: 0.15,
      contribution: profile.creditUtilization ? Math.max(0, (100 - profile.creditUtilization) * 0.15) : 7.5,
      description: 'Porcentaje de crédito disponible utilizado'
    });

    factors.push({
      category: 'Recientes Consultas',
      score: profile.recentInquiries && profile.recentInquiries > 5 ? 20 : 80,
      weight: 0.05,
      contribution: profile.recentInquiries && profile.recentInquiries > 5 ? 1 : 4,
      description: 'Número de consultas recientes en el buró'
    });

    this.riskFactors.set(factors);
  }

  updateRiskProfile(): void {
    const clientId = this.clientId();
    if (!clientId) {
      this.errorMessage.set('No hay cliente seleccionado');
      return;
    }

    const profile = this.riskProfile();
    if (!profile) {
      this.errorMessage.set('No hay perfil de riesgo para actualizar');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const updateData = {
      lastUpdated: new Date().toISOString(),
      overallScore: this.overallRiskScore(),
      category: this.riskCategory().label
    };

    this.riskBureauService.updateRiskProfile(clientId, updateData).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage.set(this.extractErrorMessage(error));
        return of(null);
      }),
      finalize(() => this.isLoading.set(false))
    ).subscribe(response => {
      if (response) {
        this.riskProfile.set({ ...profile, ...response });
      }
    });
  }

  private extractErrorMessage(error: unknown): string {
    if (error && typeof error === 'object' && 'message' in error) {
      return String(error.message);
    }
    return 'Error desconocido al procesar la solicitud de riesgo';
  }

  onClientIdChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.riskAssessmentForm.patchValue({ clientId: value });
  }

  onSubmit(): void {
    if (this.riskAssessmentForm.valid) {
      const clientId = this.riskAssessmentForm.get('clientId')?.value;
      this.loadRiskProfile(clientId);
    } else {
      this.riskAssessmentForm.markAllAsTouched();
    }
  }

  clearResults(): void {
    this.riskProfile.set(null);
    this.riskFactors.set([]);
    this.creditHistory.set(null);
    this.errorMessage.set(null);
  }
}

// === ARCHIVO: src/app/features/risk-assessment/risk-assessment.component.html ===
<div class="risk-assessment">
  <div class="risk-assessment__header">
    <h2 class="risk-assessment__title">Evaluación de Riesgos</h2>
    <div class="risk-assessment__status" [ngClass]="riskCategory().class">
      {{ riskCategory().label }}
    </div>
  </div>

  <div class="risk-assessment__content">
    <form [formGroup]="riskAssessmentForm" (ngSubmit)="onSubmit()" class="risk-assessment__form">
      <div class="risk-assessment__form-row">
        <mat-form-field appearance="outline" class="risk-assessment__field">
          <mat-label>ID de Cliente</mat-label>
          <input matInput formControlName="clientId" placeholder="Ingrese el ID del cliente">
          <mat-error *ngIf="riskAssessmentForm.get('clientId')?.hasError('required')">
            El ID de cliente es obligatorio
          </mat-error>
          <mat-error *ngIf="riskAssessmentForm.get('clientId')?.hasError('minlength')">
            El ID debe tener al menos 8 caracteres
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="risk-assessment__field">
          <mat-label>Monto Solicitado</mat-label>
          <input matInput type="number" formControlName="requestedAmount" placeholder="0.00">
          <span matTextSuffix>$</span>
          <mat-error *ngIf="riskAssessmentForm.get('requestedAmount')?.hasError('required')">
            El monto es obligatorio
          </mat-error>
          <mat-error *ngIf="riskAssessmentForm.get('requestedAmount')?.hasError('min')">
            El monto mínimo es $1,000
          </mat-error>
        </mat-form-field>
      </div>

      <div class="risk-assessment__form-row">
        <mat-form-field appearance="outline" class="risk-assessment__field">
          <mat-label>Plazo (meses)</mat-label>
          <input matInput type="number" formControlName="loanTerm" placeholder="12">
          <mat-error *ngIf="riskAssessmentForm.get('loanTerm')?.hasError('required')">
            El plazo es obligatorio
          </mat-error>
          <mat-error *ngIf="riskAssessmentForm.get('loanTerm')?.hasError('min')">
            El plazo mínimo es 1 mes
          </mat-error>
          <mat-error *ngIf="riskAssessmentForm.get('loanTerm')?.hasError('max')">
            El plazo máximo es 360 meses
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="risk-assessment__field">
          <mat-label>Valor de Colateral</mat-label>
          <input matInput type="number" formControlName="collateralValue" placeholder="0.00">
          <span matTextSuffix>$</span>
        </mat-form-field>
      </div>

      <div class="risk-assessment__form-actions">
        <button mat-raised-button color="primary" type="submit" [disabled]="riskAssessmentForm.invalid || isLoading()">
          <mat-spinner *ngIf="isLoading()" diameter="20"></mat-spinner>
          <span *ngIf="!isLoading()">Analizar Riesgo</span>
        </button>
        <button mat-stroked-button type="button" (click)="clearResults()" [disabled]="isLoading()">
          Limpiar
        </button>
      </div>
    </form>

    <div *ngIf="errorMessage()" class="risk-assessment__error">
      <mat-icon>error</mat-icon>
      <span>{{ errorMessage() }}</span>
    </div>

    <div *ngIf="riskProfile()" class="risk-assessment__results">
      <div class="risk-assessment__score-card">
        <div class="risk-assessment__score-header">
          <h3>Puntuación de Riesgo General</h3>
          <mat-chip [ngClass]="riskCategory().class">{{ riskCategory().label }}</mat-chip>
        </div>
        <div class="risk-assessment__score-value" [ngClass]="riskCategory().class">
          {{ overallRiskScore() | number:'1.0-0' }}
        </div>
        <div class="risk-assessment__score-bar">
          <div class="risk-assessment__score-bar-fill" [ngStyle]="{'width.%': overallRiskScore()}" [ngClass]="riskCategory().class"></div>
        </div>
      </div>

      <div class="risk-assessment__factors">
        <h3 class="risk-assessment__section-title">Factores de Riesgo</h3>
        <div class="risk-assessment__factors-grid">
          <div *ngFor="let factor of riskFactors()" class="risk-assessment__factor">
            <div class="risk-assessment__factor-header">
              <span class="risk-assessment__factor-category">{{ factor.category }}</span>
              <span class="risk-assessment__factor-score">{{ factor.score | number:'1.0-0' }}</span>
            </div>
            <div class="risk-assessment__factor-bar">
              <div class="risk-assessment__factor-bar-fill" [ngStyle]="{'width.%': factor.score}"></div>
            </div>
            <div class="risk-assessment__factor-details">
              <span class="risk-assessment__factor-weight">Peso: {{ factor.weight * 100 }}%</span>
              <span class="risk-assessment__factor-contribution">Contribución: {{ factor.contribution | number:'1.1-1' }}</span>
            </div>
            <p class="risk-assessment__factor-description">{{ factor.description }}</p>
          </div>
        </div>
      </div>

      <div *ngIf="creditHistory()" class="risk-assessment__credit-history">
        <h3 class="risk-assessment__section-title">Resumen de Historial Crediticio</h3>
        <div class="risk-assessment__history-grid">
          <div class="risk-assessment__history-item">
            <span class="risk-assessment__history-label">Total de Cuentas</span>
            <span class="risk-assessment__history-value">{{ creditHistory()?.totalAccounts }}</span>
          </div>
          <div class="risk-assessment__history-item">
            <span class="risk-assessment__history-label">Cuentas Activas</span>
            <span class="risk-assessment__history-value">{{ creditHistory()?.activeAccounts }}</span>
          </div>
          <div class="risk-assessment__history-item risk-assessment__history-item--warning">
            <span class="risk-assessment__history-label">Cuentas Morosas</span>
            <span class="risk-assessment__history-value">{{ creditHistory()?.delinquentAccounts }}</span>
          </div>
          <div class="risk-assessment__history-item">
            <span class="risk-assessment__history-label">Utilización Promedio</span>
            <span class="risk-assessment__history-value">{{ creditHistory()?.averageUtilization | number:'1.0-0' }}%</span>
          </div>
          <div class="risk-assessment__history-item">
            <span class="risk-assessment__history-label">Consultas Recientes</span>
            <span class="risk-assessment__history-value">{{ creditHistory()?.recentInquiries }}</span>
          </div>
        </div>
      </div>

      <div class="risk-assessment__recommendations">
        <h3 class="risk-assessment__section-title">Recomendaciones</h3>
        <div class="risk-assessment__recommendations-list">
          <div *ngIf="isHighRisk()" class="risk-assessment__recommendation risk-assessment__recommendation--high">
            <mat-icon>warning</mat-icon>
            <div>
              <strong>Alto Riesgo Detectado</strong>
              <p>Se recomienda revisar manualmente la solicitud antes de aprobar. Considere solicitar colateral adicional o reducir el monto solicitado.</p>
            </div>
          </div>
          <div *ngIf="!isHighRisk() && canApprove()" class="risk-assessment__recommendation risk-assessment__recommendation--approved">
            <mat-icon>check_circle</mat-icon>
            <div>
              <strong>Aprobación Recomendada</strong>
              <p>El perfil de riesgo cumple con los criterios de aprobación. Continúe con el proceso deoriginación.</p>
            </div>
          </div>
          <div *ngIf="riskProfile()?.debtToIncomeRatio && riskProfile()!.debtToIncomeRatio > 0.4" class="risk-assessment__recommendation risk-assessment__recommendation--warning">
            <mat-icon>info</mat-icon>
            <div>
              <strong>Monitorear Relación Deuda-Ingreso</strong>
              <p>La relación deuda/ingreso supera el 40%. Se sugiere evaluar la capacidad de pago del solicitante.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="risk-assessment__actions">
        <button mat-raised-button color="accent" (click)="analyzeCreditRisk()" [disabled]="isLoading()">
          <mat-spinner *ngIf="isLoading()" diameter="20"></mat-spinner>
          <span *ngIf="!isLoading()">Análisis de Crédito</span>
        </button>
        <button mat-raised-button color="primary" (click)="updateRiskProfile()" [disabled]="isLoading() || !riskProfile()">
          Actualizar Perfil
        </button>
      </div>
    </div>

    <div *ngIf="!riskProfile() && !isLoading()" class="risk-assessment__empty">
      <mat-icon>assessment</mat-icon>
      <p>Ingrese el ID de cliente y seleccione "Analizar Riesgo" para ver la evaluación</p>
    </div>
  </div>
</div>

// === ARCHIVO: src/app/features/risk-assessment/risk-assessment.component.scss ===
.risk-assessment-container {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin: 16px 0;
}

.risk-assessment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
  }

  .risk-badge {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 24px;
    font-weight: 500;
    font-size: 14px;

    &.low-risk {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    &.medium-risk {
      background-color: #fff3e0;
      color: #ef6c00;
    }

    &.high-risk {
      background-color: #ffebee;
      color: #c62828;
    }
  }
}

.risk-metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.risk-metric-card {
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .metric-label {
    font-size: 13px;
    color: #616161;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .metric-value {
    font-size: 28px;
    font-weight: 700;
    color: #212121;
    margin-bottom: 4px;
  }

  .metric-description {
    font-size: 12px;
    color: #757575;
    line-height: 1.5;
  }
}

.risk-score-visualization {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
  border-radius: 12px;
  margin-bottom: 24px;

  .score-gauge {
    position: relative;
    width: 180px;
    height: 180px;
    margin-bottom: 16px;

    .gauge-background {
      fill: none;
      stroke: #e0e0e0;
      stroke-width: 12;
    }

    .gauge-progress {
      fill: none;
      stroke-width: 12;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: center;
      transition: stroke-dashoffset 1s ease-out, stroke 0.3s ease;

      &.score-low {
        stroke: #4caf50;
      }

      &.score-medium {
        stroke: #ff9800;
      }

      &.score-high {
        stroke: #f44336;
      }
    }

    .score-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      .score-number {
        font-size: 42px;
        font-weight: 800;
        color: #1a1a1a;
        line-height: 1;
      }

      .score-label {
        font-size: 12px;
        color: #757575;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }

  .score-interpretation {
    text-align: center;
    max-width: 400px;

    h3 {
      margin: 0 0 8px;
      font-size: 18px;
      color: #212121;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #616161;
      line-height: 1.6;
    }
  }
}

.risk-factors-section {
  margin-top: 24px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #212121;
    margin-bottom: 16px;
  }

  .factors-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start;
      padding: 12px 16px;
      background-color: #fafafa;
      border-left: 4px solid #e0e0e0;
      margin-bottom: 8px;
      border-radius: 0 4px 4px 0;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f0f0f0;
      }

      &.factor-positive {
        border-left-color: #4caf50;
      }

      &.factor-negative {
        border-left-color: #f44336;
      }

      &.factor-neutral {
        border-left-color: #9e9e9e;
      }

      .factor-icon {
        margin-right: 12px;
        font-size: 18px;
        line-height: 1;
      }

      .factor-content {
        flex: 1;

        .factor-name {
          font-weight: 500;
          color: #212121;
          margin-bottom: 4px;
        }

        .factor-impact {
          font-size: 13px;
          color: #757575;
        }
      }
    }
  }
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;

  button {
    flex: 1;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:active {
      transform: scale(0.98);
    }

    &.btn-primary {
      background-color: #1976d2;
      color: #ffffff;

      &:hover {
        background-color: #1565c0;
      }
    }

    &.btn-secondary {
      background-color: #f5f5f5;
      color: #424242;
      border: 1px solid #e0e0e0;

      &:hover {
        background-color: #eeeeee;
      }
    }
  }
}

@media (max-width: 768px) {
  .risk-assessment-container {
    padding: 16px;
    margin: 8px 0;
  }

  .risk-assessment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h2 {
      font-size: 20px;
    }
  }

  .risk-metrics-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .risk-score-visualization {
    padding: 20px;

    .score-gauge {
      width: 140px;
      height: 140px;

      .score-text .score-number {
        font-size: 32px;
      }
    }
  }

  .action-buttons {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .risk-metric-card,
  .risk-score-visualization .score-gauge .gauge-progress,
  .action-buttons button {
    transition: none;
  }
}

// === ARCHIVO: src/app/shared/components/notification/notification.component.ts ===
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationConfig {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  action?: {
    label: string;
    callback: () => void;
  };
}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() set notification(value: NotificationConfig | null) {
    this._notification.set(value);
    if (value) {
      this.initializeAutoDismiss();
    }
  }

  @Output() dismiss = new EventEmitter<string>();
  @Output() actionClick = new EventEmitter<string>();

  private readonly _notification = signal<NotificationConfig | null>(null);
  private autoDismissTimer: ReturnType<typeof setTimeout> | null = null;

  readonly notification: Signal<NotificationConfig | null> = this._notification;
  readonly isVisible = computed(() => this._notification() !== null);

  readonly iconClass = computed(() => {
    const type = this._notification()?.type;
    switch (type) {
      case 'success': return 'check-circle';
      case 'error': return 'error';
      case 'warning': return 'warning';
      case 'info':
      default: return 'info';
    }
  });

  readonly containerClass = computed(() => {
    const type = this._notification()?.type ?? 'info';
    return `notification-${type}`;
  });

  private initializeAutoDismiss(): void {
    if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
    }

    const notification = this._notification();
    if (notification?.duration && notification.duration > 0) {
      this.autoDismissTimer = setTimeout(() => {
        this.dismissNotification();
      }, notification.duration);
    }
  }

  dismissNotification(): void {
    const notification = this._notification();
    if (notification) {
      this.dismiss.emit(notification.id);
      this._notification.set(null);
    }
  }

  onActionClick(): void {
    const notification = this._notification();
    if (notification?.action) {
      this.actionClick.emit(notification.id);
      notification.action.callback();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.dismissNotification();
    }
  }
}

// === ARCHIVO: src/app/shared/components/notification/notification.component.html ===
<div
  *ngIf="isVisible()"
  class="notification-container"
  [class]="containerClass()"
  role="alert"
  aria-live="polite"
  (keydown)="onKeyDown($event)"
  [attr.aria-label]="notification()?.title"
>
  <div class="notification-icon" aria-hidden="true">
    <span class="material-icon">{{ iconClass() }}</span>
  </div>

  <div class="notification-content">
    <div class="notification-header">
      <h3 class="notification-title">{{ notification()?.title }}</h3>
      <button
        *ngIf="notification()?.dismissible"
        class="notification-close"
        (click)="dismissNotification()"
        aria-label="Cerrar notificación"
        type="button"
      >
        <span class="close-icon" aria-hidden="true">&times;</span>
      </button>
    </div>

    <p class="notification-message">{{ notification()?.message }}</p>

    <button
      *ngIf="notification()?.action"
      class="notification-action"
      (click)="onActionClick()"
      type="button"
    >
      {{ notification()?.action?.label }}
    </button>
  </div>

  <div class="notification-progress" *ngIf="notification()?.duration">
    <div
      class="progress-bar"
      [style.animation-duration.ms]="notification()?.duration"
    ></div>
  </div>
</div>

// === ARCHIVO: src/app/shared/components/notification/notification.component.scss ===
.notification-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  pointer-events: none;
}

.notification-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  background: var(--notification-bg, #ffffff);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-left: 4px solid transparent;
  pointer-events: auto;
  animation: slideIn 0.3s ease-out;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateX(-4px);
  }

  &--success {
    --notification-bg: #f0fdf4;
    border-left-color: #22c55e;

    .notification-icon {
      color: #22c55e;
    }
  }

  &--error {
    --notification-bg: #fef2f2;
    border-left-color: #ef4444;

    .notification-icon {
      color: #ef4444;
    }
  }

  &--warning {
    --notification-bg: #fffbeb;
    border-left-color: #f59e0b;

    .notification-icon {
      color: #f59e0b;
    }
  }

  &--info {
    --notification-bg: #eff6ff;
    border-left-color: #3b82f6;

    .notification-icon {
      color: #3b82f6;
    }
  }

  &--hidden {
    opacity: 0;
    transform: translateX(100%);
    pointer-events: none;
  }
}

.notification-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-title {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--notification-title-color, #1f2937);
  line-height: 1.4;
}

.notification-message {
  margin: 0;
  font-size: 13px;
  color: var(--notification-message-color, #6b7280);
  line-height: 1.5;
  word-wrap: break-word;
}

.notification-close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #4b5563;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
}

.notification-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: currentColor;
  opacity: 0.3;
  border-radius: 0 0 0 8px;
  animation: progress linear forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

@media (max-width: 480px) {
  .notification-container {
    top: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
  }

  .notification-card {
    padding: 12px 16px;
  }
}

// === ARCHIVO: src/app/infrastructure/security/auth.interceptor.ts ===
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  let authReq = req;
  if (token && !req.url.includes('/auth/')) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};

// === ARCHIVO: src/app/infrastructure/security/auth.service.ts ===
import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface JwtPayload {
  sub: string;
  email: string;
  roles: string[];
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = '/api/auth';
  private readonly tokenKey = 'access_token';
  private readonly refreshTokenKey = 'refresh_token';

  private readonly _isAuthenticated = signal<boolean>(this.hasValidToken());
  private readonly _currentUser = signal<JwtPayload | null>(this.decodeToken());

  readonly isAuthenticated = computed(() => this._isAuthenticated());
  readonly currentUser = computed(() => this._currentUser());

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        this.storeTokens(response);
        this._isAuthenticated.set(true);
        this._currentUser.set(this.decodeToken(response.accessToken));
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  refreshToken(): Observable<AuthResponse | null> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      this.logout();
      return of(null);
    }

    return this.http.post<AuthResponse>(`${this.apiUrl}/refresh`, { refreshToken }).pipe(
      tap(response => {
        this.storeTokens(response);
        this._currentUser.set(this.decodeToken(response.accessToken));
      }),
      catchError(() => {
        this.logout();
        return of(null);
      })
    );
  }

  hasRole(role: string): boolean {
    const user = this._currentUser();
    return user?.roles?.includes(role) ?? false;
  }

  hasAnyRole(roles: string[]): boolean {
    const user = this._currentUser();
    return user?.roles?.some(r => roles.includes(r)) ?? false;
  }

  private storeTokens(response: AuthResponse): void {
    localStorage.setItem(this.tokenKey, response.accessToken);
    localStorage.setItem(this.refreshTokenKey, response.refreshToken);
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decoded = this.decodeToken(token);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  private decodeToken(token?: string): JwtPayload | null {
    try {
      const tokenToDecode = token || this.getToken();
      if (!tokenToDecode) return null;
      return jwtDecode<JwtPayload>(tokenToDecode);
    } catch {
      return null;
    }
  }
}

// === ARCHIVO: src/app/infrastructure/security/security.config.ts ===
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

// === ARCHIVO: src/app/infrastructure/http/http-client.service.ts ===
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

// === ARCHIVO: src/environments/environment.ts ===
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

// === ARCHIVO: src/environments/environment.prod.ts ===
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

// === ARCHIVO: docs/analisis-restricciones.md ===
# Análisis de Restricciones y Ambigüedades del Sistema Cloud

## Contexto del Sistema

El sistema de procesamiento de créditos opera en un entorno cloud distribuido que integra tres servicios principales: el originador de créditos, el motor antifraude y el buró de riesgos. Cada componente presenta restricciones técnicas y operativas que deben documentarse para facilitar la toma de decisiones arquitectónicas.

## Restricciones Identificadas

### Restricciones de Disponibilidad

El sistema requiere alta disponibilidad durante el horario comercial, con un objetivo de uptime del 99.9%. Los servicios externos (originador, antifraude, buró) no ofrecen SLA garantizados, lo que genera incertidumbre en los tiempos de respuesta. La arquitectura actual no implementa patrones de resiliencia robustos como circuit breaker o retry con backoff exponencial.

La dependencias de servicios externos introduce puntos únicos de falla. Si el motor antifraude no responde, toda la cadena de procesamiento de solicitudes se detiene. No existe mecanismo de degración graceful que permita continuar el flujo con información parcial.

### Restricciones de Consistencia

Los tres servicios mantienen sus propios almacenes de datos con esquemas diferentes. La sincronización entre ellos ocurre de manera asíncrona, lo que genera ventanas de inconsistencia donde una solicitud puede aparecer como aprobada en un sistema pero pendiente en otro.

El modelo de consistencia eventual es aceptable para el flujo principal, pero genera problemas en escenarios de consulta de estado donde el usuario necesita información actualizada inmediatamente después de una operación.

### Restricciones de Latencia

Cada servicio externo agrega entre 200ms y 2s de latencia a la cadena de procesamiento. El flujo completo de una solicitud de crédito puede tomar hasta 5 segundos累積. No existe caché de resultados intermedios que permita evitar llamadas redundantes.

La latencia se ve agravada por la ausencia de paralelización en las llamadas a servicios independientes. El motor antifraude y el buró de riesgos podrían ejecutarse concurrentemente, pero el código actual los invoca de forma secuencial.

### Restricciones de Seguridad

La autenticación entre servicios utiliza tokens JWT que expiran cada 15 minutos. El manejo de renovación de tokens no está estandarizado: cada servicio implementa su propia lógica de refresh, generando inconsistencias y potenciales fallos de autenticación en producción.

Los datos sensibles de crédito (historial financiero, puntuación de riesgo) requieren cifrado en tránsito y en reposo. La configuración actual de cifrado varía entre servicios, y algunos endpoints aún utilizan TLS 1.2 en lugar de TLS 1.3.

### Restricciones de Escalabilidad

El sistema está diseñado para escalar horizontalmente, pero la configuración de auto-scaling se basa únicamente en uso de CPU. Esta métrica no refleja correctamente la carga en aplicaciones I/O-bound como este sistema de procesamiento de créditos.

Los servicios de backend no implementan limitación de tasa (rate limiting) a nivel de API gateway, lo que expone el sistema a ataques de denegación de servicio y a picos de carga no controlados.

### Restricciones de Monitoreo

Cada servicio utiliza su propio sistema de logs con formatos incompatibles. La correlación de transacciones a través de los tres servicios requiere análisis manual o desarrollo de herramientas personalizadas de agregación de logs.

Las métricas de rendimiento se收集an de forma inconsistente: algunos servicios exponen métricas en Prometheus, otros solo tienen logs estructurados. No existe un dashboard unificado que proporcione visibilidad completa del flujo de procesamiento.

## Ambigüedades Identificadas

### Ambigüedad en el Manejo de Errores

El sistema no define claramente qué constituye un error transitorio versus uno permanente. Cuando el servicio de buró de riesgos devuelve un error, el código actual reintenta hasta 3 veces sin distinguir entre timeout, error de autenticación o datos no encontrados. Esta ambigüedad genera reintentos innecesarios y confusión en el diagnóstico de problemas.

### Ambigüedad en la Definición de Éxito

No está claro si una solicitud se considera exitosa cuando el originador de créditos la recibe, cuando el motor antifraude la aprueba, o cuando el buró de riesgos devuelve una evaluación. Los diferentes equipos tienen interpretaciones distintas, lo que genera métricas contradictorias.

### Ambigüedad en la Priorización de Solicitudes

El sistema procesa las solicitudes en orden de llegada (FIFO), pero no existe documentación sobre cómo manejar solicitudes de alto valor que podrían requerir procesamiento prioritario. Esta ambigüedad crea tensión cuando clientes premium experimentan tiempos de espera similares a los clientes estándar.

### Ambigüedad en la Retención de Datos

Las políticas de retención de datos difieren entre servicios. El originador mantiene registros por 7 años, el motor antifraude por 5 años, y el buró de riesgos por 10 años. Esta asimetría genera incertidumbre sobre qué datos pueden eliminarse y cuándo, complicando el cumplimiento con regulaciones de privacidad.

## Impacto en la Arquitectura

Estas restricciones y ambigüedades deben informar cualquier decisión arquitectónica futura. La solución debe proporcionar mecanismos explícitos para manejar la indisponibilidad de servicios, establecer contratos claros de consistencia, definir políticas de retry basadas en el tipo de error, y unify el modelo de monitoreo y logging.

## Recomendaciones

Se recomienda crear un documento de arquitectura que formalice las decisiones de manejo de errores, establezca un modelo de consistencia explícito, y defina métricas de éxito compartidas entre todos los servicios. La implementación de patrones de resiliencia como circuit breaker, bulkhead, y retry con backoff exponencial reducirá la sensibilidad a las restricciones de disponibilidad identificadas.

// === ARCHIVO: docs/decision-registro.md ===
# Registro de Decisión Arquitectónica

## Identificador de Decisión

**ADR-001**: Adopción del Patrón de Mensajería Asíncrona para Integración de Servicios

## Fecha de Decisión

15 de enero de 2025

## Estado

Aceptado

## Contexto

El sistema actual de procesamiento de créditos utiliza integración síncrona REST entre el originador de créditos, el motor antifraude y el buró de riesgos. Cada solicitud de crédito requiere llamadas encadenadas a estos tres servicios, con los siguientes problemas observados:

- Tiempo promedio de procesamiento: 4.7 segundos
- Tasa de error por timeout: 12% durante horas pico
- Impacto en experiencia de usuario: abandonos del 23% en el flujo de solicitud
- Dependencia directa: si un servicio falla, todo el flujo se interrumpe

La arquitectura actual no escala adecuadamente bajo carga inesperada. Cuando el volumen de solicitudes aumenta, los servicios se saturan y los tiempos de respuesta degradan exponencialmente.

## Fuerzas

Varias fuerzas influyen en esta decisión y deben balancearse:

**Disponibilidad**: El sistema debe mantener alta disponibilidad incluso cuando servicios individuales experimentan problemas. La arquitectura actual crea puntos únicos de falla en cada integración.

**Consistencia**: Los datos de una solicitud de crédito deben permanecer consistentes entre los tres servicios. La consistencia eventual es aceptable, pero los estados contradictorios generan confusión.

**Rendimiento**: Los usuarios esperan tiempos de respuesta inferiores a 2 segundos. La cadena síncrona actual promedia 4.7 segundos.

**Mantenibilidad**: Los equipos de desarrollo necesitan poder modificar servicios de forma independiente sin afectar otros componentes del sistema.

**Costo**: La solución debe ser económicamente viable. La introducción de infraestructura de mensajería tiene costos operativos que deben justificarse.

## Opciones Evaluadas

### Opción 1: Mantener Integración Síncrona con Mejoras

Continuar con llamadas REST síncronas pero implementar circuit breaker, retry con backoff, y caché de resultados.

**Pros**:
- Simplicidad de implementación
- No requiere nueva infraestructura
- Depuración más directa
- Latencia baja cuando todos los servicios responden

**Contras**:
- No resuelve el problema fundamental de acoplamiento temporal
- Los circuit breakers añaden complejidad
- Los reintentos pueden amplificar carga en servicios ya saturados
- No mejora la experiencia de usuario bajo carga

### Opción 2: Arquitectura de Mensajería Asíncrona

Introducir un message broker (RabbitMQ o Apache Kafka) para desacoplar los servicios. Cada servicio publica y consume mensajes de forma asíncrona.

**Pros**:
- Desacoplamiento completo entre servicios
- Resiliencia natural: mensajes se reintentan automáticamente
- Capacidad de absorber picos de carga
- Posibilidad de procesamiento paralelo de verificaciones
- Facilidad para añadir nuevos consumidores sin modificar productores

**Contras**:
- Mayor complejidad operativa
- Consistencia eventual en lugar de fuerte
- Dificultad en depuración de flujos distribuidos
- Requiere infraestructura adicional y monitoreo
- Curva de aprendizaje para equipos

### Opción 3: API Gateway con Patrón Backend-for-Frontend

Implementar un API Gateway que oculte la complejidad de las integraciones y proporcione respuestas agregadas a los clientes.

**Pros**:
- Centralización de lógica de autenticación y logging
- Optimización de respuestas para diferentes clientes
- Caché a nivel de gateway
- Menor cambio en servicios existentes

**Contras**:
- El gateway se convierte en punto único de falla
- No resuelve el problema de latencia de servicios downstream
- Añade un salto adicional en la cadena de llamadas
- Requiere mantener el gateway actualizado con cambios de servicios

## Decisión

Se selecciona la **Opción 2: Arquitectura de Mensajería Asíncrona**.

La decisión se fundamenta en los siguientes criterios de evaluación:

**Puntuación de alineación con objetivos**:
- Disponibilidad: La mensajería proporciona buffering natural contra fallos temporales (9/10)
- Consistencia: La consistencia eventual es aceptable para el dominio (7/10)
- Rendimiento: Procesamiento paralelo reduce latencia total (8/10)
- Mantenibilidad: Servicios completamente desacoplados (9/10)
- Costo: Justificado por la criticidad del sistema (6/10)

**Puntuación total: 39/50**

Comparada con la opción 1 (28/50) y opción 3 (31/50), la mensajería asíncrona proporciona el mejor balance entre los objetivos del sistema.

## Consecuencias

### Consecuencias Positivas

Los servicios podrán evolucionar de forma independiente. El equipo del motor antifraude puede desplegar nuevas versiones sin coordinar con otros equipos. La capacidad de absorber picos de carga mejorará la experiencia de usuario durante eventos de alto tráfico.

El sistema ganará resiliencia: si el buró de riesgos tiene problemas temporales, los mensajes se cola-n until que el servicio se recupere, en lugar de fallar inmediatamente.

La observabilidad mejorará con tracing de mensajes a través de la cadena completa, facilitando el diagnóstico de problemas.

### Consecuencias Negativas

La consistencia eventual significa que los usuarios podrían ver estados暂时的mente inconsistentes. Por ejemplo, una solicitud podría aparecer como "aprobada por antifraude" mientras la evaluación de riesgo aún está pendiente.

La complejidad operativa aumenta significativamente. Se requiere expertise en administración de brokers de mensajes, monitoreo de colas, y manejo de mensajes muertos (dead letter queues).

La depuración de problemas se vuelve más difícil. Un flujo que antes se seguía con un traceo HTTP ahora requiere correlacionar mensajes a través de múltiples sistemas.

### Costos Estimados

- Infraestructura de mensajería: $2,000-4,000/mes dependiendo del volumen
- Desarrollo: 3-4 sprints para implementación inicial
- Capacitación: 2 semanas para equipos
- Mantenimiento continuo: 0.5 FTE para operaciones

## Plan de Implementación

1. **Fase 1 (Sprint 1-2)**: Configurar infraestructura de RabbitMQ, definir esquemas de mensajes, implementar productores en servicios existentes.
2. **Fase 2 (Sprint 3-4)**: Implementar consumidores, configurar dead letter queues, establecer políticas de retry.
3. **Fase 3 (Sprint 5)**: Migrar tráfico gradualmente (canary deployment), validar comportamiento en producción.
4. **Fase 4 (Sprint 6)**: Completar migración, monitorear métricas, ajustar según resultados.

## Revisiones

Esta decisión debe revisarse en 6 meses para evaluar:
- Latencia real del nuevo sistema versus el anterior
- Tasa de errores y tiempo de recuperación
- Satisfacción de equipos de desarrollo
- Costos operativos versus estimaciones

// === ARCHIVO: docs/presentacion-tecnica.md ===
# Presentación Técnica: Arquitectura de Mensajería Asíncrona

## Introducción

Esta presentación detalla la decisión arquitectónica de migrar el sistema de procesamiento de créditos desde una arquitectura de integración síncrona REST hacia un patrón de mensajería asíncrona. El objetivo es abordar las limitaciones de disponibilidad, escalabilidad y rendimiento identificadas en el sistema actual.

## Estado Actual del Sistema

### Arquitectura Síncrona Actual

El flujo de procesamiento de una solicitud de crédito sigue esta secuencia:

1. Cliente envía solicitud al API Gateway
2. Gateway invoca al Originador de Créditos (300-500ms)
3. Originador invoca al Motor Antifraude (400-800ms)
4. Motor Antifraude invoca al Buró de Riesgos (500-1200ms)
5. Respuesta fluye en reversa hasta el cliente

**Tiempo total observado**: 1.2s a 5.0s dependiendo de carga

### Problemas Identificados

La arquitectura síncrona presenta las siguientes limitaciones críticas:

**Acoplamiento temporal**: Cada servicio debe estar disponible y responder para que el flujo complete. Un servicio lento o indisponible bloquea toda la cadena.

**Cascada de fallos**: Cuando un servicio experimenta latencia elevada, los recursos se agotan rápidamente, causando fallos en cascada que afectan a todos los usuarios.

**Imposibilidad de procesamiento paralelo**: Las verificaciones de antifraude y riesgo se ejecutan secuencialmente, aunque son independientes y podrían correr en paralelo.

**Dificultad de escalado**: Es difícil escalar servicios de forma independiente porque cada uno depende directamente de los otros.

## Solución Propuesta

### Patrón de Mensajería Asíncrona

La solución introduce un message broker como intermediario entre servicios. En lugar de invocar directamente, cada servicio publica mensajes a colas especializadas y consume mensajes de cola de otros servicios.

### Componentes de la Arquitectura

**Message Broker (RabbitMQ)**:
- Colas dedicadas por tipo de mensaje
- Exchanges para enrutamiento flexible
- Dead letter queues para mensajes fallidos
- Confirmaciones de entrega garantizadas

**Productores**:
- Originador de Créditos publica evento de solicitud recibida
- Motor Antifraude publica resultado de verificación
- Buró de Riesgos publica evaluación de riesgo

**Consumidores**:
- Cada servicio consume mensajes relevantes de su cola
- Procesamiento con acknowledgment explícito
- Reintentos automáticos con backoff exponencial

### Flujo de Mensajes

```
SolicitudRecibida → [Cola: creditos] → MotorAntifraude
                                           ↓
                                    VerificacionCompleta → [Cola: fraude]
                                                                      ↓
                                                           BuróRiesgos
                                                                      ↓
                                                           EvaluacionRiesgo → [Cola: riesgo]
                                                                                      ↓
                                                                          Originador (agrega resultado)
```

## Beneficios Técnicos

### Resiliencia

La mensajería proporciona buffering natural contra fallos temporales. Si el Buró de Riesgos tiene problemas, los mensajes se mantienen en cola hasta que el servicio se recupere. No hay pérdida de solicitudes y los usuarios no experimentan errores.

### Procesamiento Paralelo

Las verificaciones de antifraude y riesgo pueden ejecutarse concurrentemente después de la validación inicial, reduciendo el tiempo total de procesamiento.

### Desacoplamiento

Los servicios no conocen la implementación de otros. Un servicio puede actualizarse, reemplazarse o escalarse sin afectar a los demás. Esta independencia facilita el mantenimiento y la evolución del sistema.

### Capacidad de Absorción de Carga

Las colas actúan como amortiguadores contra picos de tráfico. Cuando el volumen aumenta, los mensajes se acumulan y se procesan gradualmente sin rechazar solicitudes.

## Consideraciones de Implementación

### Consistencia de Datos

La arquitectura introduce consistencia eventual. Los servicios deben estar preparados para:

- Procesar mensajes fuera de orden
- Manejar mensajes duplicados (idempotencia)
- Reconstruir estado a partir de eventos

### Manejo de Fallos

El sistema implementa múltiples niveles de recuperación:

- **Reintento inmediato**: Fallos transitorios se reintentan inmediatamente
- **Reintento con backoff**: Fallos persistentes usan backoff exponencial
- **Dead letter queue**: Mensajes que fallan repetidamente se aíslan para análisis manual
- **Alertas**: Notificaciones cuando mensajes permanecen en cola más de lo esperado

### Observabilidad

La arquitectura distribuida requiere tracing avanzado:

- Correlation IDs propagados a través de todos los mensajes
- Metadatos de procesamiento en cada mensaje
- Dashboard unificado de colas y flujo de mensajes
- Alertas proactivas basadas en longitud de cola y tiempo de procesamiento

## Métricas de Éxito

| Métrica | Actual | Objetivo |
|---------|--------|----------|
| Latencia promedio | 3.2s | < 2s |
| Latencia P99 | 5.0s | < 3s |
| Disponibilidad | 99.5% | 99.9% |
| Tasa de error | 8% | < 2% |
| Tiempo de recuperación | 30 min | < 5 min |

## Roadmap de Implementación

**Sprint 1-2**: Infraestructura y esquemas
- Desplegar cluster de RabbitMQ
- Definir esquemas de mensajes (JSON Schema)
- Implementar productores en servicios existentes

**Sprint 3-4**: Consumidores y lógica de negocio
- Implementar consumidores con manejo de errores
- Configurar políticas de retry y dead letter
- Agregar logging y métricas

**Sprint 5**: Migración gradual
- Canary deployment: 10% del tráfico
- Validar comportamiento y métricas
- Ajustar según observaciones

**Sprint 6**: Completar migración
- Migrar 100% del tráfico
- Descomponer integración REST antigua
- Documentar operaciones

## Riesgos y Mitigaciones

### Riesgo: Complejidad Operativa

La operación de un sistema de mensajería requiere expertise específico. **Mitigación**: Capacitación formal del equipo, documentación de procedimientos, y herramientas de monitoreo avanzadas.

### Riesgo: Consistencia Eventual

Los usuarios podrían ver estados temporalmente inconsistentes. **Mitigación**: Diseñar interfaces que toleren inconsistencia, implementar polling para actualizaciones, y comunicar claramente el estado de procesamiento.

### Riesgo: Latencia de Mensajería

En algunos escenarios, la mensajería puede añadir latencia. **Mitigación**: Optimizar tamaño de mensajes, usar confirmación asíncrona, y procesar en batches cuando sea apropiado.

## Conclusiones

La migración a arquitectura de mensajería asíncrona proporciona los beneficios de desacoplamiento, resiliencia y escalabilidad que el sistema actual no puede ofrecer. Aunque introduce complejidad operativa, los beneficios superan los costos para un sistema de criticidad alta como el procesamiento de créditos.

La implementación gradual con canary deployment permite validar la solución con riesgo controlado y ajustar según métricas reales en producción.

## Preguntas y Discusión

- ¿Cómo afecta esta arquitectura a los tiempos de desarrollo de nuevos features?
- ¿Qué estrategia de rollback se implementará si hay problemas en producción?
- ¿Cómo se manejará la migración de datos históricos?
- ¿Cuál es el plan de capacitación del equipo operativo?

// === ARCHIVO: docs/presentacion-negocio.md ===
# Presentación de Negocio: Arquitectura Cloud para Procesamiento de Créditos

## Resumen Ejecutivo

Esta presentación describe la estrategia arquitectónica adoptada para la nueva plataforma de procesamiento de créditos. El objetivo principal es garantizar que el sistema pueda escalar según la demanda del mercado, mantener los más altos estándares de seguridad para datos financieros sensibles y asegurar que el equipo de desarrollo pueda evolucionar la plataforma sin acumulaciones técnicas que frenen la innovación.

---

## Contexto del Negocio

La organización ha experimentado un crecimiento sostenido en la demanda de productos de crédito durante los últimos tres años. Este crecimiento ha expuesto limitaciones en los sistemas actuales que fueron diseñados para volúmenes de transacción mucho menores. El proyecto de nueva arquitectura responde a la necesidad de:

- **Incrementar la capacidad de procesamiento** para manejar picos de hasta 10 veces el volumen promedio sin degradación en los tiempos de respuesta.
- **Reducir el riesgo operacional** mediante la implementación de controles automatizados que minimicen la intervención manual en decisiones de aprobación.
- **Acelerar el tiempo de mercado** para nuevas funcionalidades y productos de crédito, reduciendo el tiempo de desarrollo de semanas a días.

---

## Desafíos Identificados

### Volumen y Velocidad

El sistema actual presenta tiempos de espera superiores a 30 segundos durante horarios pico, lo que genera abandono de usuarios y pérdida de oportunidades de negocio. La arquitectura propuesta permite procesar solicitudes de forma paralela, reduciendo el tiempo promedio a menos de 5 segundos.

### Integridad de Datos

Las solicitudes de crédito involucran múltiples sistemas externos: el originador de créditos que recibe la solicitud inicial, el motor antifraude que evalúa patrones de comportamiento sospechoso, y el buró de riesgos que proporciona el historial crediticio del cliente. La coordinación entre estos sistemas debe garantiza que ninguna solicitud se pierda y que todas las decisiones sean trazables.

### Seguridad y Cumplimiento

Los datos financieros están sujetos a regulaciones estrictas. La arquitectura implementa controles de seguridad en cada capa del sistema, asegurando que la información sensible nunca quede expuesta y que todas las operaciones sean auditables.

---

## Beneficios Esperados

### Escalabilidad Automática

La infraestructura cloud permitirá que el sistema ajuste sus recursos computacionales de forma automática según la demanda. Durante períodos de baja actividad, los costos se reducen; durante picos de demanda, el sistema mantiene su rendimiento sin intervención manual.

| Métrica | Situación Actual | Meta | Mejora |
|---------|------------------|------|--------|
| Tiempo de procesamiento | 30+ segundos | < 5 segundos | 83% reducción |
| Capacidad máxima diaria | 5,000 solicitudes | 50,000 solicitudes | 10x capacidad |
| Disponibilidad | 99.0% | 99.9% | 10x reducción tiempo caído |
| Tiempo de despliegue | 2 semanas | 1 día | 90% más rápido |

### Reducción de Costos Operacionales

La automatización de procesos manuales y la optimización del uso de recursos cloud generan ahorros estimados del 40% en costos operacionales durante los primeros dos años de operación.

### Flexibilidad para Nuevos Productos

La separación clara entre las reglas de negocio y los detalles técnicos permite que el equipo de producto introduzca nuevas ofertas de crédito sin depender del equipo de tecnología para cada cambio. Esto reduce significativamente el tiempo necesario para lanzar nuevos productos al mercado.

---

## Impacto en la Organización

### Para el Equipo de Tecnología

Los desarrolladores trabajarán con una arquitectura modular que facilita la colaboración y reduce el riesgo al realizar cambios. Cada componente tiene responsabilidades bien definidas, lo que permite que diferentes miembros del equipo trabajen simultáneamente sin interferir entre sí.

### Para el Equipo de Operaciones

La monitorización automatizada y los mecanismos de recuperación automática reducirán la necesidad de intervenciones manuales durante incidentes. El equipo podrá enfocarse en mejoras preventivas en lugar de reacción a problemas.

### Para el Negocio

La capacidad de responder rápidamente a cambios del mercado y las regulaciones proporciona una ventaja competitiva significativa. Los tiempos de respuesta más rápidos y la mayor disponibilidad mejoran directamente la experiencia del cliente y la conversión de solicitudes.

---

## Cronograma de Implementación

La implementación se realizará en fases para minimizar el riesgo y permitir validaciones iterativas:

1. **Fase 1 (Meses 1-3)**: Infraestructura base y servicios core de procesamiento
2. **Fase 2 (Meses 4-5)**: Integración con sistemas externos y motor antifraude
3. **Fase 3 (Meses 6-7)**: Implementación completa y pruebas de carga
4. **Fase 4 (Mes 8)**: Migración gradual y estabilización

---

## Inversión y Retorno

La inversión total estimada incluye costos de infraestructura cloud, servicios de integración y el esfuerzo del equipo de desarrollo. El retorno de la inversión se espera dentro de los primeros 18 meses, impulsado por:

- Reducción de costos operativos por automatización
- Aumento en la conversión de solicitudes por mejores tiempos de respuesta
- Capacidad de lanzar nuevos productos de crédito más rápidamente
- Reducción de costos por fraude mediante detección automatizada

---

## Próximos Pasos

1. Aprobación del presupuesto para la fase inicial
2. Constitución del equipo de proyecto con representantes de tecnología, operaciones y negocio
3. Definición de métricas de éxito y proceso de seguimiento
4. Inicio de la implementación de infraestructura base

---

## Preguntas Frecuentes de Stakeholders

**¿Qué riesgo tiene este cambio?**

El enfoque por fases permite validar cada componente antes de proceder, minimizando el riesgo de disrupción. Además, el sistema actual permanecerá operativo durante la transición.

**¿Cuánto tiempo hasta ver resultados?**

Las primeras mejoras en rendimiento serán visibles al finalizar la Fase 2, aproximadamente a los 5 meses del inicio del proyecto.

**¿Qué pasa si el volumen de solicitudes sigue creciendo?**

La arquitectura está diseñada para escalar horizontalmente sin límites teóricos, adaptándose automáticamente al crecimiento de la demanda.

**¿Cómo se protege la información de nuestros clientes?**

La arquitectura implementa múltiples capas de seguridad: cifrado en tránsito y en reposo, controles de acceso basados en roles, y auditoría completa de todas las operaciones con datos sensibles.

---

*Presentado por: Equipo de Arquitectura Enterprise*
*Fecha: 2024*
*Versión: 1.0*
```
