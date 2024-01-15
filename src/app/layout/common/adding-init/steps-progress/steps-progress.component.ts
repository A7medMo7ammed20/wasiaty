import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitTriggerService } from 'app/shared/services/submit-trigger.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-steps-progress',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './steps-progress.component.html',
})
export class StepsProgressComponent implements OnInit, OnDestroy {
    @Input() loopCount: number = 1;
    @Input() progress: number = 0;
    @Input() currentStepProgress: number = 0;
    @Input() currentStep: number = 0;
    @Input() getStart: boolean = true;
    @Input() componentProgress: number = 0;
    @Input() addData: any = '';


    @Output() stepProgressBack = new EventEmitter<number>();
    @Output() stepProgressNext = new EventEmitter<number>();
    @Output() stepAddData = new EventEmitter<any>();


    fullProgress: number = 0

    isFormItemSelected = true
    submitedisplay=0;
    private subscription: Subscription;

    constructor(private _submitTriggerService: SubmitTriggerService) {



    }

    ngOnInit() {

        this.initProgress();

    }
    // Public Method

    onNextClick() {
    }

    getNext() {

        this.stepProgressNext.emit(this.currentStepProgress + 1);
        this.componentProgress =
            this.currentStep - 1 < 0 ? 0 : this.currentStep - 1;
        if (this.progress == 100) {
            this.fullProgress = 1

        }

        this._submitTriggerService.triggerFormSubmit();
         ;
        this.submitedisplay++
        if (this.submitedisplay == 2) {
            this.subscription = this._submitTriggerService.selectedForm$.subscribe(selected => {
                this.isFormItemSelected = selected;
            });

        }

    }
    getBack() {
        this.stepProgressBack.emit(
            this.currentStepProgress - 1 < 0 ? 0 : this.currentStepProgress - 1
        );
        this.submitedisplay-2
    }

    initProgress() {
         ;
        this.componentProgress =
            this.currentStep - 1 < 0 ? 0 : this.currentStep - 1;
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
