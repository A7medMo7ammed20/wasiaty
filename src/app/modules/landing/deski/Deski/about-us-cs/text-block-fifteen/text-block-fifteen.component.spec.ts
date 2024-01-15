import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockFifteenComponent } from './text-block-fifteen.component';

describe('TextBlockFifteenComponent', () => {
  let component: TextBlockFifteenComponent;
  let fixture: ComponentFixture<TextBlockFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockFifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
