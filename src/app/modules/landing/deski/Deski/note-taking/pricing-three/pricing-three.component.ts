import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-three',
  templateUrl: './pricing-three.component.html',
  styleUrls: ['./pricing-three.component.css']
})
export class PricingThreeComponent implements OnInit {

  pricingMonthly = [
    {
      id:1,
      pack_name:'Basic',
      pack_details:'TAKE GREAT NOTES',
      bg_color:"#E3F8EF",
      price:'Free',
      feature:[
        {
          id:1,
          text:'Sync up to 2 devices'
        },
        {
          id:2,
          text:'Find notes fast with search'
        },
        {
          id:3,
          text:'and tags'
        },
        {
          id:4,
          text:'Clip web pages'
        },
        {
          id:5,
          text:'25MB maximum note'
        },
        {
          id:6,
          text:'60MB monthly upload limit'
        },
      ]
    },
    {
      id:2,
      pack_name:'Reguler',
      active:true,
      pack_details:'BE MORE PRODUCTIVE',
      bg_color:"#E3F8EF",
      price:'8.99',
      delay:'100',
      feature:[
        {
          id:1,
          text:'Sync up to 2 devices'
        },
        {
          id:2,
          text:'Find notes fast with search'
        },
        {
          id:3,
          text:'and tags'
        },
        {
          id:4,
          text:'Apply rich formatting'
        },
        {
          id:5,
          text:'Clip web pages'
        },
        {
          id:6,
          text:'25MB maximum note size'
        },
        {
          id:7,
          text:'Access notes offline'
        },
        {
          id:8,
          text:'10GBmonthly upload limit'
        },
        {
          id:9,
          text:'Annotate PDFs'
        },
      ]
    },
    {
      id:3,
      pack_name:'Business',
      pack_details:'Get more with team',
      bg_color:"#FBF3E5",
      price:'17.99',
      delay:'200',
      feature:[
        {
          id:1,
          text:'Everthing is premium'
        },
        {
          id:2,
          text:'Find notes fast with search'
        },
        {
          id:3,
          text:'and tags'
        },
        {
          id:4,
          text:'Apply rich formatting'
        },
        {
          id:5,
          text:'Clip web pages'
        },
        {
          id:6,
          text:'25MB maximum note'
        },
        {
          id:7,
          text:'Access notes offline'
        },
        {
          id:8,
          text:'18GB monthly upload limit'
        },
      ]
    },
  ]

  pricingYearly = [
    {
      id:1,
      pack_name:'Basic',
      pack_details:'TAKE GREAT NOTES',
      bg_color:"#E3F8EF",
      price:'Free',
      feature:[
        {
          id:1,
          text:'Sync up to 2 devices'
        },
        {
          id:2,
          text:'Find notes fast with search'
        },
        {
          id:3,
          text:'and tags'
        },
        {
          id:4,
          text:'Clip web pages'
        },
        {
          id:5,
          text:'25MB maximum note'
        },
        {
          id:6,
          text:'60MB monthly upload limit'
        },
      ]
    },
    {
      id:2,
      pack_name:'Reguler',
      active:true,
      pack_details:'BE MORE PRODUCTIVE',
      bg_color:"#E3F8EF",
      price:'68.99',
      delay:'100',
      feature:[
        {
          id:1,
          text:'Sync up to 2 devices'
        },
        {
          id:2,
          text:'Find notes fast with search'
        },
        {
          id:3,
          text:'and tags'
        },
        {
          id:4,
          text:'Apply rich formatting'
        },
        {
          id:5,
          text:'Clip web pages'
        },
        {
          id:6,
          text:'25MB maximum note size'
        },
        {
          id:7,
          text:'Access notes offline'
        },
        {
          id:8,
          text:'10GBmonthly upload limit'
        },
        {
          id:9,
          text:'Annotate PDFs'
        },
      ]
    },
    {
      id:3,
      pack_name:'Business',
      pack_details:'Get more with team',
      bg_color:"#FBF3E5",
      price:'189.99',
      delay:'200',
      feature:[
        {
          id:1,
          text:'Everthing is premium'
        },
        {
          id:2,
          text:'Find notes fast with search'
        },
        {
          id:3,
          text:'and tags'
        },
        {
          id:4,
          text:'Apply rich formatting'
        },
        {
          id:5,
          text:'Clip web pages'
        },
        {
          id:6,
          text:'25MB maximum note'
        },
        {
          id:7,
          text:'Access notes offline'
        },
        {
          id:8,
          text:'18GB monthly upload limit'
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
