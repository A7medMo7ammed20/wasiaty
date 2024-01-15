import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cooming-soon',
  templateUrl: './cooming-soon.component.html',
  styleUrls: ['./cooming-soon.component.css']
})
export class CoomingSoonComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-pinterest-p','fa fa-linkedin']

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
