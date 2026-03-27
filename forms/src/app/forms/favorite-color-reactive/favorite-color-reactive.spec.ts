import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColorReactive } from './favorite-color-reactive';

describe('FavoriteColorReactive', () => {
  let component: FavoriteColorReactive;
  let fixture: ComponentFixture<FavoriteColorReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteColorReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteColorReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
