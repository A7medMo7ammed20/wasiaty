import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseableToolsTwoComponent } from './useable-tools-two.component';

describe('UseableToolsTwoComponent', () => {
  let component: UseableToolsTwoComponent;
  let fixture: ComponentFixture<UseableToolsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseableToolsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseableToolsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
