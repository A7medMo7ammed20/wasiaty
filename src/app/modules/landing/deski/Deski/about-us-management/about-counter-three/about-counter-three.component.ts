import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-about-counter-three',
  templateUrl: './about-counter-three.component.html',
  styleUrls: ['./about-counter-three.component.css']
})
export class AboutCounterThreeComponent implements OnInit {

  @Input () ser_page! : boolean;

  counterData = [
    {
      id: 1,
      value: 1500,
      color: '#FAAA4B',
      title: 'Positive Review',
      subtitle: 'A place to think and track ideas',
      subtitle_2: 'A place to think and <br> track ideas',
      text: '+'
    },
    {
      id: 2,
      value: 200,
      color: '#36C2DB',
      title: 'Branches',
      subtitle: 'A home for your iqu team, best',
      subtitle_2: 'A home for your iqu <br> team, best',
      delay: '100',
      text: '+'
    },
    {
      id: 3,
      value: 2,
      color: '#3DB382',
      title: 'Work Done',
      subtitle: 'Beautiful docs for your APIs, Products',
      subtitle_2: 'Beautiful docs for your <br>APIs, Products',
      delay: '200',
      text: 'k'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
