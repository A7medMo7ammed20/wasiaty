import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerNineComponent } from './hero-banner-nine.component';

describe('HeroBannerNineComponent', () => {
  let component: HeroBannerNineComponent;
  let fixture: ComponentFixture<HeroBannerNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
