import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-counter',
  templateUrl: './pricing-counter.component.html',
  styleUrls: ['./pricing-counter.component.css']
})
export class PricingCounterComponent implements OnInit {

  counterData = [
    {
      id: 1,
      number:4.3,
      title:'Positive review and counting',
      text:''
    },
    {
      id: 2,
      number:29,
      title:'Subscirber trust on our services',
      text:'k',
      delay:'100'
    },
    {
      id: 3,
      number:73,
      title:'Order complete successfully',
      text:'+',
      delay:'150'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
