import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-nine',
  templateUrl: './footer-nine.component.html',
  styleUrls: ['./footer-nine.component.css']
})
export class FooterNineComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  constructor() { }

  ngOnInit(): void {
  }

}
