import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-tangable-assets',
  standalone: true,
 
  imports   : [CommonModule ,TranslocoModule, RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe],

  templateUrl: './tangable-assets.component.html',
  styleUrls: ['./tangable-assets.component.scss']
})
export class TangableAssetsComponent {

}
