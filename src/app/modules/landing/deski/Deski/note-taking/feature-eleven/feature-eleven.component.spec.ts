import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureElevenComponent } from './feature-eleven.component';

describe('FeatureElevenComponent', () => {
  let component: FeatureElevenComponent;
  let fixture: ComponentFixture<FeatureElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
