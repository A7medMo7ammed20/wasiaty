import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCsMainComponent } from './pricing-cs-main.component';

describe('PricingCsMainComponent', () => {
  let component: PricingCsMainComponent;
  let fixture: ComponentFixture<PricingCsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingCsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
