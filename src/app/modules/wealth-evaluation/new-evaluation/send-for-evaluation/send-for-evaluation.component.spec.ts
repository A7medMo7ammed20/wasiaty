import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendForEvaluationComponent } from './send-for-evaluation.component';

describe('CreateEvaluationComponent', () => {
  let component: SendForEvaluationComponent;
  let fixture: ComponentFixture<SendForEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SendForEvaluationComponent]
    });
    fixture = TestBed.createComponent(SendForEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
