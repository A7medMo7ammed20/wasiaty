import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsEventComponent } from './contact-us-event.component';

describe('ContactUsEventComponent', () => {
  let component: ContactUsEventComponent;
  let fixture: ComponentFixture<ContactUsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
