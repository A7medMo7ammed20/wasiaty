import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-area-two',
  templateUrl: './pricing-area-two.component.html',
  styleUrls: ['./pricing-area-two.component.css']
})
export class PricingAreaTwoComponent implements OnInit {

  pricing_data = [
    {
      id:1,
      title:'Free Event',
      price: 0,
      class:'pc1',
      skew:'skew-right',
      lists: [
        {list:'<li>60-day chat history</li>'},
        {list:'<li>Basic widget customization</li>'},
        {list:'<li class="disable">Ticketing system</li>'},
        {list:'<li class="disable">Data security</li>'},
      ]
    },
    {
      id:2,
      title:'Pre Day',
      price: 0.32,
      class:'pc2',
      skew:'skew-left',
      lists: [
        {list:'<li>60-day chat history</li>'},
        {list:'<li>Basic widget customization</li>'},
        {list:'<li>Ticketing system</li>'},
        {list:'<li class="disable">Data security</li>'},
      ]
    },
    {
      id:3,
      title:'Pay As You Go',
      price: 0.65,
      class:'pc3',
      skew:'skew-right',
      lists: [
        {list:'<li>60-day chat history</li>'},
        {list:'<li>Basic widget customization</li>'},
        {list:'<li>Ticketing system</li>'},
        {list:'<li>Data security</li>'},
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
