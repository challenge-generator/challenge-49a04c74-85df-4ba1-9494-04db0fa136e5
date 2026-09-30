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