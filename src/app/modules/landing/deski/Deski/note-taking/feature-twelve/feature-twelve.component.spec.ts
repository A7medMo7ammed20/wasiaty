import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwelveComponent } from './feature-twelve.component';

describe('FeatureTwelveComponent', () => {
  let component: FeatureTwelveComponent;
  let fixture: ComponentFixture<FeatureTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
