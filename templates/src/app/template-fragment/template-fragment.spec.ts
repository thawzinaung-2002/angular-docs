import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFragment } from './template-fragment';

describe('TemplateFragment', () => {
  let component: TemplateFragment;
  let fixture: ComponentFixture<TemplateFragment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFragment],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFragment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
