import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSurveyMainComponent } from './form-survey-main.component';

describe('FormSurveyMainComponent', () => {
  let component: FormSurveyMainComponent;
  let fixture: ComponentFixture<FormSurveyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSurveyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSurveyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
