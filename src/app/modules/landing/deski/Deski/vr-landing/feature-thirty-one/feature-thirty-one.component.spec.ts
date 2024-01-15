import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThirtyOneComponent } from './feature-thirty-one.component';

describe('FeatureThirtyOneComponent', () => {
  let component: FeatureThirtyOneComponent;
  let fixture: ComponentFixture<FeatureThirtyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThirtyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThirtyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
