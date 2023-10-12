import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
// import { WealthManagementService } from '../../../wealth-management.service';
import { WealthManagementService } from 'app/modules/assets-management/wealth-management.service';
import {takeUntil , Subject, Observable} from 'rxjs'
// import { TangableWealthes, VMTangableWealthes } from '../../../wealth-management.types';
import { TangibleWealthes, VMTangableWealthes } from 'app/modules/assets-management/wealth-management.types';
import { forEach } from 'lodash';
@Component({
  selector: 'app-tangable-assets',
  standalone: true,

  imports   : [
    CommonModule ,
    TranslocoModule,
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    NgClass,
    NgApexchartsModule,
    MatButtonToggleModule,
    NgFor,
    NgIf,
    MatTableModule,
    CurrencyPipe],

  templateUrl: './real-state-properties.component.html',

})
export class  RealStatePropertiesComponent implements OnInit {
    Tangables$: Observable<TangibleWealthes[]>;
    realstate: VMTangableWealthes[];
    vehicles :VMTangableWealthes[];
    accountsReceivable :VMTangableWealthes[] ;
    marketableSecurities :VMTangableWealthes[] ;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    tangableCount: number = 0;
    tangables: TangibleWealthes[];
    average:VMTangableWealthes[];

    constructor(
        private _wealthManagmentService : WealthManagementService ,
        private _changeDetectorRef: ChangeDetectorRef,

    )
    {

    }
    ngOnInit(): void
     {

        this.Tangables$ = this._wealthManagmentService.getTangableWealth();
        this._wealthManagmentService.getTangableWealth()
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((tangable:TangibleWealthes[])=>
        {
            this.tangableCount=tangable.length ;
            let test =tangable ;
            this.tangables =tangable
                // debugger;
            this.realstate=this.tangables.filter(wealth=>wealth.wealthType ==1);
            console.log('realstate',this.realstate)
            this.realstate.forEach(ver=>ver.avg=ver.acquisitionValue/this.realstate.length);
                ////////////////// vehicles
            this.vehicles = this.tangables.filter(wealth=>wealth.wealthType==2);
            this.vehicles.forEach(ver =>ver.avg= ver.acquisitionValue/this.vehicles.length) ;
            ///////////////////////////// Accounts receivable
            this.accountsReceivable = tangable.filter(account => account.wealthType==3) ;
            this.accountsReceivable.forEach(ver => ver.avg = ver.acquisitionValue/this.accountsReceivable.length)
            /////marketableSecurities
            this.marketableSecurities = tangable.filter(marketable => marketable.wealthType==4) ;
            this.marketableSecurities.forEach(mark => mark.avg = mark.acquisitionValue/this.marketableSecurities.length)
            ///
            this.average = tangable;
            this.average.forEach(aver=> aver.avg = aver.acquisitionValue/this.average.length)
           this._changeDetectorRef.markForCheck();


        })



    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

}
