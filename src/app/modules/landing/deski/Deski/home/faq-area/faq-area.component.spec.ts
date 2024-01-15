import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAreaComponent } from './faq-area.component';

describe('FaqAreaComponent', () => {
  let component: FaqAreaComponent;
  let fixture: ComponentFixture<FaqAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
