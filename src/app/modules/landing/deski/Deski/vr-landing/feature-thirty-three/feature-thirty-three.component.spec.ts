import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThirtyThreeComponent } from './feature-thirty-three.component';

describe('FeatureThirtyThreeComponent', () => {
  let component: FeatureThirtyThreeComponent;
  let fixture: ComponentFixture<FeatureThirtyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThirtyThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThirtyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
