import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer-seven',
  templateUrl: './footer-seven.component.html',
  styleUrls: ['./footer-seven.component.css']
})
export class FooterSevenComponent implements OnInit {

  @Input () black_btn! : Boolean ;
  @Input () dark_bg! : Boolean ;

  date = new Date().getFullYear();

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin']

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
