import { Directive, input } from '@angular/core';

@Directive({
  selector: '[theme]',
})
export class Theme {
  constructor() {}

  mode = input<'red' | 'blue'>('red');
}
