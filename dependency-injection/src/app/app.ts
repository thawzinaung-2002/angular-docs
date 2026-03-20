import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Config, CONFIG_TOKEN } from './injection-token/token-provider';

const SelfConfig: Config = {
  apiUrl: 'selfconfig.com',
  timeout: 10,
  features: {},
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // providers: [{ provide: CONFIG_TOKEN, useValue: SelfConfig }],
})
export class App {
  config = inject(CONFIG_TOKEN, { host: true, optional: true });
}
