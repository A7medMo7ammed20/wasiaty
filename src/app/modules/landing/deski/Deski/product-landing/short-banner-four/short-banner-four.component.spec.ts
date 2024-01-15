import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerFourComponent } from './short-banner-four.component';

describe('ShortBannerFourComponent', () => {
  let component: ShortBannerFourComponent;
  let fixture: ComponentFixture<ShortBannerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
