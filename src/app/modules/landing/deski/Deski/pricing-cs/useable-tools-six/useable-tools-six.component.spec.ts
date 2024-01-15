import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseableToolsSixComponent } from './useable-tools-six.component';

describe('UseableToolsSixComponent', () => {
  let component: UseableToolsSixComponent;
  let fixture: ComponentFixture<UseableToolsSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseableToolsSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseableToolsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
