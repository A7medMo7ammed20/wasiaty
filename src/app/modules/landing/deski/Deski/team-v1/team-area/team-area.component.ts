import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/team-data/teams.service';

@Component({
  selector: 'app-team-area',
  templateUrl: './team-area.component.html',
  styleUrls: ['./team-area.component.css']
})
export class TeamAreaComponent implements OnInit {

  teamMembers:any

  constructor(private teams:TeamsService) {
    this.teamMembers = this.teams.teamData().slice(0,6)
  }

  ngOnInit(): void {
  }

}
