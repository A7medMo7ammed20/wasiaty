import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFaqDetailsComponent } from './dynamic-faq-details.component';

describe('DynamicFaqDetailsComponent', () => {
  let component: DynamicFaqDetailsComponent;
  let fixture: ComponentFixture<DynamicFaqDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFaqDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFaqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
