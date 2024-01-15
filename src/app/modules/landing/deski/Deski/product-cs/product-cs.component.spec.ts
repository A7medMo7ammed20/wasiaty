import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCsComponent } from './product-cs.component';

describe('ProductCsComponent', () => {
  let component: ProductCsComponent;
  let fixture: ComponentFixture<ProductCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
