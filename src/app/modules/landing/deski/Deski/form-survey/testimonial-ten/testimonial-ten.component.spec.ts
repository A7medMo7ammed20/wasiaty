import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialTenComponent } from './testimonial-ten.component';

describe('TestimonialTenComponent', () => {
  let component: TestimonialTenComponent;
  let fixture: ComponentFixture<TestimonialTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
