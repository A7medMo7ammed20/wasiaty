import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-short-banner-three',
  templateUrl: './short-banner-three.component.html',
  styleUrls: ['./short-banner-three.component.css']
})
export class ShortBannerThreeComponent implements OnInit {

  @Input () about! : boolean ;
  @Input () pricing! : boolean ;
  @Input () contact! : boolean ;
  @Input () feature_cs! : boolean ;

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
