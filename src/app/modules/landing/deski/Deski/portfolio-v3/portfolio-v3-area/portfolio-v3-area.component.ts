import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-portfolio-v3-area',
  templateUrl: './portfolio-v3-area.component.html',
  styleUrls: ['./portfolio-v3-area.component.css']
})
export class PortfolioV3AreaComponent implements OnInit {

  p_items: any;
  isActive = 'all'

  constructor(private portfolioItems:PortfolioDataService) {

   }

   handleItem(category : any){
    this.isActive = category;
    if(category === 'all'){
      this.p_items = this.portfolioItems.portfolioData().slice(14,23)
    }
    else {
      this.p_items = this.portfolioItems.portfolioData().filter((item:any) => item.category === category)
    }
   }


  ngOnInit(): void {
    this.p_items = this.portfolioItems.portfolioData().slice(14,23);
  }

}
