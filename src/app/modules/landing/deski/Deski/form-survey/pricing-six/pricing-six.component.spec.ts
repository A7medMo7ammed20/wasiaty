import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSixComponent } from './pricing-six.component';

describe('PricingSixComponent', () => {
  let component: PricingSixComponent;
  let fixture: ComponentFixture<PricingSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
