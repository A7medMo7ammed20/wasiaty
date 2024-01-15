import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AddingInitComponent } from 'app/layout/common/adding-init/adding-init.component';
import { StepsProgressComponent } from 'app/layout/common/adding-init/steps-progress/steps-progress.component';
import { StepsHeaderComponent } from 'app/layout/common/adding-init/steps-header/steps-header.component';
import { Steps, RouteList } from 'app/shared/types/step.types';
// import { RouteList, Steps } from '../insurance.types';

@Component({
    selector: 'insurances-detail',
    templateUrl: './insurances-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        RouterOutlet,
        AddingInitComponent,
        StepsProgressComponent,
        StepsHeaderComponent,
    ],
})
export class InsurancesDetailComponent implements OnInit, OnDestroy {
    currentStep = 0;
    currentStepProgress = 0;
    progress = 0;
    loopCount = 1;
    data: Steps | null;
    getStart: boolean = true;

    routeList: RouteList[] = [
        {
            id: '0',
            route: '',
            progress: 0,
            currentStep: 0,
        },
        {
            id: '1',
            route: 'Insurance-type',
            progress: 0,
            currentStep: 0,
        },
        {
            id: '2',
            route: 'describe-type',
            progress: 30,
            currentStep: 1,
        },
        
        {
            id: '3',
            route: 'step-two',
            progress: 100,
            currentStep: 1,
        },
        {
            id: '4',
            route: 'describe-price',
            progress: 60,
            currentStep: 1,
        },
    ];

    // steps: [
    //     {
    //         id: '0';
    //         route: '';
    //     }
    // ];

    /**
     * Constructor
     */
    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Access the resolved data using ActivatedRoute
        this.route.data.subscribe((data) => {
            this.data = data.steps; // This will contain the resolved steps data
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    changeProgressNext(step) {
         ;
        let item = this.routeList.filter(
            (item) => item.id === step.toString()
        )[0];
        this.changeStepsSeparteion(step);

        this._router.navigate(['./', item.route], {
            relativeTo: this.route, // Use parent to go up one level
            //relativeTo: this.route.parent, // Use parent to go up one level
        });
        this._changeDetectorRef.markForCheck();
        this.progress = item.progress;
        this.currentStep = item.currentStep;
        this.loopCount = this.data.steps.length;

        this.currentStepProgress++;
    }
    changeProgressBack(step) {
         ;
        let backStep = step <= 0 ? 0 : step - 1;
        let item = this.routeList.filter(
            (item) => item.id === step.toString()
        )[0];

        this.currentStep = item.currentStep;

        this.progress = item.progress;

        this.loopCount = this.data.steps.length;

        this.changeStepsSeparteion(step);
        if (step == 0) {
            this._router.navigate(['./'], {
                relativeTo: this.route, // Use parent to go up one level
                //relativeTo: this.route.parent, // Use parent to go up one level
            });
            this.loopCount = 1;
        } else {
            this._router.navigate(['./', item.route], {
                relativeTo: this.route, // Use parent to go up one level
                //relativeTo: this.route.parent, // Use parent to go up one level
            });
        }
        this._changeDetectorRef.markForCheck();

        step <= 0 ? (this.currentStepProgress = 0) : this.currentStepProgress--;
    }

    changeStepsSeparteion(currentStep) {
        if (currentStep == 0) {
            this.getStart = true;
        } else {
            this.getStart = false;
        }
    }
}
