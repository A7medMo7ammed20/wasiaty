import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockTenComponent } from './text-block-ten.component';

describe('TextBlockTenComponent', () => {
  let component: TextBlockTenComponent;
  let fixture: ComponentFixture<TextBlockTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlockTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
