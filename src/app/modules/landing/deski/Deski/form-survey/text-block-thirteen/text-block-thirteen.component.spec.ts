import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockThirteenComponent } from './text-block-thirteen.component';

describe('TextBlockThirteenComponent', () => {
  let component: TextBlockThirteenComponent;
  let fixture: ComponentFixture<TextBlockThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
