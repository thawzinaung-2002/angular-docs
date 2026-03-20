import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StrConcatPipe } from './str-concat-pipe';
import { BaseButton } from './base-button/base-button';
import { TemplateFragment } from './template-fragment/template-fragment';
import { FragmentRef } from './fragment-ref/fragment-ref';
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StrConcatPipe, BaseButton, TemplateFragment, FragmentRef, UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  theme = ' ';

  cssClassArr = signal(['fColor', 'fSize', 'fFamily']);

  changeColor() {
    this.cssClassArr.update((val) => [...val, 'f2Color']);
  }

  showOverlay(event: PointerEvent): void {
    event.preventDefault();
    console.log('Show overlay without updating the URL!');
  }
}
