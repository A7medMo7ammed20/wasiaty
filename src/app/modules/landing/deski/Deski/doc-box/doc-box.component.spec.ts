import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBoxComponent } from './doc-box.component';

describe('DocBoxComponent', () => {
  let component: DocBoxComponent;
  let fixture: ComponentFixture<DocBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
