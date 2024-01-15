import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc-box-banner',
  templateUrl: './doc-box-banner.component.html',
  styleUrls: ['./doc-box-banner.component.css']
})
export class DocBoxBannerComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
