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
import { Observable, Subject, takeUntil } from 'rxjs';
// import { FamiliesMembers, Family, Individual } from '../../stakeholders.types';
// import {FamilyTreeService} from '../family-tree.service' ;
import { FormsModule } from '@angular/forms';
import { FamilyTreeService } from 'app/modules/stakeholders/family-tree/family-tree.service';
import { BeneficiariesService } from 'app/modules/stakeholders/beneficiaries/beneficiaries.service';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import {
    Family,
    Individual,
    FamiliesMembers,
} from 'app/modules/stakeholders/stakeholders.types';
import { EndowmentsService } from '../endowment.service';
import { Endowment, VMEndowment } from '../endowment.types';
import { TangibleWealthes, VMTangableWealthes, WealthType } from '../../wealth-management.types';
import { WealthManagementService } from '../../wealth-management.service';
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
    displayedColumns: string[] = [
        'Endowmentname',
        'Amount',
        'donationDate',
        'Beneficiary'
    ];

    gender = 'before';
    roles: any[];
    data: Endowment[];
    //   @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;
    // members: Endowment[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource = new MatTableDataSource<Endowment>();
    endowmentData:VMEndowment[] | null;
    //////beneficiarirs
    beneficiariesdataSources = new MatTableDataSource<Individual>();
    beneficiaries: Individual[];
    // beneficiarirs:Individual[];

    //////Tangible
    Tangables$: Observable<TangibleWealthes[]>;
    tangableCount: number = 0;
    tangables: TangibleWealthes[];
    realstate: VMTangableWealthes[];
    vehicles: VMTangableWealthes[];
    accountsReceivable: VMTangableWealthes[];
    marketableSecurities: VMTangableWealthes[];
    // private _unsubscribeAll: Subject<any> = new Subject<any>();
    average: VMTangableWealthes[];
    outlet: boolean = false;
// Tangible Type
tangibleTypes$: Observable<WealthType[]>;
tangibleTypes: WealthType[];

    ngAfterViewInit() {
        // this.data.paginator = this.paginator;
    }
    constructor(
        private _matDialog: MatDialog,
        private _endowmentsService:EndowmentsService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef ,

        //////
        private _beneficiariesService :BeneficiariesService ,

        //////
        private _wealthManagmentService: WealthManagementService,

    ) {}
    // clickedRows = new Set<PeriodicElement>();
    ngOnInit(): void {
        // Create the form

        //  Get beneficiaries

        this.getbeneficiaries();

            // Get Tangible Types
            this.getTangibleTypes();
            // Get Tangible Type
            this.getTangibles();


            // Get Endowment

            this._endowmentsService
                .getEndowments()
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((data) => {
                    // Store the data

                    this.data = data ;
                    // debugger;
                    this.beneficiaries.forEach(beneficiary=>{
                        this.data.filter((data)=>{

                        if( data.beneficiaryId == beneficiary.id){

                            if(this.endowmentData){
                                this.endowmentData?.push({...data , beneficiaryName:beneficiary.name , wealthName:'' });
                            }else{
                                this.endowmentData=[{...data , beneficiaryName:beneficiary.name , wealthName:'' }];
                            }
                        }
                        })

                    });




                    this.dataSource = new MatTableDataSource<Endowment>(this.endowmentData);
                    this.dataSource.paginator = this.paginator;
                // this.endowmentData

                    // console.log('data Source',this.dataSource);
                });
                // this.realstate = this.tangables.filter(
                //     (wealth) => wealth.wealthType == 1
                // );

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


    // Get Tangible

    getTangibles() {
        this.Tangables$ = this._wealthManagmentService.getTangableWealth();
        this._wealthManagmentService
            .getTangableWealth()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tangable: TangibleWealthes[]) => {
                this.tangableCount = tangable.length;
                let test = tangable;
                this.tangables = tangable;

                //Real state
                this.realstate = this.tangables.filter(
                    (wealth) => wealth.wealthType == 1
                );
                // console.log('realstate', this.realstate);
                this.realstate.forEach((ver) => {
                    ver.avg = ver.acquisitionValue / this.realstate.length;

                    // if (ver) {
                    //     let type = this.tangibleTypes.find(
                    //         (type) => type.id == ver.wealthType
                    //     );
                    // if (ver) {
                    //     let type = this.tangibleTypes.find(
                    //         (type) => type.id == ver.wealthType
                    //     );

                    //     ver.typeRoute = type.wealthTypeRoute;
                    // }
                    //     ver.typeRoute = type.wealthTypeRoute;
                    // }
                });
                ////////////////// vehicles
                this.vehicles = this.tangables.filter(
                    (wealth) => wealth.wealthType == 2
                );
                this.vehicles.forEach((ver) => {
                    ver.avg = ver.acquisitionValue / this.vehicles.length;
                    if (ver) {
                        let type =
                            this.tangibleTypes.find(
                                (type) => type.id == ver.wealthType
                            ) || null;
                        if (type) {
                            ver.typeRoute = type.wealthTypeRoute;
                        }
                    }
                });
                ///////////////////////////// Accounts receivable
                this.accountsReceivable = tangable.filter(
                    (account) => account.wealthType == 3
                );
                this.accountsReceivable.forEach((ver) => {
                    ver.avg =
                        ver.acquisitionValue / this.accountsReceivable.length;

                    if (ver) {
                        let type =
                            this.tangibleTypes.find(
                                (type) => type.id == ver.wealthType
                            ) || null;
                        if (type) {
                            ver.typeRoute = type.wealthTypeRoute;
                        }
                    }
                });
                /////marketableSecurities
                this.marketableSecurities = tangable.filter(
                    (marketable) => marketable.wealthType == 4
                );
                this.marketableSecurities.forEach((mark) => {
                    mark.avg =
                        mark.acquisitionValue /
                        this.marketableSecurities.length;
                    if (mark) {
                        let type =
                            this.tangibleTypes.find(
                                (type) => type.id == mark.wealthType
                            ) || null;
                        if (type) {
                            mark.typeRoute = type.wealthTypeRoute;
                        }
                    }
                });

                ///
                this.average = tangable;
                this.average.forEach((aver) => {
                    aver.avg = aver.acquisitionValue / this.average.length;
                    if (aver) {
                        let type =
                            this.tangibleTypes.find(
                                (type) => type.id == aver.wealthType
                            ) || null;
                        if (type) {
                            aver.typeRoute = type.wealthTypeRoute;
                        }
                    }
                });
                this._changeDetectorRef.markForCheck();

                // console.log('tangible ', this.tangables);
            });
    }


    getTangibleTypes() {
        this.tangibleTypes$ = this._wealthManagmentService.getTangibleTypes();
        this._wealthManagmentService
            .getTangibleTypes()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tangibleTypes: WealthType[]) => {
                this.tangibleTypes = tangibleTypes;
                // console.log('tangiblType ', this.tangibleTypes);
            });
    }

    getbeneficiaries(){
        this._beneficiariesService
        .getIndividuals()
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((individuals) => {
            this.beneficiaries=individuals;
                 this.beneficiaries.filter((beneficiar)=>{
                    return beneficiar.tags.includes("cbde2486-5033-4e09-838e-e901b108cd41")
                }) ;
                // this.beneficiariesdataSources = new MatTableDataSource<Individual>(this.beneficiarirs);
                // Store the data
                // this.data = individuals;
                // this.beneficiariesdataSources.paginator = this.paginator;
                // console.log('individuals' , this.beneficiaries)
            });

    }
    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    // Add a relationship

    clickedRows(row: VMEndowment ): any {
        // Create the task

        // Go to the new task
        this._router.navigate(['./', row.id ], {
            relativeTo: this._activatedRoute,

        });
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
