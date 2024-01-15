import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerThirteenComponent } from './hero-banner-thirteen.component';

describe('HeroBannerThirteenComponent', () => {
  let component: HeroBannerThirteenComponent;
  let fixture: ComponentFixture<HeroBannerThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
