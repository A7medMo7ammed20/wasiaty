import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation } from "swiper";

SwiperCore.use([Navigation]);

import { TeamsService } from '../../services/team-data/teams.service';

@Component({
  selector: 'app-about-team-four',
  templateUrl: './about-team-four.component.html',
  styleUrls: ['./about-team-four.component.css']
})
export class AboutTeamFourComponent implements OnInit {

  teamMembers: any;
  constructor(private teams:TeamsService) {
    this.teamMembers = this.teams.teamData().slice(0,6)
  }

  ngOnInit(): void {
  }

}
