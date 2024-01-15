import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialEightComponent } from './testimonial-eight.component';

describe('TestimonialEightComponent', () => {
  let component: TestimonialEightComponent;
  let fixture: ComponentFixture<TestimonialEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
