import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedAppsComponent } from './integrated-apps.component';

describe('IntegratedAppsComponent', () => {
  let component: IntegratedAppsComponent;
  let fixture: ComponentFixture<IntegratedAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
