import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-fourteen',
  templateUrl: './header-fourteen.component.html',
  styleUrls: ['./header-fourteen.component.css']
})
export class HeaderFourteenComponent implements OnInit {

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
