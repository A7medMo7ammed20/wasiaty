import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockEighteenComponent } from './text-block-eighteen.component';

describe('TextBlockEighteenComponent', () => {
  let component: TextBlockEighteenComponent;
  let fixture: ComponentFixture<TextBlockEighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockEighteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
