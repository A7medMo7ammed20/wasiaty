import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-tangable-assets',
    standalone: true,

    imports: [CommonModule, RouterOutlet],

    templateUrl: './tangible-wealthes.component.html',
    styleUrls: ['./tangible-wealthes.component.scss'],
})
export class TangableWealthComponent {}
