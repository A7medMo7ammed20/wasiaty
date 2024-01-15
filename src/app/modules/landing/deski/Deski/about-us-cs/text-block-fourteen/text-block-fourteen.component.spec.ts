import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockFourteenComponent } from './text-block-fourteen.component';

describe('TextBlockFourteenComponent', () => {
  let component: TextBlockFourteenComponent;
  let fixture: ComponentFixture<TextBlockFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
