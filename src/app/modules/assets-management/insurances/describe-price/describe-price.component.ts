import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateTime } from 'luxon';


@Component({
    selector: 'describe-price',
    standalone: true,
    // imports: [CommonModule],
    imports      : [CommonModule,MatButtonModule, RouterLink, MatIconModule, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TextFieldModule , MatDatepickerModule,
        MatSlideToggleModule ],

    templateUrl: './describe-price.component.html',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('1s', style({ opacity: 1 })),
            ]),
            transition(':leave', [animate('1s', style({ opacity: 0 }))]),
        ]),
    ],
})
export class DescribePriceComponent {

    Premium: number = 500;
    Coverage: number = 493;
    supportForm: UntypedFormGroup;
    @ViewChild('supportNgForm') supportNgForm: NgForm;
    insurancedata:any

    // Constructor() {}
    constructor(
        private sanitizer: DomSanitizer ,
        private _formBuilder: UntypedFormBuilder,
        ) {

        this.supportForm = this._formBuilder.group({
            insuredName   : ['', Validators.required],
            policyNumber  : [''],
            startDate  : [null],
            premiumAmount  : [null],
            endDate  : [null],
            coverageAmount: [''],
            message: ['', Validators.required],
        });

    }

    ngOnInit(): void {
        this.insurancedata = this.supportForm.value

    }
    checkDate(): boolean {
        return (
            DateTime.fromISO(this.insurancedata.startDate.toString()).startOf(
                'day'
            ) < DateTime.now().startOf('day')
        );
    }
    // public method

    IncremntPremium() {
        this.Premium++;
    }
    DecremntPremium() {
        this.Premium--;
    }
    DecremntCoverage() {
        this.Coverage--;
    }
    IncremntCoverage() {
        this.Coverage++;
    }

    clearForm(): void
    {
        // Reset the form
        this.supportNgForm.resetForm();
    }
}
