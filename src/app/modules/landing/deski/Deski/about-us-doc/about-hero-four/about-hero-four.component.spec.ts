import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeroFourComponent } from './about-hero-four.component';

describe('AboutHeroFourComponent', () => {
  let component: AboutHeroFourComponent;
  let fixture: ComponentFixture<AboutHeroFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHeroFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeroFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
