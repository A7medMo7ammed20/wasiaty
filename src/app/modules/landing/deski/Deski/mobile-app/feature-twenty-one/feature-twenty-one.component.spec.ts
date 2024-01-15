import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyOneComponent } from './feature-twenty-one.component';

describe('FeatureTwentyOneComponent', () => {
  let component: FeatureTwentyOneComponent;
  let fixture: ComponentFixture<FeatureTwentyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
