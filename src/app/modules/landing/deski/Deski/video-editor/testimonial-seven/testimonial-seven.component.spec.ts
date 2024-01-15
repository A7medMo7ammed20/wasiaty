import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSevenComponent } from './testimonial-seven.component';

describe('TestimonialSevenComponent', () => {
  let component: TestimonialSevenComponent;
  let fixture: ComponentFixture<TestimonialSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
