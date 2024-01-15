import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-faq-hero-area',
  templateUrl: './faq-hero-area.component.html',
  styleUrls: ['./faq-hero-area.component.css']
})
export class FaqHeroAreaComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
