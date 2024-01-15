import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyTwoComponent } from './feature-twenty-two.component';

describe('FeatureTwentyTwoComponent', () => {
  let component: FeatureTwentyTwoComponent;
  let fixture: ComponentFixture<FeatureTwentyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
