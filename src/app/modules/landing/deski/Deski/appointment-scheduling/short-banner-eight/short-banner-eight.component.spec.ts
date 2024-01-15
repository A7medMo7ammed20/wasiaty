import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerEightComponent } from './short-banner-eight.component';

describe('ShortBannerEightComponent', () => {
  let component: ShortBannerEightComponent;
  let fixture: ComponentFixture<ShortBannerEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
