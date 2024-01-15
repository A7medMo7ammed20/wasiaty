import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialNineComponent } from './testimonial-nine.component';

describe('TestimonialNineComponent', () => {
  let component: TestimonialNineComponent;
  let fixture: ComponentFixture<TestimonialNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
