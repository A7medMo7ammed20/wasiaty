import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingManagementMainComponent } from './pricing-management-main.component';

describe('PricingManagementMainComponent', () => {
  let component: PricingManagementMainComponent;
  let fixture: ComponentFixture<PricingManagementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingManagementMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
