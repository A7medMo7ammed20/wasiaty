import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
Component ,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormArray,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { assign } from 'lodash-es';

import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { InsurancesListComponent } from '../insurances-list/insurances-list.component';
import { OverlayRef } from '@angular/cdk/overlay';
import { InsurancesService } from '../insurances.service';
import { Subject, takeUntil , tap , filter, debounceTime } from 'rxjs';
import { data } from 'app/mock-api/wealth-evaluation/data';
import { InsuranceData } from '../insurance.types';
import { DateTime } from 'luxon';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
@Component({
    selector: 'show-detail-detail',
    templateUrl: './show-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        MatButtonModule,
        MatTooltipModule,
        RouterLink,
        MatIconModule,
        NgFor,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        NgClass,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        MatMenuModule,
        TextFieldModule,
        FuseFindByKeyPipe,
        DatePipe,
    ],
})
export class ShowDetailsComponent   implements OnInit, OnDestroy {

    @ViewChild('titleField') private _titleField: ElementRef;

    insurancesForm:UntypedFormGroup ;
    insuranceData:InsuranceData ;
     private _tagsPanelOverlayRef: OverlayRef;
     private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(

        private _formBuilder: UntypedFormBuilder,
        private _insurancesListComponent:InsurancesListComponent ,
        private _insurancesService:InsurancesService ,
        private _changeDetectorRef:ChangeDetectorRef ,


    ) {}
    ngOnInit(): void {


        // Open drawer
        this._insurancesListComponent.matDrawer.open()

        this.insurancesForm = this._formBuilder.group({
            id: [''],
            policyNumber: ['', [Validators.required]],
            companyName:[''],
            insuranceType:[''],
            premiumAmount:[''],
            policyStartDate:[''],
            policyEndDate:[''],
            coverageAmount:[''],
            statusInsurance:[''],
        });


        this._insurancesService.insurance$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data)=>{

                // Get the Debt

            this.insuranceData=data

                // Patch values to the form from the Debt

            this.insurancesForm.patchValue(data , {
                emitEvent:false
            })

                // Mark for check

            this._changeDetectorRef.markForCheck();

        })

        this.updateInsurance();

         }

         updateInsurance()
         {
             // Update insurance when there is a value change on the insurance form
        this.insurancesForm.valueChanges
        .pipe(
            tap((value) => {
                // Update the insurance object
                this.insuranceData = assign(this.insuranceData, value);
            }),
            debounceTime(300),
            takeUntil(this._unsubscribeAll)
        )
        .subscribe((value) => {
            // Update the insurance on the server
            this._insurancesService
                .updateInsurances(value.id, value)
                .subscribe();

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
         }

    /**
     * On destroy
     */
    checkDate(): boolean {
        return (
            DateTime.fromISO(this.insuranceData.policyStartDate.toString()).startOf(
                'day'
                ) < DateTime.now().startOf('day')
                );
            }

            closeDrawer(): Promise<MatDrawerToggleResult> {
                return this._insurancesListComponent.matDrawer.close();
            }
            ngOnDestroy(): void {
                // Unsubscribe from all subscriptions


                // Dispose the overlays if they are still on the DOM
                if (this._tagsPanelOverlayRef) {
                    this._tagsPanelOverlayRef.dispose();
                }

            }


}
