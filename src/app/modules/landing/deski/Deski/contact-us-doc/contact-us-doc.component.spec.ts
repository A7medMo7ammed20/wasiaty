import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDocComponent } from './contact-us-doc.component';

describe('ContactUsDocComponent', () => {
  let component: ContactUsDocComponent;
  let fixture: ComponentFixture<ContactUsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
