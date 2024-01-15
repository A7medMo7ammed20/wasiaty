import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyFiveComponent } from './feature-twenty-five.component';

describe('FeatureTwentyFiveComponent', () => {
  let component: FeatureTwentyFiveComponent;
  let fixture: ComponentFixture<FeatureTwentyFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
