import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import {
    CommonModule,
    CurrencyPipe,
    DOCUMENT,
    DatePipe,
    DecimalPipe,
    NgClass,
    NgFor,
    NgIf,
    TitleCasePipe,
} from '@angular/common';
import {
    MatDrawer,
    MatDrawerToggleResult,
    MatSidenavModule,
} from '@angular/material/sidenav';
import { DebtChartComponent } from '../chart/chart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    RouterOutlet,
    RouterLink,
    ActivatedRoute,
    Router,
} from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FuseNavigationService } from '@fuse/components/navigation';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { debtManagementService } from '../debt-management.service';
import { DebtTableComponent } from '../debt-table/debt-table.component';
import { Debt } from '../debt-management.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'list',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        DebtChartComponent,
        DebtTableComponent,
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
    templateUrl: './list.component.html',
})
export class DebtListComponent {
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    drawerMode: 'side' | 'over';
    debts: Debt[];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _debtService: debtManagementService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
    ) {}

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the data
        this._debtService.debts$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data: Debt[]) => {
                // Store the data
                this.debts = data;
            });
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult> {
        return null;
        // return this._DebtManagementComponent.matDrawer.close();
    }

    /**
     * Create task
     *
     * @param type
     */
    createDebt(type: 'Debt'): void {
        console.log('Debt');

        // Create the task
        this._debtService.createdebt(type).subscribe((newDebt) => {
            // Go to the new task
            this._router.navigate(['./', newDebt.id], {
                relativeTo: this._activatedRoute,
            });

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }
}
