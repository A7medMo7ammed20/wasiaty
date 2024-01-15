import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamTwoComponent } from './about-team-two.component';

describe('AboutTeamTwoComponent', () => {
  let component: AboutTeamTwoComponent;
  let fixture: ComponentFixture<AboutTeamTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
