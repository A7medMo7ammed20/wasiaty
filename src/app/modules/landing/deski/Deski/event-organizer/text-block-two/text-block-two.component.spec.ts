import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTwoComponent } from './text-block-two.component';

describe('TextBlockTwoComponent', () => {
  let component: TextBlockTwoComponent;
  let fixture: ComponentFixture<TextBlockTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
