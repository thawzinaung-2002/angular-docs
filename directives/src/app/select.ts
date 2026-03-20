import {
  Directive,
  inject,
  input,
  inputBinding,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[select]',
})
export class Select {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {}

  selectFrom = input.required();

  // async ngOnInit() {
  //   const data = await this.selectFrom.load();
  // }
}
