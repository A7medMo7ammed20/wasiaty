import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTeamDetailsComponent } from './dynamic-team-details.component';

describe('DynamicTeamDetailsComponent', () => {
  let component: DynamicTeamDetailsComponent;
  let fixture: ComponentFixture<DynamicTeamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTeamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
