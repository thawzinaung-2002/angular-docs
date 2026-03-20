import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  color = 'yellow';
}
