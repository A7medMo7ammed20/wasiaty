import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerEightComponent } from './hero-banner-eight.component';

describe('HeroBannerEightComponent', () => {
  let component: HeroBannerEightComponent;
  let fixture: ComponentFixture<HeroBannerEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
