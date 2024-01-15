import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStyleComponent } from './contact-style.component';

describe('ContactStyleComponent', () => {
  let component: ContactStyleComponent;
  let fixture: ComponentFixture<ContactStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
