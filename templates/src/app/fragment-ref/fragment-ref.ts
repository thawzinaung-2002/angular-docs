import {
  AfterViewInit,
  Component,
  inject,
  input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'fragment-ref',
  imports: [],
  templateUrl: './fragment-ref.html',
  styleUrl: './fragment-ref.css',
})
export class FragmentRef implements AfterViewInit {
  private containerRef = inject(ViewContainerRef);

  templateRef = input<TemplateRef<any> | undefined>();

  ngAfterViewInit(): void {
    const template = this.templateRef();
    if (template) {
      this.containerRef.createEmbeddedView(template, { parameter: 'Parameter Passing' });
    }
  }
}
