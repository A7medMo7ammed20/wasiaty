import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerTwoComponent } from './short-banner-two.component';

describe('ShortBannerTwoComponent', () => {
  let component: ShortBannerTwoComponent;
  let fixture: ComponentFixture<ShortBannerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
