import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-five',
  templateUrl: './footer-five.component.html',
  styleUrls: ['./footer-five.component.css']
})
export class FooterFiveComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  date = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
