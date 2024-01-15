import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBannerSixComponent } from './short-banner-six.component';

describe('ShortBannerSixComponent', () => {
  let component: ShortBannerSixComponent;
  let fixture: ComponentFixture<ShortBannerSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBannerSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBannerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
