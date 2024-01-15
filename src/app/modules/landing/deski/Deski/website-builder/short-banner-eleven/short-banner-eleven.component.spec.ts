import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerElevenComponent } from './short-banner-eleven.component';

describe('ShortBannerElevenComponent', () => {
  let component: ShortBannerElevenComponent;
  let fixture: ComponentFixture<ShortBannerElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
