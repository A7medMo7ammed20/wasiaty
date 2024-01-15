import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFullwidthComponent } from './doc-fullwidth.component';

describe('DocFullwidthComponent', () => {
  let component: DocFullwidthComponent;
  let fixture: ComponentFixture<DocFullwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocFullwidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFullwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
