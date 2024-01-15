import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/team-data/teams.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent implements OnInit {

  teamMembers:any

  constructor(private teams:TeamsService) {
    this.teamMembers = this.teams.teamData().slice(6,12);
  }

  ngOnInit(): void {
  }

}
