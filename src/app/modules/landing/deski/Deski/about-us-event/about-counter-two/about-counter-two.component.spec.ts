import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCounterTwoComponent } from './about-counter-two.component';

describe('AboutCounterTwoComponent', () => {
  let component: AboutCounterTwoComponent;
  let fixture: ComponentFixture<AboutCounterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCounterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCounterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
