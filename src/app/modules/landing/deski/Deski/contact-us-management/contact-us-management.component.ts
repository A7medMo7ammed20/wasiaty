import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-management',
  templateUrl: './contact-us-management.component.html',
  styleUrls: ['./contact-us-management.component.css']
})
export class ContactUsManagementComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-pinterest']

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
