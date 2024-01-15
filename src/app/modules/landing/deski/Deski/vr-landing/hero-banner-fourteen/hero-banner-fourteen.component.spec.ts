import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerFourteenComponent } from './hero-banner-fourteen.component';

describe('HeroBannerFourteenComponent', () => {
  let component: HeroBannerFourteenComponent;
  let fixture: ComponentFixture<HeroBannerFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
