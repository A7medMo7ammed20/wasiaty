import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SubmitTriggerService } from 'app/shared/services/submit-trigger.service';
import { ThisReceiver } from '@angular/compiler';
import { StepsProgressComponent } from 'app/layout/common/adding-init/steps-progress/steps-progress.component';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { CheckboxItem } from 'app/shared/types/checkboxes/checkboxes.types';
import { EndowmentsService } from '../endowment.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-create-type',
    standalone: true,
    imports: [CommonModule , StepsProgressComponent ,  ReactiveFormsModule],
    templateUrl: './create-type.component.html',

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
export class CreateTypeComponent  implements OnInit ,  OnDestroy {

    @Input() dataSelected: any;
    endowmentForm: FormGroup;

  private submitSub: Subscription;
    @Output() dataSelectedChange = new EventEmitter<any>();
    @Output() beneficiaryNameAdd = new EventEmitter<string>();

    data:any=''
    addData:any
    selectedEndowment: any;
    endowmentTypes:CheckboxItem[] = []

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private formBuilder: FormBuilder ,
        private sanitizer: DomSanitizer ,
        private _submitTriggerService :SubmitTriggerService ,
        private _checkboxService : EndowmentsService ,
        private _route:ActivatedRoute

        ) {
        this.endowmentForm = this.formBuilder.group({
          endowmentType: this.formBuilder.array([], Validators.required)
        });


        // this.addDataEndowment(this.data)
      }
    ngOnInit(): void {
        //
        this._route.data.subscribe((data:any) => {
            this.endowmentTypes = data.checkbox;
            // Access the checkbox data and perform desired actions
          });

         this.logSelectedEndowment(this.addData)
         console.log('ngOnInit',this.selectedEndowment)
        //
        this.submitSub = this._submitTriggerService.formSubmitObservable().subscribe(() => {
            // if (this.endowmentForm.valid) {

            //   this._submitTriggerService.setFormData(this.selectedEndowment);
            // }
          });

    }
    // addDataEndowment(data)
    // {
    //     this._submitTriggerService.formSubmit$.subscribe(()=>{
    //         this.submitForm() ;
    //         this.addData = data ;
    //     })
    // }


  ngOnDestroy() {
    this.submitSub.unsubscribe();
    this.addData = this.selectedEndowment ;
    console.log('ngOnDestroy' ,this.addData)
  }
logSelectedEndowment(selectedEndowment)
    {

        if(selectedEndowment)
        {
            this.selectedEndowment = selectedEndowment;

            this._submitTriggerService.setSelectedForm(selectedEndowment)

        }

    }
    submitForm()
    {



        // console.log(' selectedendowment',this.selectedendowment)

    //    const formData = this.endowmentForm.value
       const beneficiaryName = this.selectedEndowment
    //    this.beneficiaryNameAdd.emit(beneficiaryName);
        // this._submitTriggerService.triggerFormSubmit(beneficiaryName);
        if (this.endowmentForm.valid) {
            const formData = this.endowmentForm.value;
            this._submitTriggerService.setFormData(formData);
          }

    }




  get endowmentType() {
    return this.endowmentForm.get('endowmentType');
  }


    getSanitizedIcon(icon: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
}

