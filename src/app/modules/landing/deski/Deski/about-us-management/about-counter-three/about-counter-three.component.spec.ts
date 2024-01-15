import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCounterThreeComponent } from './about-counter-three.component';

describe('AboutCounterThreeComponent', () => {
  let component: AboutCounterThreeComponent;
  let fixture: ComponentFixture<AboutCounterThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCounterThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCounterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
