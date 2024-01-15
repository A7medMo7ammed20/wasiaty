import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerTenComponent } from './hero-banner-ten.component';

describe('HeroBannerTenComponent', () => {
  let component: HeroBannerTenComponent;
  let fixture: ComponentFixture<HeroBannerTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
