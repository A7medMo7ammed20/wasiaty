import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';

import { TitleCasePipe, NgFor, NgIf, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
// import { FamiliesMembers, Family, Individual } from '../../stakeholders.types';
// import {FamilyTreeService} from '../family-tree.service' ;
import { FormsModule } from '@angular/forms';
import { FamilyTreeService } from 'app/modules/stakeholders/family-tree/family-tree.service';
import { BeneficiariesService } from 'app/modules/stakeholders/beneficiaries/beneficiaries.service';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import {
  InsuranceData
} from 'app/modules/assets-management/insurances/insurance.types';
import { InsurancesService } from '../insurances.service';
// import { FamilyTreeService } from '../../family-tree.service';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatTableModule,
        TitleCasePipe,
        NgFor,
        NgIf,
        MatSidenavModule,
        FormsModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule,
        RouterOutlet,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatPaginatorModule,
        FuseFindByKeyPipe,
        DatePipe,
    ],

    // standalone     : true,
    // imports: [MatTableModule, MatPaginatorModule, MatIconModule],
})
export class TableComponent implements OnInit {
    displayedColumns: any[] = [
        'companyName',
        'insuranceType',
        'premiumAmount',
        'policyStartDate',
        'statusInsurance',

    ];

    gender = 'before';
    roles: any[];
    data: any;
    insuranceData :InsuranceData[]
    //   @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource = new MatTableDataSource<InsuranceData>();
    // dataSources = new MatTableDataSource<Individual>();

    ngAfterViewInit() {
        this.data.paginator = this.paginator;
    }
    constructor(
        private _matDialog: MatDialog,
       private _insuranceServeice: InsurancesService ,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}
    // clickedRows = new Set<PeriodicElement>();
    ngOnInit(): void {
        // Create the form

        this._insuranceServeice.getInsurancesData()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the data
                this.data = data;
                this.insuranceData = data
                this.dataSource = new MatTableDataSource<InsuranceData>(this.insuranceData);
                this.dataSource.paginator = this.paginator;
                console.log('data Source',this.insuranceData);
            });


        this.roles = [
            {
                label: 'Newest',
                value: 'newest',
            },
            {
                label: 'Deadline',
                value: 'deadline',
            },
        ];
    }

    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    // Add a relationship

    clickedRows(row: InsuranceData): any {
        // Create the task

        // Go to the new task
this._router.navigate(['./', row.id], {
    relativeTo:this._activatedRoute
})
console.log('write id ' , row)



        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
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
