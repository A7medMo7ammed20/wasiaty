import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-short-banner',
  templateUrl: './short-banner.component.html',
  styleUrls: ['./short-banner.component.css']
})
export class ShortBannerComponent implements OnInit {

  @Input () pricing! : boolean;

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
