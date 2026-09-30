# Aplicación de patrones arquitectónicos en entornos cloud

El objetivo es mejorar la aplicación de patrones arquitectónicos en entornos cloud, garantizando escalabilidad, seguridad y mantenibilidad. El sistema debe manejar flujos de datos desde el origenador de créditos, el motor antifraude y el buró de riesgos, asegurando consistencia y disponibilidad en el procesamiento de solicitudes de crédito.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Framework de buenas prácticas de arquitectura |
| **Nivel** | master-l1 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 2 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración del sistema y sus restricciones

**Objetivo:** Identificar las restricciones y ambigüedades del sistema en el contexto de cloud computing.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Analiza el sistema existente y enumera las restricciones y ambigüedades que se deben considerar al aplicar patrones arquitectónicos en la nube.
- Identifica al menos dos restricciones relevantes y explica por qué son críticas para el sistema.

**Entregable:** Lista de restricciones y ambigüedades identificadas en el sistema.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia aceptable para las respuestas del buró de riesgos.
- Evalúa la necesidad de mantener la consistencia entre el origenador de créditos y el motor antifraude.

</details>

### Fase 2: Evaluación de una decisión controversial

**Objetivo:** Evaluar una decisión controversial en la aplicación de patrones arquitectónicos y justificar la elección.

**Tiempo estimado:** 45 minutos

**Instrucciones:**

- Evalúa la decisión de implementar un patrón de microservicios frente a un patrón de monolito en el sistema cloud.
- Considera los pros y contras de cada opción y justifica tu elección basada en las restricciones y ambigüedades identificadas en la fase anterior.

**Entregable:** Registro de la decisión que incluye contexto, fuerzas, opciones con pros/contras, decisión y consecuencias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la escalabilidad y la mantenibilidad de cada opción.
- Evalúa el impacto en la seguridad y la latencia.

</details>

### Fase 3: Comunicación a audiencias distintas

**Objetivo:** Comunicar la decisión tomada a audiencias con diferentes niveles de abstracción.

**Tiempo estimado:** 45 minutos

**Instrucciones:**

- Prepara una presentación para comunicar la decisión tomada a una audiencia técnica y otra para una audiencia de negocio.
- Asegúrate de que cada presentación sea clara y concisa, y que la audiencia pueda tomar una decisión informada sin pedir aclaraciones.

**Entregable:** Dos presentaciones (una técnica y una de negocio) que comunican la decisión tomada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el lenguaje y los detalles relevantes para cada audiencia.
- Asegúrate de incluir los beneficios y riesgos de la decisión.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los patrones arquitectónicos y por qué son importantes en entornos cloud?
- **paraQueSirve**: ¿Para qué sirve aplicar patrones arquitectónicos en este sistema cloud?
- **comoSeUsa**: ¿Cómo se aplican los patrones arquitectónicos en este sistema cloud?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar patrones arquitectónicos en entornos cloud?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de patrones arquitectónicos en este sistema cloud?

## Criterios de Evaluacion

- Identificación de restricciones y ambigüedades del sistema en la nube.
- Evaluación de una decisión controversial en la aplicación de patrones arquitectónicos.
- Comunicación efectiva de la decisión tomada a audiencias con diferentes niveles de abstracción.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
