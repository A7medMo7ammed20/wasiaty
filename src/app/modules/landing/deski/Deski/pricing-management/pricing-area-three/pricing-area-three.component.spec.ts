import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAreaThreeComponent } from './pricing-area-three.component';

describe('PricingAreaThreeComponent', () => {
  let component: PricingAreaThreeComponent;
  let fixture: ComponentFixture<PricingAreaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingAreaThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAreaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
