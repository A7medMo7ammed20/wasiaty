import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThirtyFourComponent } from './feature-thirty-four.component';

describe('FeatureThirtyFourComponent', () => {
  let component: FeatureThirtyFourComponent;
  let fixture: ComponentFixture<FeatureThirtyFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThirtyFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThirtyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
