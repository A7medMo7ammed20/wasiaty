import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerThreeComponent } from './hero-banner-three.component';

describe('HeroBannerThreeComponent', () => {
  let component: HeroBannerThreeComponent;
  let fixture: ComponentFixture<HeroBannerThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
