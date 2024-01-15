import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentySevenComponent } from './feature-twenty-seven.component';

describe('FeatureTwentySevenComponent', () => {
  let component: FeatureTwentySevenComponent;
  let fixture: ComponentFixture<FeatureTwentySevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentySevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
