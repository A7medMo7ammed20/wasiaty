import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV2MainComponent } from './team-v2-main.component';

describe('TeamV2MainComponent', () => {
  let component: TeamV2MainComponent;
  let fixture: ComponentFixture<TeamV2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamV2MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamV2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
