import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThirtyComponent } from './feature-thirty.component';

describe('FeatureThirtyComponent', () => {
  let component: FeatureThirtyComponent;
  let fixture: ComponentFixture<FeatureThirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThirtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
