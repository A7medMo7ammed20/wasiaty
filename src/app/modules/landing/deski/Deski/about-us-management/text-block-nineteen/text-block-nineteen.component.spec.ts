import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockNineteenComponent } from './text-block-nineteen.component';

describe('TextBlockNineteenComponent', () => {
  let component: TextBlockNineteenComponent;
  let fixture: ComponentFixture<TextBlockNineteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockNineteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
