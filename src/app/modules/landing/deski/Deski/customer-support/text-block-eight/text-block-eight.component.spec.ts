import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockEightComponent } from './text-block-eight.component';

describe('TextBlockEightComponent', () => {
  let component: TextBlockEightComponent;
  let fixture: ComponentFixture<TextBlockEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
