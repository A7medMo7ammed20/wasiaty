import {
    Component,
    Input,
    OnDestroy,
    ViewEncapsulation,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { StepsProgressComponent } from 'app/layout/common/adding-init/steps-progress/steps-progress.component';
import { StepsHeaderComponent } from 'app/layout/common/adding-init/steps-header/steps-header.component';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { Subject } from 'rxjs';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Steps } from 'app/shared/types/step.types';

// import { Steps } from 'app/modules/assets-management/endowment/endowment-add.types';

@Component({
    selector: 'app-review-endowment',
    standalone: true,
    imports: [
        CommonModule,
        StepsProgressComponent,
        StepsHeaderComponent,
        FuseLoadingBarComponent,
    ],
    templateUrl: './review-endowment.component.html',

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
export class ReviewEndowmentComponent {
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
