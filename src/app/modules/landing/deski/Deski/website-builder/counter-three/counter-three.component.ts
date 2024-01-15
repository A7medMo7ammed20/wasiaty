import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-counter-three',
  templateUrl: './counter-three.component.html',
  styleUrls: ['./counter-three.component.css']
})
export class CounterThreeComponent implements OnInit {

  @Input () ser_v3! : boolean;

  counterData = [
    {
      id: 1,
      bg_color:'#25E5DA',
      number:13,
      title:'Job done successfully',
      text:'k'
    },
    {
      id: 2,
      bg_color:'#FF36AF',
      number:20,
      title:'3280 avg rating',
      text:'million',
      delay:'100'
    },
    {
      id: 3,
      bg_color:'#FFB13A',
      number:3000,
      title:'using Deski',
      text:'+',
      delay:'150'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
