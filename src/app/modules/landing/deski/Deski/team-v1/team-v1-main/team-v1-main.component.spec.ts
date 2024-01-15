import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV1MainComponent } from './team-v1-main.component';

describe('TeamV1MainComponent', () => {
  let component: TeamV1MainComponent;
  let fixture: ComponentFixture<TeamV1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamV1MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamV1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
