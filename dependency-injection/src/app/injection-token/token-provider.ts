import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('api.url');

export const LOGGER = new InjectionToken<(msg: string) => void>('logger.function');

export interface Config {
  apiUrl: string;
  timeout: number;
  features: Record<string, boolean>;
}

export const CONFIG_TOKEN = new InjectionToken<Config>('app.config', {
  providedIn: 'root',
  factory: () => ({
    apiUrl: 'https://example.api.com',
    timeout: 15,
    features: {
      darkMode: true,
      analytics: false,
    },
  }),
});
