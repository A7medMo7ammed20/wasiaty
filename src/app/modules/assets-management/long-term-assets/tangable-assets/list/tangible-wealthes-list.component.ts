import { ChangeDetectorRef, Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import {
    CommonModule,
    CurrencyPipe,
    NgClass,
    NgFor,
    NgIf,
} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {
    RouterOutlet,
    RouterModule,
    ActivatedRoute,
    Router,
    NavigationEnd,
} from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { takeUntil, Subject, Observable } from 'rxjs';

import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

import { TangibleWealthMockApi } from 'app/mock-api/wealth-management/tangible-wealth/api';
import { WealthManagementService } from 'app/modules/assets-management/wealth-management.service';
import {
    TangibleWealthes,
    VMTangableWealthes,
    WealthType,
} from 'app/modules/assets-management/wealth-management.types';
import { TangibleWealthService } from '../tangible-wealth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { TangableWealthDetailsComponent } from '../details/details.component';
export interface DialogData {
    animal: string;
    name: string;
  }
@Component({
    selector: 'tangable-assets-ist',
    standalone: true,

    imports: [
        CommonModule,
        TranslocoModule,
        RouterOutlet,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatMenuModule,
        MatTabsModule,
        MatButtonToggleModule,
        NgApexchartsModule,
        NgFor,
        NgIf,
        MatTableModule,
        NgClass,
        CurrencyPipe,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule
    ],

    templateUrl: './tangible-wealthes-list.component.html',
    styleUrls: ['./tangible-wealthes-list.component.scss'],
})

export class TangableWealthListComponent implements OnInit {

    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    isDrawerOpen: boolean = false;
    animal: string;
    name: string;

    Tangables$: Observable<TangibleWealthes[]>;
    realstate: VMTangableWealthes[];
    vehicles: VMTangableWealthes[];
    accountsReceivable: VMTangableWealthes[];
    marketableSecurities: VMTangableWealthes[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    tangableCount: number = 0;
    tangables: TangibleWealthes[];
    average: VMTangableWealthes[];
    outlet: boolean = false;

    // Tangible Type
    tangibleTypes$: Observable<WealthType[]>;
    tangibleTypes: WealthType[];
    constructor(
        private _wealthManagmentService: TangibleWealthService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _activatedRoute: ActivatedRoute ,
        public dialog: MatDialog
    ) {}
    ngOnInit(): void {
        // Get Tangible Types
        this.getTangibleTypes();
        // Get Tangible Type
        this.getTangibles();
    }
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
                console.log('realstate', this.realstate);
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

                console.log('tangible ', this.tangables);
            });
    }
    getTangibleTypes() {
        this.tangibleTypes$ = this._wealthManagmentService.getTangibleTypes();
        this._wealthManagmentService
            .getTangibleTypes()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tangibleTypes: WealthType[]) => {
                this.tangibleTypes = tangibleTypes;
                console.log('tangiblType ', this.tangibleTypes);
            });
    }

    routeToType(type: string): void {
        this.outlet = true;
        this._router.navigate(['./', type], {
            relativeTo: this._activatedRoute,
        });

        console.log('type',type);

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    changeOutlet(): void {
        this.outlet = false;
    }


    addVehicles()
    {
        // this._wealthManagmentService.addVehicles().subscribe((newVehicles)=>
        // {
        //     this._router.navigate(['./', newVehicles.id],{
        //         return
        //     })
        // })

    }
    // Add Tangable Wealth
    addTangableWealth()
    {
        debugger

        const dialogRef = this.dialog.open(TangableWealthDetailsComponent, {
            data: {name: this.name, animal: this.animal},
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
          });
        }

        // this._wealthManagmentService.addTangableWealth().subscribe((newAssetBranch) =>
        // {

        //     // Go to the new Item
        //     this._router.navigate(['./', newAssetBranch.id], {relativeTo: this._activatedRoute});

        //     // Mark for check
        //     this._changeDetectorRef.markForCheck();
        // });

    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }


    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
