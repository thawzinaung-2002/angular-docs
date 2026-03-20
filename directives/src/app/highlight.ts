import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Highlight {
  private el = inject(ElementRef);

  appHighlightColor = input('');
  defaultColor = input('');

  highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  onMouseEnter() {
    this.highLight(this.appHighlightColor());
  }

  onMouseLeave() {
    this.highLight(this.defaultColor());
  }
}
