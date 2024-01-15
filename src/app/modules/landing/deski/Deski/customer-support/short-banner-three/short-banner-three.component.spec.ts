import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerThreeComponent } from './short-banner-three.component';

describe('ShortBannerThreeComponent', () => {
  let component: ShortBannerThreeComponent;
  let fixture: ComponentFixture<ShortBannerThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
