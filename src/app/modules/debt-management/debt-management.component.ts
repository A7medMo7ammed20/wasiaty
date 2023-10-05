import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'debt-management',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './debt-management.component.html',
})
export class DebtManagementComponent {}
