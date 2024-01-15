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
import { BequestManagementService } from '../bequest-management.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Bequest } from '../bequest-management.types';
import { BequestManagementMockApi } from 'app/mock-api/bequest-management/api';
import { RegisterServiceAPI } from 'app/mock-api/registeration/register.api';

@Component({
    selector: 'bequest-table',
    standalone: true,
    templateUrl: './bequest-table.component.html',
    styleUrls: ['./bequest-table.component.scss'],

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
export class BequestTableComponent implements OnInit, OnDestroy {
    chartNewVsReturning: ApexOptions;

    chartTaskDistribution: ApexOptions = {};

    data: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    dataUser:string[]=[]
    countries: string[] = [];

    /**
     * Constructor
     */
    constructor(
        private _bequestService: BequestManagementService,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router ,
        // private _bequestManagementMockApi:BequestManagementMockApi ,
        private register: RegisterServiceAPI

    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.register.GetCountries('base').subscribe(

            (data) => {

              this.countries = data;
            console.log(this.countries);
        console.log('dddddddddddddddddddddddddddddddddddddddd')

            },
            (error) => {
              console.error('Error fetching countries:', error);
              // Handle error (e.g., show an error message)
            }
          );
        // // Get the data
        this._bequestService.getBequests()
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((data) =>
        {
            // Store the data
            this.data = data;

            // Prepare the chart data


        });

        // this._bequestManagementMockApi.getRegions('base').subscribe((data) => {
        //     this.dataUser = data
        //     console.log(this.dataUser);

        // })

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

    async clickedRows(row: Bequest): Promise<any> {
        // Create the task

        console.log('dddddddddddddddddddddddddddddddddddddddd', row.id)

            let users = await fetch('http://alwasiah-001-site1.btempurl.com/api/user')
              .then((response) => response.json())
            //   .then((json) => console.log(json));
            // .then((json) => json);
            console.log(users);

            this.register.getRegions('base').subscribe((data) => {
                this.dataUser = data
                console.log(this.dataUser);

            })


        this.register.GetCountries('base').subscribe(

            (data) => {

              this.countries = data;
            console.log(this.countries);
        console.log('dddddddddddddddddddddddddddddddddddddddd')

            },
            (error) => {
              console.error('Error fetching countries:', error);
              // Handle error (e.g., show an error message)
            }
          );

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

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
}
