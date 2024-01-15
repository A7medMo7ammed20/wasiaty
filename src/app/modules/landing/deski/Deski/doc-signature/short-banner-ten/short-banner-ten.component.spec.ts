import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerTenComponent } from './short-banner-ten.component';

describe('ShortBannerTenComponent', () => {
  let component: ShortBannerTenComponent;
  let fixture: ComponentFixture<ShortBannerTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
