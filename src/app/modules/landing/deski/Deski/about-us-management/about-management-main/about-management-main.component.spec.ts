import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutManagementMainComponent } from './about-management-main.component';

describe('AboutManagementMainComponent', () => {
  let component: AboutManagementMainComponent;
  let fixture: ComponentFixture<AboutManagementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutManagementMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
