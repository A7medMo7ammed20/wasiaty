import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrLandingMainComponent } from './vr-landing-main.component';

describe('VrLandingMainComponent', () => {
  let component: VrLandingMainComponent;
  let fixture: ComponentFixture<VrLandingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrLandingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrLandingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
