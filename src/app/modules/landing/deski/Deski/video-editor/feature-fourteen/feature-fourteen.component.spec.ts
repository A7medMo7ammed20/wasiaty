import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFourteenComponent } from './feature-fourteen.component';

describe('FeatureFourteenComponent', () => {
  let component: FeatureFourteenComponent;
  let fixture: ComponentFixture<FeatureFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
