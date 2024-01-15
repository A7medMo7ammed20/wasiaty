import { Component,OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'deski';

  constructor (private router : Router) {}

  ngOnInit(){
    AOS.init({
      duration:1600
    });

    this.router.events.subscribe((evt) => {
      if(! (evt instanceof NavigationEnd)){
        return
      }
      window.scrollTo(0,0)
    })
  }
}
