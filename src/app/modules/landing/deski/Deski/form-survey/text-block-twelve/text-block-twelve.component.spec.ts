import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTwelveComponent } from './text-block-twelve.component';

describe('TextBlockTwelveComponent', () => {
  let component: TextBlockTwelveComponent;
  let fixture: ComponentFixture<TextBlockTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
