import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data/portfolio-data.service';
import SwiperCore, {Navigation } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-portfolio-v4-area',
  templateUrl: './portfolio-v4-area.component.html',
  styleUrls: ['./portfolio-v4-area.component.css']
})
export class PortfolioV4AreaComponent implements OnInit {

  p_items: any;

  constructor(private portfolioItems:PortfolioDataService) {

   }


  ngOnInit(): void {
    this.p_items = this.portfolioItems.portfolioData().slice(23,27);
  }

}
