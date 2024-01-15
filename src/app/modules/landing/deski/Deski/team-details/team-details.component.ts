import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-dribbble','fa fa-envelope-o']

  constructor() { }

  ngOnInit(): void {
  }

}
