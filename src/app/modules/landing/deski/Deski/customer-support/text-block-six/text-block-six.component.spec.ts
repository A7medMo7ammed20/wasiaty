import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockSixComponent } from './text-block-six.component';

describe('TextBlockSixComponent', () => {
  let component: TextBlockSixComponent;
  let fixture: ComponentFixture<TextBlockSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
