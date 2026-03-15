import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StrConcatPipe } from './str-concat-pipe';
import { BaseButton } from './base-button/base-button';
import { TemplateFragment } from './template-fragment/template-fragment';
import { FragmentRef } from './fragment-ref/fragment-ref';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StrConcatPipe, BaseButton, TemplateFragment, FragmentRef],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  theme = 'dark';

  cssClassArr = signal(['fColor', 'fSize', 'fFamily']);

  changeColor() {
    this.cssClassArr.update((val) => [...val, 'f2Color']);
  }

  showOverlay(event: PointerEvent): void {
    event.preventDefault();
    console.log('Show overlay without updating the URL!');
  }
}
