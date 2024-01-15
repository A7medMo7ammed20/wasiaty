import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThirtyTwoComponent } from './feature-thirty-two.component';

describe('FeatureThirtyTwoComponent', () => {
  let component: FeatureThirtyTwoComponent;
  let fixture: ComponentFixture<FeatureThirtyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThirtyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThirtyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
