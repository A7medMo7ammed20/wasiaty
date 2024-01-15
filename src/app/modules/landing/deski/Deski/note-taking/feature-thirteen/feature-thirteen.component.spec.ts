import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureThirteenComponent } from './feature-thirteen.component';

describe('FeatureThirteenComponent', () => {
  let component: FeatureThirteenComponent;
  let fixture: ComponentFixture<FeatureThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
