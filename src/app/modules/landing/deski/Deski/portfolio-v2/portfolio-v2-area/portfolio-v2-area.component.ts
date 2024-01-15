import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data/portfolio-data.service';

@Component({
  selector: 'app-portfolio-v2-area',
  templateUrl: './portfolio-v2-area.component.html',
  styleUrls: ['./portfolio-v2-area.component.css']
})
export class PortfolioV2AreaComponent implements OnInit {

  p_items: any;
  isActive = 'all'

  constructor(private portfolioItems:PortfolioDataService) {

   }

   handleItem(category : any){
    this.isActive = category;
    if(category === 'all'){
      this.p_items = this.portfolioItems.portfolioData().slice(8,14)
    }
    else {
      this.p_items = this.portfolioItems.portfolioData().filter((item:any) => item.category === category)
    }
   }


  ngOnInit(): void {
    this.p_items = this.portfolioItems.portfolioData().slice(8,14);
  }

}
