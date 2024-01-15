import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockNineComponent } from './text-block-nine.component';

describe('TextBlockNineComponent', () => {
  let component: TextBlockNineComponent;
  let fixture: ComponentFixture<TextBlockNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
