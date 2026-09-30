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