import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-one',
  templateUrl: './pricing-one.component.html',
  styleUrls: ['./pricing-one.component.css']
})
export class PricingOneComponent implements OnInit {

  pricingMonthly = [
    {
      id:1,
      pack_name:'Single',
      pack_details:'For individuals and teams',
      bg_color:"#FFF7EB",
      price:'8',
      info_span:'For team, monthly',
      info_em:'with unlimited email',
      feature:[
        {
          id:1,
          text:'Unlimited Email'
        },
        {
          id:2,
          text:'5gb Hosting'
        },
        {
          id:3,
          text:'2 website 3 sub domain'
        },
        {
          id:4,
          text:'Email & Live chat'
        },
        {
          id:5,
          text:'Backling'
        },
        {
          id:6,
          text:'Discount Programe'
        },
      ]
    },
    {
      id:2,
      pack_name:'Team',
      active:true,
      pack_details:'For individuals and teams',
      bg_color:"#E2F2FD",
      price:'12',
      info_span:'For team, monthly',
      info_em:'team with 8 users',
      delay:'100',
      feature:[
        {
          id:1,
          text:'Unlimited Email'
        },
        {
          id:2,
          text:'5gb Hosting'
        },
        {
          id:3,
          text:'2 website 3 sub domain'
        },
        {
          id:4,
          text:'Email & Live chat'
        },
        {
          id:5,
          text:'Backling'
        },
        {
          id:6,
          text:'Discount Programe'
        },
      ]
    },
    {
      id:3,
      pack_name:'Business',
      pack_details:'For individuals and teams',
      bg_color:"#FFEBEB",
      price:'37',
      info_span:'All users, monthly',
      info_em:'for unlimited users',
      delay:'200',
      feature:[
        {
          id:1,
          text:'Unlimited Email'
        },
        {
          id:2,
          text:'5gb Hosting'
        },
        {
          id:3,
          text:'2 website 3 sub domain'
        },
        {
          id:4,
          text:'Email & Live chat'
        },
        {
          id:5,
          text:'Backling'
        },
        {
          id:6,
          text:'Discount Programe'
        },
      ]
    },
  ]

  pricingYearly = [
    {
      id:1,
      pack_name:'Single',
      pack_details:'For individuals and teams',
      bg_color:"#FFF7EB",
      price:'90',
      info_span:'Per editor, yearly',
      info_em:'with unlimited email',
      feature:[
        {
          id:1,
          text:'Unlimited Email'
        },
        {
          id:2,
          text:'5gb Hosting'
        },
        {
          id:3,
          text:'2 website 3 sub domain'
        },
        {
          id:4,
          text:'Email & Live chat'
        },
        {
          id:5,
          text:'Backling'
        },
        {
          id:6,
          text:'Discount Programe'
        },
      ]
    },
    {
      id:2,
      pack_name:'Team',
      active:true,
      pack_details:'For individuals and teams',
      bg_color:"#E2F2FD",
      price:'125',
      info_span:'For team, yearly',
      info_em:'team with 8 users',
      delay:'100',
      feature:[
        {
          id:1,
          text:'Unlimited Email'
        },
        {
          id:2,
          text:'5gb Hosting'
        },
        {
          id:3,
          text:'2 website 3 sub domain'
        },
        {
          id:4,
          text:'Email & Live chat'
        },
        {
          id:5,
          text:'Backling'
        },
        {
          id:6,
          text:'Discount Programe'
        },
      ]
    },
    {
      id:3,
      pack_name:'Business',
      pack_details:'For individuals and teams',
      bg_color:"#FFEBEB",
      price:'370',
      info_span:'All users, yearly',
      info_em:'for unlimited users',
      delay:'200',
      feature:[
        {
          id:1,
          text:'Unlimited Email'
        },
        {
          id:2,
          text:'5gb Hosting'
        },
        {
          id:3,
          text:'2 website 3 sub domain'
        },
        {
          id:4,
          text:'Email & Live chat'
        },
        {
          id:5,
          text:'Backling'
        },
        {
          id:6,
          text:'Discount Programe'
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
