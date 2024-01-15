import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOrganizerMainComponent } from './event-organizer-main.component';

describe('EventOrganizerMainComponent', () => {
  let component: EventOrganizerMainComponent;
  let fixture: ComponentFixture<EventOrganizerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOrganizerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOrganizerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
