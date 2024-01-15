import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerTwelveComponent } from './short-banner-twelve.component';

describe('ShortBannerTwelveComponent', () => {
  let component: ShortBannerTwelveComponent;
  let fixture: ComponentFixture<ShortBannerTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
