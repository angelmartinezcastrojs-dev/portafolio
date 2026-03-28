import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled', // Esto hace la magia
        anchorScrolling: 'enabled'            // Opcional: para navegación por anchors (#seccion)
      })
    )
  ]
};
