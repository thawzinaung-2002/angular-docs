import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoriteColorReactive } from './forms/favorite-color-reactive/favorite-color-reactive';
import { FavoriteColorTemplate } from './forms/favorite-color-template/favorite-color-template';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FavoriteColorReactive, FavoriteColorTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
