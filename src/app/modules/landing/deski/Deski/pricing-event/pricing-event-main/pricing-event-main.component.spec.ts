import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingEventMainComponent } from './pricing-event-main.component';

describe('PricingEventMainComponent', () => {
  let component: PricingEventMainComponent;
  let fixture: ComponentFixture<PricingEventMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingEventMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingEventMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
