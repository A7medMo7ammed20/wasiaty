import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNineComponent } from './feature-nine.component';

describe('FeatureNineComponent', () => {
  let component: FeatureNineComponent;
  let fixture: ComponentFixture<FeatureNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
