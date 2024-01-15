import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAreaComponent } from './doc-area.component';

describe('DocAreaComponent', () => {
  let component: DocAreaComponent;
  let fixture: ComponentFixture<DocAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
