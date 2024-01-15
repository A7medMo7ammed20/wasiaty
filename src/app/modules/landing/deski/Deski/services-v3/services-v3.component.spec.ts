import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesV3Component } from './services-v3.component';

describe('ServicesV3Component', () => {
  let component: ServicesV3Component;
  let fixture: ComponentFixture<ServicesV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
