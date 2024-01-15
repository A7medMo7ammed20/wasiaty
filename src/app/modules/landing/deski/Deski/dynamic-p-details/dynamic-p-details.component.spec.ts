import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPDetailsComponent } from './dynamic-p-details.component';

describe('DynamicPDetailsComponent', () => {
  let component: DynamicPDetailsComponent;
  let fixture: ComponentFixture<DynamicPDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicPDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
