import { Component, inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CONFIG_TOKEN } from './injection-token/token-provider';

@Injectable()
export class LocalDataStore {
  private data: string[] = [];

  addData(item: string) {
    this.data.push(item);
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  config = inject(CONFIG_TOKEN);
}
