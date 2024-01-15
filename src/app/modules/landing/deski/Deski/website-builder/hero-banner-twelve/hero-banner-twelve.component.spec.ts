import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerTwelveComponent } from './hero-banner-twelve.component';

describe('HeroBannerTwelveComponent', () => {
  let component: HeroBannerTwelveComponent;
  let fixture: ComponentFixture<HeroBannerTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
