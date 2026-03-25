import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withHashLocation,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { AppTitleStrategy } from './app-title';
import { PathLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
  ],
};
