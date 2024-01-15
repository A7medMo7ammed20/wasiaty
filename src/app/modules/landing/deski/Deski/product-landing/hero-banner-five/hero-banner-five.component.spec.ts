import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerFiveComponent } from './hero-banner-five.component';

describe('HeroBannerFiveComponent', () => {
  let component: HeroBannerFiveComponent;
  let fixture: ComponentFixture<HeroBannerFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
