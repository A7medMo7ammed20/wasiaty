import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-current-assets',
  standalone: true,
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.scss'],
  
  imports   : [CommonModule ,TranslocoModule, RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe],

})
export class CurrentAssetsComponent {


  outlet:boolean=false;

  constructor(private router: Router) { }


  ngOnInit(): void { }


navigateToComponent() {
 this.outlet=!this.outlet;
 console.log(this.outlet)
  this.router.navigate(['/assets-management/current-assets/current-detail']);
}
  

  
}
