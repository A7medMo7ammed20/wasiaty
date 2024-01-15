import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFullwidthBannerComponent } from './doc-fullwidth-banner.component';

describe('DocFullwidthBannerComponent', () => {
  let component: DocFullwidthBannerComponent;
  let fixture: ComponentFixture<DocFullwidthBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocFullwidthBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFullwidthBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
