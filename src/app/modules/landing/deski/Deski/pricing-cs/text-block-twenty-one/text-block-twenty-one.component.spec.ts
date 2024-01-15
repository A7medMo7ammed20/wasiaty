import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTwentyOneComponent } from './text-block-twenty-one.component';

describe('TextBlockTwentyOneComponent', () => {
  let component: TextBlockTwentyOneComponent;
  let fixture: ComponentFixture<TextBlockTwentyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTwentyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTwentyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
