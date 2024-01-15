import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicServiceDetailsComponent } from './dynamic-service-details.component';

describe('DynamicServiceDetailsComponent', () => {
  let component: DynamicServiceDetailsComponent;
  let fixture: ComponentFixture<DynamicServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicServiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
