import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamThreeComponent } from './about-team-three.component';

describe('AboutTeamThreeComponent', () => {
  let component: AboutTeamThreeComponent;
  let fixture: ComponentFixture<AboutTeamThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
