import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent implements OnInit {

  @Input () img! : string ;
  @Input () index! : number ;

  constructor() { }

  ngOnInit(): void {
  }

}
