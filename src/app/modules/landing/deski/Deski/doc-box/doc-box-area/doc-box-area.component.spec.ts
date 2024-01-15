import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBoxAreaComponent } from './doc-box-area.component';

describe('DocBoxAreaComponent', () => {
  let component: DocBoxAreaComponent;
  let fixture: ComponentFixture<DocBoxAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocBoxAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBoxAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
