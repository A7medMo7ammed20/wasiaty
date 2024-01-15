import { Component, OnInit } from '@angular/core';

import { PortfolioDataService } from '../../services/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-portfolio-v1-area',
  templateUrl: './portfolio-v1-area.component.html',
  styleUrls: ['./portfolio-v1-area.component.css']
})
export class PortfolioV1AreaComponent implements OnInit {

  p_items: any;
  isActive = 'all'

  constructor(private portfolioItems:PortfolioDataService) {

   }

   handleItem(category : any){
    this.isActive = category;
    if(category === 'all'){
      this.p_items = this.portfolioItems.portfolioData().slice(0,8)
    }
    else {
      this.p_items = this.portfolioItems.portfolioData().filter((item:any) => item.category === category)
    }
   }


  ngOnInit(): void {
    this.p_items = this.portfolioItems.portfolioData().slice(0,8);
  }

}
