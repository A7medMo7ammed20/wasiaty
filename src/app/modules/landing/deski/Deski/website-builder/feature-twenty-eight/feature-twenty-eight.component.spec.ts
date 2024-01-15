import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyEightComponent } from './feature-twenty-eight.component';

describe('FeatureTwentyEightComponent', () => {
  let component: FeatureTwentyEightComponent;
  let fixture: ComponentFixture<FeatureTwentyEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
