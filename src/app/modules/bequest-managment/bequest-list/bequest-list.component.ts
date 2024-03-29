import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    TitleCasePipe,
    NgFor,
    NgIf,
    I18nPluralPipe,
    DOCUMENT,
    CommonModule,
    CurrencyPipe,
    NgClass,
    DecimalPipe,
    DatePipe,
} from '@angular/common';
import {
    ActivatedRoute,
    Router,
    RouterLink,
    RouterOutlet,
} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseNavigationService } from '@fuse/components/navigation';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { BequeqstChartComponent } from '../buquest-chart/bequest-chart.component';
import { BequestTableComponent } from '../bequest-table/bequest-table.component';
import { BequestManagementService } from '../bequest-management.service';

export interface PeriodicElement {
    // position:number
    fullName: string;
    mother: string;
    father: string;
    childrenMale: string;
    childrenFemale: string;
    spouse: string;
    uncle: string;
    grandpa: string;
}

@Component({
    selector: 'app-insurances',
    standalone: true,

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './bequest-list.component.html',

    imports: [
        CommonModule,
        RouterOutlet,
        BequestTableComponent,
        BequeqstChartComponent,
        TranslocoModule,
        MatIconModule,
        MatRippleModule,
        MatMenuModule,
        MatTabsModule,
        MatButtonToggleModule,
        NgApexchartsModule,
        NgIf,
        MatTableModule,
        NgClass,
        CurrencyPipe,
        MatButtonModule,
        MatTooltipModule,
        NgFor,
        DecimalPipe,
        MatSidenavModule,
        RouterLink,
        TitleCasePipe,
        DatePipe,
    ],
})
export class BequestsListComponent {
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    drawerMode: 'side' | 'over';
    data: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _bequestService: BequestManagementService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
    ) {}

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the data

            this._bequestService
            .getBequests()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the data
                this.data = data;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    /**
     * On backdrop clicked
     */
    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Create Bequest
     *
     * @param type
     */
    // createBequest(): void {
    //     this._router.navigate(['./', 'create-bequest'], {
    //         relativeTo: this._activatedRoute,
    //         //  });

    //         // // Mark for check
    //         // this._changeDetectorRef.markForCheck();
    //     });

    // }
    createBequest(type: 'bequest'): void {
        console.log('bequest');

        // Create the task
        this._router.navigate(['./', 'create-bequest'], {
                    relativeTo: this._activatedRoute,
                    //  });

                    // // Mark for check
                    // this._changeDetectorRef.markForCheck();
                });
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
