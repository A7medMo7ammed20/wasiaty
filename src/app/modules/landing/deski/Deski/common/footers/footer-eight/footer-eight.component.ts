import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-eight',
  templateUrl: './footer-eight.component.html',
  styleUrls: ['./footer-eight.component.css']
})
export class FooterEightComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  date = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
