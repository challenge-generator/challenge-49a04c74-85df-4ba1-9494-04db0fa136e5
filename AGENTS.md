# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Aplicación de patrones arquitectónicos en entornos cloud**.

| | |
|---|---|
| Tema | Framework de buenas prácticas de arquitectura |
| Nivel | master-l1 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | microservicio reactivo con patrón hexagonal/clean |
| Tiempo estimado | 2 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.0.0
- @angular/common 20.0.0
- @angular/compiler 20.0.0
- @angular/platform-browser 20.0.0
- @angular/platform-browser-dynamic 20.0.0
- @angular/router 20.0.0
- @angular/forms 20.0.0
- @angular/material 17.0.0
- rxjs 7.8.0
- typescript 5.4.2
- zone.js 0.14.0
- jwt-decode 4.0.0
- @angular-devkit/build-angular n/a
- @angular/cli n/a
- @angular/compiler-cli 20.0.0
- jasmine-core n/a
- karma n/a
- karma-jasmine n/a
- karma-chrome-launcher n/a
- eslint n/a

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Exploración del sistema y sus restricciones**: Lista de restricciones y ambigüedades identificadas en el sistema.
- **Fase 2 — Evaluación de una decisión controversial**: Registro de la decisión que incluye contexto, fuerzas, opciones con pros/contras, decisión y consecuencias.
- **Fase 3 — Comunicación a audiencias distintas**: Dos presentaciones (una técnica y una de negocio) que comunican la decisión tomada.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/app/infrastructure/security/auth.interceptor.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- [ ] `src/app/infrastructure/security/auth.service.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- [ ] `src/app/infrastructure/security/security.config.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.

## Lo que falta y tenes que completar

### 1. Referencias colgando (12)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/app/core/models/credit-request.model.ts` — `CreditRequestValidationError.push`
      Se invoca `push` sobre `CreditRequestValidationError`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/core/models/fraud-response.model.ts` — `FraudFlag.filter`
      Se invoca `filter` sobre `FraudFlag`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/core/models/fraud-response.model.ts` — `FraudHistoryEntry.filter`
      Se invoca `filter` sobre `FraudHistoryEntry`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/core/models/fraud-response.model.ts` — `FraudHistoryEntry.reduce`
      Se invoca `reduce` sobre `FraudHistoryEntry`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/core/models/risk-response.model.ts` — `RiskFactor.reduce`
      Se invoca `reduce` sobre `RiskFactor`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/fraud-detection/fraud-detection.component.ts` — `FraudAlert.set`
      Se invoca `set` sobre `FraudAlert`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/fraud-detection/fraud-detection.component.ts` — `FraudAlert.update`
      Se invoca `update` sobre `FraudAlert`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/fraud-detection/fraud-detection.component.ts` — `FraudAlert.map`
      Se invoca `map` sobre `FraudAlert`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/risk-assessment/risk-assessment.component.ts` — `RiskFactor.reduce`
      Se invoca `reduce` sobre `RiskFactor`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/risk-assessment/risk-assessment.component.ts` — `RiskFactor.push`
      Se invoca `push` sobre `RiskFactor`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/infrastructure/http/http-client.service.ts` — `RequestMetrics.filter`
      Se invoca `filter` sobre `RequestMetrics`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/infrastructure/http/http-client.service.ts` — `RequestMetrics.reduce`
      Se invoca `reduce` sobre `RequestMetrics`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

### Presentes (34)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/services/credit-originator.service.ts`
- `src/app/core/services/fraud-engine.service.ts`
- `src/app/core/services/risk-bureau.service.ts`
- `src/main.ts`
- `src/index.html`
- `src/app/core/models/credit-request.model.ts`
- `src/app/core/models/fraud-response.model.ts`
- `src/app/core/models/risk-response.model.ts`
- `src/app/app.config.ts`
- `src/app/features/credit-processing/credit-processing.component.ts`
- `src/app/features/credit-processing/credit-processing.component.html`
- `src/app/features/credit-processing/credit-processing.component.scss`
- `src/app/features/fraud-detection/fraud-detection.component.ts`
- `src/app/features/fraud-detection/fraud-detection.component.html`
- `src/app/features/fraud-detection/fraud-detection.component.scss`
- `src/app/features/risk-assessment/risk-assessment.component.ts`
- `src/app/features/risk-assessment/risk-assessment.component.html`
- `src/app/features/risk-assessment/risk-assessment.component.scss`
- `src/app/shared/components/notification/notification.component.ts`
- `src/app/shared/components/notification/notification.component.html`
- `src/app/shared/components/notification/notification.component.scss`
- `src/app/infrastructure/security/auth.interceptor.ts`
- `src/app/infrastructure/security/auth.service.ts`
- `src/app/infrastructure/security/security.config.ts`
- `src/app/infrastructure/http/http-client.service.ts`
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`
- `docs/analisis-restricciones.md`
- `docs/decision-registro.md`
- `docs/presentacion-tecnica.md`
- `docs/presentacion-negocio.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core`
- `src/app/features/credit-processing`
- `src/app/features/fraud-detection`
- `src/app/features/risk-assessment`
- `src/app/shared`
- `src/app/infrastructure`
- `src/environments`
- `src/assets`

## Verificacion

```bash
npm install && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **microservicio reactivo con patrón hexagonal/clean**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Master
- Brecha que el reto ataca: Aplica el framework de buenas prácticas de arquitectura en Cloud Computing. Cierre de brecha: mejorar la aplicación de patrones arquitectónicos en entornos cloud, garantizando escalabilidad, seguridad y mantenibilidad
- Mision: Candidato con experiencia senior en equipos de producto.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
