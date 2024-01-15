import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSchedulingMainComponent } from './appointment-scheduling-main.component';

describe('AppointmentSchedulingMainComponent', () => {
  let component: AppointmentSchedulingMainComponent;
  let fixture: ComponentFixture<AppointmentSchedulingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSchedulingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSchedulingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
