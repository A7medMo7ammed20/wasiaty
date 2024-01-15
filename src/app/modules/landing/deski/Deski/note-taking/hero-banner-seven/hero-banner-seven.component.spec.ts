import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerSevenComponent } from './hero-banner-seven.component';

describe('HeroBannerSevenComponent', () => {
  let component: HeroBannerSevenComponent;
  let fixture: ComponentFixture<HeroBannerSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
