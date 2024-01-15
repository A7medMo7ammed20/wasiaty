import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSignatureMainComponent } from './doc-signature-main.component';

describe('DocSignatureMainComponent', () => {
  let component: DocSignatureMainComponent;
  let fixture: ComponentFixture<DocSignatureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSignatureMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSignatureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
