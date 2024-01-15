import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/team-data/teams.service';

@Component({
  selector: 'app-about-team-two',
  templateUrl: './about-team-two.component.html',
  styleUrls: ['./about-team-two.component.css']
})
export class AboutTeamTwoComponent implements OnInit {

  teamMembers : any

  constructor(private teams:TeamsService) {
    this.teamMembers = this.teams.teamData().slice(12,18)
   }

  ngOnInit(): void {
  }

}
