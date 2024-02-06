import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Our App Routes
import { routes } from './app.routes';

// Our app config is empty for this app except for the router 
// However this could be removed as not used/needed
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
