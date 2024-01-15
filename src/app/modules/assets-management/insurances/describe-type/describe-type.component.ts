import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckboxItem } from 'app/shared/types/checkboxes/checkboxes.types';
import { SubmitTriggerService } from 'app/shared/services/submit-trigger.service';
import { InsurancesService } from '../insurances.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-describe-type',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './describe-type.component.html',
    styleUrls: ['./describe-type.component.scss'],
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
export class DescribeTypeComponent implements OnInit, OnDestroy {

    @Input() dataSelected: any;

    private submitSub: Subscription;

    insuranceForm: FormGroup;
    data: any = ''
    addData: any
    selectedInsurance: any;
    insuranceTypes: CheckboxItem[] = []
    constructor(
        private sanitizer: DomSanitizer,
        private formBuilder: FormBuilder,
        private _submitTriggerService: SubmitTriggerService,
        private _checkboxService: InsurancesService,
        private _route: ActivatedRoute) {

        this.insuranceForm = this.formBuilder.group({
            insuranceType: this.formBuilder.array([], Validators.required)
        });
    }

    ngOnInit(): void {
        this._route.data.subscribe((data: any) => {
            this.insuranceTypes = data.checkbox;
            // Access the checkbox data and perform desired actions
        });

        this.logSelectedEndowment(this.addData)
        console.log('ngOnInit', this.selectedInsurance)
        //
        this.submitSub = this._submitTriggerService.formSubmitObservable().subscribe(() => {
            // if (this.endowmentForm.valid) {

            //   this._submitTriggerService.setFormData(this.selectedEndowment);
            // }
        });
    }


    logSelectedEndowment(selectedEndowment) {

        if (selectedEndowment) {
            this.selectedInsurance = selectedEndowment;

            this._submitTriggerService.setSelectedForm(selectedEndowment)

        }

    }
    submitForm() {



        // console.log(' selectedendowment',this.selectedendowment)

        //    const formData = this.endowmentForm.value
        const beneficiaryName = this.selectedInsurance
        //    this.beneficiaryNameAdd.emit(beneficiaryName);
        // this._submitTriggerService.triggerFormSubmit(beneficiaryName);
        if (this.insuranceForm.valid) {
            const formData = this.insuranceForm.value;
            this._submitTriggerService.setFormData(formData);
        }

    }
    get endowmentType() {
        return this.insuranceForm.get('endowmentType');
    }



    ngOnDestroy(): void {
        this.submitSub.unsubscribe();
        this.addData = this.selectedInsurance;
        console.log('ngOnDestroy', this.addData)
    }
    getSanitizedIcon(icon: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(icon);
    }

}
