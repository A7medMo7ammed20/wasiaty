import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAreaTwoComponent } from './pricing-area-two.component';

describe('PricingAreaTwoComponent', () => {
  let component: PricingAreaTwoComponent;
  let fixture: ComponentFixture<PricingAreaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingAreaTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAreaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
