import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCsMainComponent } from './contact-us-cs-main.component';

describe('ContactUsCsMainComponent', () => {
  let component: ContactUsCsMainComponent;
  let fixture: ComponentFixture<ContactUsCsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
