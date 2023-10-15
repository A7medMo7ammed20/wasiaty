import { TextFieldModule } from '@angular/cdk/text-field';
import {
    CurrencyPipe,
    DatePipe,
    NgClass,
    NgFor,
    NgIf,
    NgTemplateOutlet,
} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    NgZone,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { EvaluationService } from 'app/modules/wealth-evaluation/evaluation.service';
import { Evaluation } from 'app/modules/wealth-evaluation/evaluation.types';
import { ContactInfoComponent } from 'app/modules/wealth-evaluation/contact-info/contact-info.component';
import { Subject, takeUntil } from 'rxjs';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'Evaluation-conversation',
    templateUrl: './conversation.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        MatSidenavModule,
        ContactInfoComponent,
        MatButtonModule,
        RouterLink,
        MatIconModule,
        MatMenuModule,
        NgFor,
        NgClass,
        NgTemplateOutlet,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        DatePipe,
        MatButtonModule,
        MatDividerModule,
        NgApexchartsModule,
        MatTableModule,
        MatSortModule,
        MatProgressBarModule,
        CurrencyPipe,
    ],
})
export class ConversationComponent implements OnInit, OnDestroy {
    @ViewChild('messageInput') messageInput: ElementRef;
    Evaluation: Evaluation;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    @ViewChild('recentTransactionsTable', { read: MatSort })
    recentTransactionsTableMatSort: MatSort;

    data: any;

    recentTransactionsDataSource: MatTableDataSource<any> =
        new MatTableDataSource();
    recentTransactionsTableColumns: string[] = [
        'transactionId',
        'date',
        'name',
        'amount',
        'status',
    ];

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _EvaluationService: EvaluationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _ngZone: NgZone
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Decorated methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resize on 'input' and 'ngModelChange' events
     *
     * @private
     */
    @HostListener('input')
    @HostListener('ngModelChange')
    private _resizeMessageInput(): void {
        // This doesn't need to trigger Angular's change detection by itself
        this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                // Set the height to 'auto' so we can correctly read the scrollHeight
                this.messageInput.nativeElement.style.height = 'auto';

                // Detect the changes so the height is applied
                this._changeDetectorRef.detectChanges();

                // Get the scrollHeight and subtract the vertical padding
                this.messageInput.nativeElement.style.height = `${this.messageInput.nativeElement.scrollHeight}px`;

                // Detect the changes one more time to apply the final height
                this._changeDetectorRef.detectChanges();
            });
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Evaluation
        this._EvaluationService.Evaluation$.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe((Evaluation: Evaluation) => {
            this.Evaluation = Evaluation;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Get the data
        this._EvaluationService
            .getData()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the data
                debugger;
                this.data = data;

                // Store the table data
                this.recentTransactionsDataSource.data =
                    data.recentTransactions;

                // Prepare the chart data
            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the drawerMode if the given breakpoint is active

                this.drawerMode = 'over';

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
     * Open the contact info
     */
    openContactInfo(): void {
        // Open the drawer
        this.drawerOpened = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Reset the Evaluation
     */
    resetEvaluation(): void {
        this._EvaluationService.resetEvaluation();

        // Close the contact info in case it's opened
        this.drawerOpened = false;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Toggle mute notifications
     */
    toggleMuteNotifications(): void {
        // Toggle the muted
        this.Evaluation.muted = !this.Evaluation.muted;

        // Update the Evaluation on the server
        this._EvaluationService
            .updateEvaluation(this.Evaluation.id, this.Evaluation)
            .subscribe();
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
