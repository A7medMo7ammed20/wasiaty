import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fancy-banner',
  templateUrl: './fancy-banner.component.html',
  styleUrls: ['./fancy-banner.component.css']
})
export class FancyBannerComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
