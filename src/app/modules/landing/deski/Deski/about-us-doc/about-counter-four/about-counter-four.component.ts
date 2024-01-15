import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-counter-four',
  templateUrl: './about-counter-four.component.html',
  styleUrls: ['./about-counter-four.component.css']
})
export class AboutCounterFourComponent implements OnInit {

  counterData = [
    {
      id: 1,
      value: 1500,
      color: '#FAAA4B',
      title: 'Positive Review',
      subtitle_2: 'A place to think and <br> track ideas',
      text: '+'
    },
    {
      id: 2,
      value: 200,
      color: '#36C2DB',
      title: 'Branches',
      subtitle_2: 'A home for your iqu <br> team, best',
      delay: '100',
      text: '+'
    },
    {
      id: 3,
      value: 2,
      color: '#3DB382',
      title: 'Work Done',
      subtitle_2: 'Beautiful docs for your <br>APIs, Products',
      delay: '200',
      text: 'k'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
