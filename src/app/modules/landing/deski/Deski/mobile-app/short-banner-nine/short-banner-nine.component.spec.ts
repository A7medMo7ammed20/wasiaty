import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerNineComponent } from './short-banner-nine.component';

describe('ShortBannerNineComponent', () => {
  let component: ShortBannerNineComponent;
  let fixture: ComponentFixture<ShortBannerNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
