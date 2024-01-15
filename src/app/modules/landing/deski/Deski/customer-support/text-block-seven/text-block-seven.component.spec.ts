import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockSevenComponent } from './text-block-seven.component';

describe('TextBlockSevenComponent', () => {
  let component: TextBlockSevenComponent;
  let fixture: ComponentFixture<TextBlockSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
