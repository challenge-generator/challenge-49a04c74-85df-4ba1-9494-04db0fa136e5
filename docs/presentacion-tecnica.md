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