import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingDarkMainComponent } from './product-landing-dark-main.component';

describe('ProductLandingDarkMainComponent', () => {
  let component: ProductLandingDarkMainComponent;
  let fixture: ComponentFixture<ProductLandingDarkMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLandingDarkMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandingDarkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
