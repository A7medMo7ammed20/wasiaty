import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyNineComponent } from './feature-twenty-nine.component';

describe('FeatureTwentyNineComponent', () => {
  let component: FeatureTwentyNineComponent;
  let fixture: ComponentFixture<FeatureTwentyNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
