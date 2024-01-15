import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwentySixComponent } from './feature-twenty-six.component';

describe('FeatureTwentySixComponent', () => {
  let component: FeatureTwentySixComponent;
  let fixture: ComponentFixture<FeatureTwentySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTwentySixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwentySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
