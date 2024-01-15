import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportMainComponent } from './customer-support-main.component';

describe('CustomerSupportMainComponent', () => {
  let component: CustomerSupportMainComponent;
  let fixture: ComponentFixture<CustomerSupportMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSupportMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
