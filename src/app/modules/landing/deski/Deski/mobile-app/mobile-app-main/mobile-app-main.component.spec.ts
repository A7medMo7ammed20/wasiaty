import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppMainComponent } from './mobile-app-main.component';

describe('MobileAppMainComponent', () => {
  let component: MobileAppMainComponent;
  let fixture: ComponentFixture<MobileAppMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
