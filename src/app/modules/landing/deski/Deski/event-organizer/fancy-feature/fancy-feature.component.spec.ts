import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyFeatureComponent } from './fancy-feature.component';

describe('FancyFeatureComponent', () => {
  let component: FancyFeatureComponent;
  let fixture: ComponentFixture<FancyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
