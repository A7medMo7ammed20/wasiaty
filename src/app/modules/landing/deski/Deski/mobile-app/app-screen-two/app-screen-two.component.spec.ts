import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScreenTwoComponent } from './app-screen-two.component';

describe('AppScreenTwoComponent', () => {
  let component: AppScreenTwoComponent;
  let fixture: ComponentFixture<AppScreenTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppScreenTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppScreenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
