import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSixteenComponent } from './feature-sixteen.component';

describe('FeatureSixteenComponent', () => {
  let component: FeatureSixteenComponent;
  let fixture: ComponentFixture<FeatureSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSixteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
