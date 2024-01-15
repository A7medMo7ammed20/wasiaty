import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSixComponent } from './testimonial-six.component';

describe('TestimonialSixComponent', () => {
  let component: TestimonialSixComponent;
  let fixture: ComponentFixture<TestimonialSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
