import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyThreeComponent } from './feature-twenty-three.component';

describe('FeatureTwentyThreeComponent', () => {
  let component: FeatureTwentyThreeComponent;
  let fixture: ComponentFixture<FeatureTwentyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
