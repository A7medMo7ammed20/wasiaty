import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrls: ['./counter-two.component.css']
})
export class CounterTwoComponent implements OnInit {

  counterData = [
    {
      id: 1,
      value: 3,
      title: 'Job done successfully',
      text:'k'
    },
    {
      id: 2,
      value: 20,
      title: '3,280 avg rating',
      delay: '100',
      text:'million'
    },
    {
      id: 3,
      value: 3000,
      title: 'Using Deski',
      delay: '200',
      text:'+'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
