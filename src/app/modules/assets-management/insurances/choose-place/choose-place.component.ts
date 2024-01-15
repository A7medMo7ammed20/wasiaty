import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { StepsProgressComponent } from 'app/layout/common/adding-init/steps-progress/steps-progress.component';
import { StepsHeaderComponent } from 'app/layout/common/adding-init/steps-header/steps-header.component';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Steps } from 'app/shared/types/step.types';

@Component({
    selector: 'app-choose-place',
    standalone: true,
    imports: [
        CommonModule,
        StepsProgressComponent,
        StepsHeaderComponent,
        FuseLoadingBarComponent,
    ],
    templateUrl: './choose-place.component.html',

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
export class ChoosePlaceComponent {
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    data: Steps | null;
    @Input() title: string;
    @Input() haveIcon: boolean = false;
    @Input() description: string;
    @Input() steps: { title: string; description: string; icon: string }[];
    @Input() currentStep: number;
    /**
     * Constructor
     */
    constructor(private route: ActivatedRoute) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    ngOnInit() {
        // Access the resolved data using ActivatedRoute
        this.route.data.subscribe((data) => {
            this.data = data.steps; // This will contain the resolved steps data
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
