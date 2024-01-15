import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentyComponent } from './feature-twenty.component';

describe('FeatureTwentyComponent', () => {
  let component: FeatureTwentyComponent;
  let fixture: ComponentFixture<FeatureTwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
