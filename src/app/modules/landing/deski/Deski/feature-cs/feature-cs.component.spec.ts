import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCsComponent } from './feature-cs.component';

describe('FeatureCsComponent', () => {
  let component: FeatureCsComponent;
  let fixture: ComponentFixture<FeatureCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureCsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
