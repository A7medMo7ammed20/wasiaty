import { Component, OnInit,Input } from '@angular/core';
import { TeamsService } from '../../services/team-data/teams.service';

@Component({
  selector: 'app-about-team-three',
  templateUrl: './about-team-three.component.html',
  styleUrls: ['./about-team-three.component.css']
})
export class AboutTeamThreeComponent implements OnInit {

  @Input () team_v2! : boolean;

  teamMembers: any;
  isActive = 'all'

  constructor(private teams:TeamsService) {

   }

   handleItem(category : any){
    this.isActive = category;
    if(category === 'all'){
      this.teamMembers = this.teams.teamData().slice(18,30)
    }
    else {
      this.teamMembers = this.teams.teamData().filter((item:any) => item.category === category)
    }
   }


  ngOnInit(): void {
    this.teamMembers = this.teams.teamData().slice(18,30);
  }

}
