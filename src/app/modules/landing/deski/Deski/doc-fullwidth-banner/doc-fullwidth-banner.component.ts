import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc-fullwidth-banner',
  templateUrl: './doc-fullwidth-banner.component.html',
  styleUrls: ['./doc-fullwidth-banner.component.css']
})
export class DocFullwidthBannerComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
