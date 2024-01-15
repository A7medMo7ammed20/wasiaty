import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSeventeenComponent } from './feature-seventeen.component';

describe('FeatureSeventeenComponent', () => {
  let component: FeatureSeventeenComponent;
  let fixture: ComponentFixture<FeatureSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSeventeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
