import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCsMainComponent } from './about-us-cs-main.component';

describe('AboutUsCsMainComponent', () => {
  let component: AboutUsCsMainComponent;
  let fixture: ComponentFixture<AboutUsCsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsCsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
