import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockFiveComponent } from './text-block-five.component';

describe('TextBlockFiveComponent', () => {
  let component: TextBlockFiveComponent;
  let fixture: ComponentFixture<TextBlockFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
