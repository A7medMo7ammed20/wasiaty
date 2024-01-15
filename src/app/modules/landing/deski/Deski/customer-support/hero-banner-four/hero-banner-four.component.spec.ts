import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerFourComponent } from './hero-banner-four.component';

describe('HeroBannerFourComponent', () => {
  let component: HeroBannerFourComponent;
  let fixture: ComponentFixture<HeroBannerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
