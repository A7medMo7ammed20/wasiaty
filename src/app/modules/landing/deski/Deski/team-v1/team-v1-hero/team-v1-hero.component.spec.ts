import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV1HeroComponent } from './team-v1-hero.component';

describe('TeamV1HeroComponent', () => {
  let component: TeamV1HeroComponent;
  let fixture: ComponentFixture<TeamV1HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamV1HeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamV1HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
