import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingMainComponent } from './product-landing-main.component';

describe('ProductLandingMainComponent', () => {
  let component: ProductLandingMainComponent;
  let fixture: ComponentFixture<ProductLandingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLandingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
