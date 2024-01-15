import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseableToolsFiveComponent } from './useable-tools-five.component';

describe('UseableToolsFiveComponent', () => {
  let component: UseableToolsFiveComponent;
  let fixture: ComponentFixture<UseableToolsFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseableToolsFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseableToolsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
