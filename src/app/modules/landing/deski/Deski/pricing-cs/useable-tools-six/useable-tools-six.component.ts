import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-useable-tools-six',
  templateUrl: './useable-tools-six.component.html',
  styleUrls: ['./useable-tools-six.component.css']
})
export class UseableToolsSixComponent implements OnInit {

  @Input () feature!:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
