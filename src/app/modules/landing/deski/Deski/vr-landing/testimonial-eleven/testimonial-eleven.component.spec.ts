import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialElevenComponent } from './testimonial-eleven.component';

describe('TestimonialElevenComponent', () => {
  let component: TestimonialElevenComponent;
  let fixture: ComponentFixture<TestimonialElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
