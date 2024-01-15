import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTwentyTwoComponent } from './text-block-twenty-two.component';

describe('TextBlockTwentyTwoComponent', () => {
  let component: TextBlockTwentyTwoComponent;
  let fixture: ComponentFixture<TextBlockTwentyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTwentyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTwentyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
