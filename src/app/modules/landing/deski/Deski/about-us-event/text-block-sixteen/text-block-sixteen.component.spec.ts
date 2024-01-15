import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockSixteenComponent } from './text-block-sixteen.component';

describe('TextBlockSixteenComponent', () => {
  let component: TextBlockSixteenComponent;
  let fixture: ComponentFixture<TextBlockSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockSixteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
