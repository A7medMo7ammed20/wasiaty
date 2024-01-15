import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewEndowmentComponent } from './review-endowment.component';

// import { CreateTypeComponent } from './review-endowment.component';

describe('createTypeComponent', () => {
  let component: ReviewEndowmentComponent;
  let fixture: ComponentFixture<ReviewEndowmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReviewEndowmentComponent]
    });
    fixture = TestBed.createComponent(ReviewEndowmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
