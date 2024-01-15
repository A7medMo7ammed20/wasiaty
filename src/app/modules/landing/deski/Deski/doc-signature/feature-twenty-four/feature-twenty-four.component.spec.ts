import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyFourComponent } from './feature-twenty-four.component';

describe('FeatureTwentyFourComponent', () => {
  let component: FeatureTwentyFourComponent;
  let fixture: ComponentFixture<FeatureTwentyFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
