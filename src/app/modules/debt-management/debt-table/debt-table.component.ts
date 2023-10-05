import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { debtManagementService } from '../debt-management.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BequestManagementService } from 'app/modules/bequest-managment/bequest-management.service';
import { Debt } from '../debt-management.types';

@Component({
    selector: 'debt-table',
    standalone: true,
    templateUrl: './debt-table.component.html',

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,

    imports: [
        TranslocoModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        NgApexchartsModule,
        NgFor,
        NgIf,
        MatTableModule,
        NgClass,
        CurrencyPipe,
    ],
})
export class DebtTableComponent implements OnInit, OnDestroy {
    data: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    // clickedRows = new Set<Debt>();

    /**
     * Constructor
     */
    constructor(
        private _debtService: debtManagementService,
        private _activatedRoute: ActivatedRoute,

        private _changeDetectorRef: ChangeDetectorRef,

        private _bequestService: BequestManagementService,
        private _router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the data
        this._debtService
            .getdebtsTable()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the data
                this.data = data;
                console.log('data ', this.data.debtDetails);
            });

        // this._bequestService
        //     .getData()
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((data) => {
        //         // Store the data

        //         this.data = data;

        //         // Prepare the chart data
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * clicked Rows  function for table  clickable
     *
     *
     * @param Row
     */

    clickedRows(row: Debt): any {
        // Create the task

        // Go to the new task
        this._router.navigate(['./', row.id], {
            relativeTo: this._activatedRoute,
        });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
