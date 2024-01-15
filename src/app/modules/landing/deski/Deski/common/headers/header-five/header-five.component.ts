import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-five',
  templateUrl: './header-five.component.html',
  styleUrls: ['./header-five.component.css']
})
export class HeaderFiveComponent implements OnInit {

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
