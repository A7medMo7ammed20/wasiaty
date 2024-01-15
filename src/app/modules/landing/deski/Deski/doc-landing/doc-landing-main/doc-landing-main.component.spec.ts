import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLandingMainComponent } from './doc-landing-main.component';

describe('DocLandingMainComponent', () => {
  let component: DocLandingMainComponent;
  let fixture: ComponentFixture<DocLandingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocLandingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLandingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
