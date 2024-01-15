import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTenComponent } from './feature-ten.component';

describe('FeatureTenComponent', () => {
  let component: FeatureTenComponent;
  let fixture: ComponentFixture<FeatureTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
