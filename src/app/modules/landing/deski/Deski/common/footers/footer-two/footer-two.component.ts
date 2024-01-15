import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.css']
})
export class FooterTwoComponent implements OnInit {

  date = new Date().getFullYear();

  @Input () contact! : boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
