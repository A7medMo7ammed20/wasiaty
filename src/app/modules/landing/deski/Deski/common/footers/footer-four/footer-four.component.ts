import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-four',
  templateUrl: './footer-four.component.html',
  styleUrls: ['./footer-four.component.css']
})
export class FooterFourComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  date = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
