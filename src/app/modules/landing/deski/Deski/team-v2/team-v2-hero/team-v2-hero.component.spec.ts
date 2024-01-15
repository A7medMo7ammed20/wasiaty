import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV2HeroComponent } from './team-v2-hero.component';

describe('TeamV2HeroComponent', () => {
  let component: TeamV2HeroComponent;
  let fixture: ComponentFixture<TeamV2HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamV2HeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamV2HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
