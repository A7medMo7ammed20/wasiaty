import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamFourComponent } from './about-team-four.component';

describe('AboutTeamFourComponent', () => {
  let component: AboutTeamFourComponent;
  let fixture: ComponentFixture<AboutTeamFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
