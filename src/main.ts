import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstap our appplication using the AppComponent and appConfig
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
