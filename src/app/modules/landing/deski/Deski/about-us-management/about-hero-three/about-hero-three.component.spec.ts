import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeroThreeComponent } from './about-hero-three.component';

describe('AboutHeroThreeComponent', () => {
  let component: AboutHeroThreeComponent;
  let fixture: ComponentFixture<AboutHeroThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHeroThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeroThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
