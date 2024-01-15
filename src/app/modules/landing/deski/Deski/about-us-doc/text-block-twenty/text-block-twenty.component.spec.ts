import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTwentyComponent } from './text-block-twenty.component';

describe('TextBlockTwentyComponent', () => {
  let component: TextBlockTwentyComponent;
  let fixture: ComponentFixture<TextBlockTwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTwentyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
