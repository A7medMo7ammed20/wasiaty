import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBoxBannerComponent } from './doc-box-banner.component';

describe('DocBoxBannerComponent', () => {
  let component: DocBoxBannerComponent;
  let fixture: ComponentFixture<DocBoxBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocBoxBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBoxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
