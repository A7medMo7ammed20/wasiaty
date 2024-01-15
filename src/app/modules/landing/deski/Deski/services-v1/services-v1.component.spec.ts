import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesV1Component } from './services-v1.component';

describe('ServicesV1Component', () => {
  let component: ServicesV1Component;
  let fixture: ComponentFixture<ServicesV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
