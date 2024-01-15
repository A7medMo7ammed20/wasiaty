import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-six',
  templateUrl: './pricing-six.component.html',
  styleUrls: ['./pricing-six.component.css']
})
export class PricingSixComponent implements OnInit {

  pricingData = [
    {
      id:1,
      pack_name:'Reguler',
      price:23.00,
      info:'Analyze performance and do more with your data',
      list_items : [
        {id:1,text:'Unlimited Email'},
        {id:2,text:'5gb Hosting '},
        {id:3,text:'2 website 3 sub domain'},
        {id:4,text:'Email &amp; Live chat'},
        {id:5,text:'Backling'},
        {id:6,text:'Discount Programe'},
      ]
    },
     {
      id:2,
      pack_name:'Standard',
      price:47.00,
      info:'Analyze performance and do more with your data',
      delay:'100',
      list_items : [
        {id:1,text:'Unlimited Email'},
        {id:2,text:'5gb Hosting '},
        {id:3,text:'2 website 3 sub domain'},
        {id:4,text:'Email &amp; Live chat'},
        {id:5,text:'Backling'},
        {id:6,text:'Discount Programe'},
      ]
    },
     {
      id:3,
      pack_name:'Business',
      price:89.00,
      info:'Analyze performance and do more with your data',
      delay:'200',
      list_items : [
        {id:1,text:'Unlimited Email'},
        {id:2,text:'5gb Hosting '},
        {id:3,text:'2 website 3 sub domain'},
        {id:4,text:'Email &amp; Live chat'},
        {id:5,text:'Backling'},
        {id:6,text:'Discount Programe'},
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
