import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFifteenComponent } from './feature-fifteen.component';

describe('FeatureFifteenComponent', () => {
  let component: FeatureFifteenComponent;
  let fixture: ComponentFixture<FeatureFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureFifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
