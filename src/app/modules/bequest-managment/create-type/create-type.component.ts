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
import { ActivatedRoute, Router } from '@angular/router';
import { BequestManagementService } from '../bequest-management.service';
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
    bequestForm: FormGroup;

  private submitSub: Subscription;
    @Output() dataSelectedChange = new EventEmitter<any>();
    @Output() beneficiaryNameAdd = new EventEmitter<string>();

    data:any=''
    addData:any
    selectedbequest: any;
    bequestTypes:CheckboxItem[] = []

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private formBuilder: FormBuilder ,
        private sanitizer: DomSanitizer ,
        private _submitTriggerService :SubmitTriggerService ,
        private _checkboxService : BequestManagementService ,
        private _route:ActivatedRoute,
        private _router: Router,

        ) {
        this.bequestForm = this.formBuilder.group({
            bequestType: this.formBuilder.array([], Validators.required)
        });


        // this.addDatabequest(this.data)
      }
    ngOnInit(): void {
        //
        this._route.data.subscribe((data:any) => {
            this.bequestTypes = data.checkbox;
            // Access the checkbox data and perform desired actions
          });

         this.logSelectedbequest(this.addData)
         console.log('ngOnInit',this.selectedbequest)
        //
        this.submitSub = this._submitTriggerService.formSubmitObservable().subscribe(() => {
            // if (this.bequestForm.valid) {

            //   this._submitTriggerService.setFormData(this.selectedbequest);
            // }
          });

    }
    // addDatabequest(data)
    // {
    //     this._submitTriggerService.formSubmit$.subscribe(()=>{
    //         this.submitForm() ;
    //         this.addData = data ;
    //     })
    // }


  ngOnDestroy() {
    this.submitSub.unsubscribe();
    this.addData = this.selectedbequest ;
    console.log('ngOnDestroy' ,this.addData)
  }
logSelectedbequest(selectedbequest)
    {

        if(selectedbequest)
        {
            this.selectedbequest = selectedbequest;

            this._submitTriggerService.setSelectedForm(selectedbequest)

            // let item = this.routeList.filter(
            //     (item) => item.id === step.toString()
            // )[0];
            console.log('selectedbequest',this.selectedbequest)
            this._router.navigate(['./', 'choose-place'], {
                relativeTo: this._route, // Use parent to go up one level
                //relativeTo: this.route.parent, // Use parent to go up one level
            });

        }

    }
    submitForm()
    {



        // console.log(' selectedbequest',this.selectedbequest)

    //    const formData = this.bequestForm.value
       const beneficiaryName = this.selectedbequest
    //    this.beneficiaryNameAdd.emit(beneficiaryName);
        // this._submitTriggerService.triggerFormSubmit(beneficiaryName);
        if (this.bequestForm.valid) {
            const formData = this.bequestForm.value;
            this._submitTriggerService.setFormData(formData);
          }

    }




  get bequestType() {
    return this.bequestForm.get('bequestType');
  }


    getSanitizedIcon(icon: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
}

