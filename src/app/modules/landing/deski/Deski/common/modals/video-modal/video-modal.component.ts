import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {

  @Input () videoUrl! : string ;
  @Input () index! : number ;

  constructor() { }

  ngOnInit(): void {
  }

}
