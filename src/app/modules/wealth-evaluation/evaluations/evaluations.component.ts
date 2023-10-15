import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EvaluationService } from 'app/modules/wealth-evaluation/evaluation.service';
import {
    Evaluation,
    Profile,
} from 'app/modules/wealth-evaluation/evaluation.types';
import { NewEvaluationComponent } from 'app/modules/wealth-evaluation/new-evaluation/new-evaluation.component';
import { ProfileComponent } from 'app/modules/wealth-evaluation/profile/profile.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'evaluations',
    templateUrl: './evaluations.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatSidenavModule,
        NgIf,
        NewEvaluationComponent,
        ProfileComponent,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        NgFor,
        NgClass,
        RouterLink,
        RouterOutlet,
        CurrencyPipe,
    ],
})
export class EvaluationsComponent implements OnInit, OnDestroy {
    evaluations: Evaluation[];
    amount: number = 5000;
    drawerComponent: 'profile' | 'new-evaluation';
    drawerOpened: boolean = false;
    filteredevaluations: Evaluation[];
    profile: Profile;
    selectedevaluation: Evaluation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _evaluationServic: EvaluationService,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // evaluations
        this._evaluationServic.Evaluations$.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe((evaluations: Evaluation[]) => {
            this.evaluations = this.filteredevaluations = evaluations;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Profile
        this._evaluationServic.profile$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((profile: Profile) => {
                this.profile = profile;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Selected evaluation
        this._evaluationServic.Evaluation$.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe((evaluation: Evaluation) => {
            this.selectedevaluation = evaluation;

            // Mark for check
            this._changeDetectorRef.markForCheck();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter the evaluations
     *
     * @param query
     */
    filterevaluations(query: string): void {
        // Reset the filter
        if (!query) {
            this.filteredevaluations = this.evaluations;
            return;
        }

        this.filteredevaluations = this.evaluations.filter((evaluation) =>
            evaluation.contact.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    /**
     * Open the new evaluation sidebar
     */
    openNewevaluation(): void {
        this.drawerComponent = 'new-evaluation';
        this.drawerOpened = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Open the profile sidebar
     */
    openProfile(): void {
        this.drawerComponent = 'profile';
        this.drawerOpened = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
