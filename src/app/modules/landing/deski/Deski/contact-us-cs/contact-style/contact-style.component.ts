import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-style',
  templateUrl: './contact-style.component.html',
  styleUrls: ['./contact-style.component.css']
})
export class ContactStyleComponent implements OnInit {

  @Input () contact_doc! : boolean;
  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-pinterest']

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
