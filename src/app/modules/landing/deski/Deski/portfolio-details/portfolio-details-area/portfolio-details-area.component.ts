import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-details-area',
  templateUrl: './portfolio-details-area.component.html',
  styleUrls: ['./portfolio-details-area.component.css']
})
export class PortfolioDetailsAreaComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  constructor() { }

  ngOnInit(): void {
  }

}
