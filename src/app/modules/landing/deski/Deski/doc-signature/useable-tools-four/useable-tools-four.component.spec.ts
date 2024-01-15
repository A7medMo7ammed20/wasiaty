import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseableToolsFourComponent } from './useable-tools-four.component';

describe('UseableToolsFourComponent', () => {
  let component: UseableToolsFourComponent;
  let fixture: ComponentFixture<UseableToolsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseableToolsFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseableToolsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
