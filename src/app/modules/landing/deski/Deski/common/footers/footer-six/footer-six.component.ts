import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-six',
  templateUrl: './footer-six.component.html',
  styleUrls: ['./footer-six.component.css']
})
export class FooterSixComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  date = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
