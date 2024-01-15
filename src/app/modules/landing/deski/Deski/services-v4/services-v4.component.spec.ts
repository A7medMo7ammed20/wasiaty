import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesV4Component } from './services-v4.component';

describe('ServicesV4Component', () => {
  let component: ServicesV4Component;
  let fixture: ComponentFixture<ServicesV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
