import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBannerComponent } from './fancy-banner.component';

describe('FancyBannerComponent', () => {
  let component: FancyBannerComponent;
  let fixture: ComponentFixture<FancyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
