import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEighteenComponent } from './feature-eighteen.component';

describe('FeatureEighteenComponent', () => {
  let component: FeatureEighteenComponent;
  let fixture: ComponentFixture<FeatureEighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureEighteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
