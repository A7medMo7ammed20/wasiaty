import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-short-banner-two',
  templateUrl: './short-banner-two.component.html',
  styleUrls: ['./short-banner-two.component.css']
})
export class ShortBannerTwoComponent implements OnInit {

  @Input () spacing! : boolean;

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
