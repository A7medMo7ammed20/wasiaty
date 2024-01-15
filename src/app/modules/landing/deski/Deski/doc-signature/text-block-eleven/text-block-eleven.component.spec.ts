import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockElevenComponent } from './text-block-eleven.component';

describe('TextBlockElevenComponent', () => {
  let component: TextBlockElevenComponent;
  let fixture: ComponentFixture<TextBlockElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
