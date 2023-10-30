import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-steps-progress',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './steps-progress.component.html',
})
export class StepsProgressComponent implements OnInit {
    @Input() loopCount: number = 1;
    @Input() progress: number = 0;
    @Input() currentStepProgress: number = 0;
    @Input() currentStep: number = 0;
    @Input() getStart: boolean = true;
    componentProgress: number = 0;

    @Output() stepProgressBack = new EventEmitter<number>();
    @Output() stepProgressNext = new EventEmitter<number>();

    constructor() {}
    ngOnInit() {
        this.componentProgress =
            this.currentStep - 1 < 0 ? 0 : this.currentStep - 1;
    }
    // Public Method

    getNext() {
        this.stepProgressNext.emit(this.currentStepProgress + 1);
    }
    getBack() {
        this.stepProgressBack.emit(
            this.currentStepProgress - 1 < 0 ? 0 : this.currentStepProgress - 1
        );
    }
}
