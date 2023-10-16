import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
// import { AssetsManagementService } from './stakeholders.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-stakeholders',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './stakeholders.component.html',
    styleUrls: ['./stakeholders.component.scss'],
})
export class StakeholdersComponent {
    data: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
    constructor(
        //   private _assetsManagementServicee: AssetsManagementService,
        private _router: Router
    ) {}
    /**
     * On init
     */
    ngOnInit(): void {}
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
    }
}
