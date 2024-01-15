import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/team-data/teams.service';

@Component({
  selector: 'app-dynamic-team-details',
  templateUrl: './dynamic-team-details.component.html',
  styleUrls: ['./dynamic-team-details.component.css']
})
export class DynamicTeamDetailsComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-dribbble','fa fa-envelope-o']

  id:any
  team:any

  constructor(private route:ActivatedRoute,private teams:TeamsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.team = this.teams.teamData().find(team => team.id == this.id)
  }

}
