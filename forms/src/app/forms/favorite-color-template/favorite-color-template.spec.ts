import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColorTemplate } from './favorite-color-template';

describe('FavoriteColorTemplate', () => {
  let component: FavoriteColorTemplate;
  let fixture: ComponentFixture<FavoriteColorTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteColorTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteColorTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
