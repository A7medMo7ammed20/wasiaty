import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-banner-three',
  templateUrl: './hero-banner-three.component.html',
  styleUrls: ['./hero-banner-three.component.css']
})
export class HeroBannerThreeComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
