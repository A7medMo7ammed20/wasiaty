import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerSevenComponent } from './short-banner-seven.component';

describe('ShortBannerSevenComponent', () => {
  let component: ShortBannerSevenComponent;
  let fixture: ComponentFixture<ShortBannerSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
