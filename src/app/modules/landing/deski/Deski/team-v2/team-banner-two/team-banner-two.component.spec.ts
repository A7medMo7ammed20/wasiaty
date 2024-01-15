import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBannerTwoComponent } from './team-banner-two.component';

describe('TeamBannerTwoComponent', () => {
  let component: TeamBannerTwoComponent;
  let fixture: ComponentFixture<TeamBannerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBannerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBannerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
