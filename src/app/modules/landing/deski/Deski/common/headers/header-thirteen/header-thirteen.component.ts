import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-thirteen',
  templateUrl: './header-thirteen.component.html',
  styleUrls: ['./header-thirteen.component.css']
})
export class HeaderThirteenComponent implements OnInit {

  headerSticky : boolean = false;
  menuActive : boolean = false;
   // sticky nav
   @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleNavToggle
  handleNavToggle () {
    this.menuActive = !this.menuActive
  }

  constructor() { }

  ngOnInit(): void {
  }

}