import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFaqTwoComponent } from './pricing-faq-two.component';

describe('PricingFaqTwoComponent', () => {
  let component: PricingFaqTwoComponent;
  let fixture: ComponentFixture<PricingFaqTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingFaqTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingFaqTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
