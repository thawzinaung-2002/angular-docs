import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentRef } from './fragment-ref';

describe('FragmentRef', () => {
  let component: FragmentRef;
  let fixture: ComponentFixture<FragmentRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragmentRef],
    }).compileComponents();

    fixture = TestBed.createComponent(FragmentRef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
