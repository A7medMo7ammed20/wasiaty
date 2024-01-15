import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.css']
})
export class FooterThreeComponent implements OnInit {

  date = new Date().getFullYear();
  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  constructor() { }

  ngOnInit(): void {
  }

}
