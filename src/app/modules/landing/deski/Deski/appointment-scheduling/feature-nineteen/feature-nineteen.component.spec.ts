import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNineteenComponent } from './feature-nineteen.component';

describe('FeatureNineteenComponent', () => {
  let component: FeatureNineteenComponent;
  let fixture: ComponentFixture<FeatureNineteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNineteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
