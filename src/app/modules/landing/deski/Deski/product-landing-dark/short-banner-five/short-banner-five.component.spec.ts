import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerFiveComponent } from './short-banner-five.component';

describe('ShortBannerFiveComponent', () => {
  let component: ShortBannerFiveComponent;
  let fixture: ComponentFixture<ShortBannerFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
