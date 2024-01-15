import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCounterComponent } from './pricing-counter.component';

describe('PricingCounterComponent', () => {
  let component: PricingCounterComponent;
  let fixture: ComponentFixture<PricingCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
