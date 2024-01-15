import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDataService } from '../services/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-dynamic-p-details',
  templateUrl: './dynamic-p-details.component.html',
  styleUrls: ['./dynamic-p-details.component.css']
})
export class DynamicPDetailsComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  id:any
  item:any

  constructor(private route:ActivatedRoute,private portfolioItems:PortfolioDataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.portfolioItems.portfolioData().find(item => item.id == this.id)
  }

}
