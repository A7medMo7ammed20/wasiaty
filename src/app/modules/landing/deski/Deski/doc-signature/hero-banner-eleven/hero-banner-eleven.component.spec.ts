import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerElevenComponent } from './hero-banner-eleven.component';

describe('HeroBannerElevenComponent', () => {
  let component: HeroBannerElevenComponent;
  let fixture: ComponentFixture<HeroBannerElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
