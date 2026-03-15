import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'template-fragment',
  imports: [NgTemplateOutlet],
  templateUrl: './template-fragment.html',
  styleUrl: './template-fragment.css',
})
export class TemplateFragment {
  count: number = 0;
  templateRef = viewChild<TemplateRef<unknown>>(TemplateRef);
}
