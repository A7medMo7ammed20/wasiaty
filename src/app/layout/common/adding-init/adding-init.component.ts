import { NgFor, NgIf , TitleCasePipe } from '@angular/common';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';

import {
    Component,
    Input,
    OnDestroy,
    ViewEncapsulation,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { Subject } from 'rxjs';
import { StepsProgressComponent } from './steps-progress/steps-progress.component';
import { StepsHeaderComponent } from './steps-header/steps-header.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { Steps } from 'app/shared/types/step.types';


@Component({
    selector: 'adding-init',
    templateUrl: './adding-init.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        FuseLoadingBarComponent,
        NgIf,
        RouterOutlet,
        NgFor,
        FuseScrollbarDirective,
        StepsProgressComponent,
        StepsHeaderComponent,
       TitleCasePipe

    ],
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
export class AddingInitComponent implements OnInit, OnDestroy {
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
