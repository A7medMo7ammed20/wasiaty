import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingData = [
    {
      id:1,
      title:'Free Event',
      price:0,
      list:'<li>60-day chat history</li>	<li>Basic widget customization</li><li class="disable">Ticketing system</li><li class="disable">Data security</li>',
    },
    {
      id:2,
      title:'Pre Day',
      price:0.32,
      list:'<li>60-day chat history</li>	<li>Basic widget customization</li><li>Ticketing system</li><li class="disable">Data security</li>',
      delay:100
    },
    {
      id:3,
      title:'Pay As You Go',
      price:0.65,
      list:'<li>60-day chat history</li>	<li>Basic widget customization</li> <li>Ticketing system</li><li >Data security</li>',
      delay:200
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
