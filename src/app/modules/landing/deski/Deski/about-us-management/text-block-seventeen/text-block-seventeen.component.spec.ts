import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockSeventeenComponent } from './text-block-seventeen.component';

describe('TextBlockSeventeenComponent', () => {
  let component: TextBlockSeventeenComponent;
  let fixture: ComponentFixture<TextBlockSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockSeventeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
