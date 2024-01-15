import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerSixComponent } from './hero-banner-six.component';

describe('HeroBannerSixComponent', () => {
  let component: HeroBannerSixComponent;
  let fixture: ComponentFixture<HeroBannerSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBannerSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
