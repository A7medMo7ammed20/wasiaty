import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCounterFourComponent } from './about-counter-four.component';

describe('AboutCounterFourComponent', () => {
  let component: AboutCounterFourComponent;
  let fixture: ComponentFixture<AboutCounterFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCounterFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCounterFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
