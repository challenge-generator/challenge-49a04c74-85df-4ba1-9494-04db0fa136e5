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