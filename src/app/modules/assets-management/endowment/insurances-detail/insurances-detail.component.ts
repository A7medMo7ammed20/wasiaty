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
import { RouteList, Steps } from '../insurance.types';

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
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    @ViewChild('tagsPanel') private _tagsPanel: TemplateRef<any>;
    @ViewChild('tagsPanelOrigin') private _tagsPanelOrigin: ElementRef;

    currentStep = 0;
    stepCount = 1;
    data: Steps | null;
    getStart: boolean = true;

    routeList: RouteList[] = [
        {
            id: '0',
            route: '',
        },
        {
            id: '1',
            route: 'endowment-type',
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
        debugger;
        let link = this.routeList.filter(
            (item) => item.id === step.toString()
        )[0];
        this.changeStepsSeparteion(step);

        this._router.navigate(['./', link.route], {
            relativeTo: this.route, // Use parent to go up one level
            //relativeTo: this.route.parent, // Use parent to go up one level
        });
        this._changeDetectorRef.markForCheck();

        this.stepCount = this.data.steps.length;

        this.currentStep += step;
    }
    changeProgressBack(step) {
        debugger;
        let link = this.routeList.filter(
            (item) => item.id === step.toString()
        )[0];

        this.changeStepsSeparteion(step);
        if (step == 0) {
            this._router.navigate(['./'], {
                relativeTo: this.route, // Use parent to go up one level
                //relativeTo: this.route.parent, // Use parent to go up one level
            });
        } else {
            this._router.navigate(['./', link.route], {
                relativeTo: this.route, // Use parent to go up one level
                //relativeTo: this.route.parent, // Use parent to go up one level
            });
        }
        this._changeDetectorRef.markForCheck();

        this.stepCount = this.data.steps.length;

        this.currentStep -= step;
        step <= 0 ? (this.currentStep = 0) : this.currentStep - step;
    }

    changeStepsSeparteion(currentStep) {
        if (currentStep == 0) {
            this.getStart = true;
        } else {
            this.getStart = false;
        }
    }
}
