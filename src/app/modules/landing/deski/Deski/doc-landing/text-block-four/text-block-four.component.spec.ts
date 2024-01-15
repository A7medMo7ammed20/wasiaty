import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockFourComponent } from './text-block-four.component';

describe('TextBlockFourComponent', () => {
  let component: TextBlockFourComponent;
  let fixture: ComponentFixture<TextBlockFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
