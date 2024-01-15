import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseableToolsThreeComponent } from './useable-tools-three.component';

describe('UseableToolsThreeComponent', () => {
  let component: UseableToolsThreeComponent;
  let fixture: ComponentFixture<UseableToolsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseableToolsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseableToolsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
