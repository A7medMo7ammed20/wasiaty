import { Component, HostListener, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header-seven',
  templateUrl: './header-seven.component.html',
  styleUrls: ['./header-seven.component.css']
})
export class HeaderSevenComponent implements OnInit {

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



  // constructor(private router : Router) { }

  // public linkClick(fragment : string) : void {
  //   this.router.navigateByUrl('#' + fragment)
  // }

  ngOnInit(): void {
  }

}
