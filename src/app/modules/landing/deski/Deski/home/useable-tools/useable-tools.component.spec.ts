import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseableToolsComponent } from './useable-tools.component';

describe('UseableToolsComponent', () => {
  let component: UseableToolsComponent;
  let fixture: ComponentFixture<UseableToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseableToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseableToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
