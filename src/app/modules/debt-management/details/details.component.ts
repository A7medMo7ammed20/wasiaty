import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    Renderer2,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterLink,
} from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { DebtListComponent } from 'app/modules/debt-management/list/list.component';
import { debtManagementService } from 'app/modules/debt-management/debt-management.service';
import { Debt } from 'app/modules/debt-management/debt-management.types';
import { assign } from 'lodash-es';
import { DateTime } from 'luxon';
import { debounceTime, filter, Subject, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'debt-details',
    templateUrl: './details.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgIf,
        MatIconModule,
        MatMenuModule,
        RouterLink,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        NgFor,
        MatRippleModule,
        MatCheckboxModule,
        NgClass,
        MatDatepickerModule,
        FuseFindByKeyPipe,
        DatePipe,
    ],
})
export class DebtDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('titleField') private _titleField: ElementRef;

    debt: Debt;
    DebtForm: UntypedFormGroup;
    Debts: Debt[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: UntypedFormBuilder,
        private _fuseConfirmationService: FuseConfirmationService,
        private _renderer2: Renderer2,
        private _router: Router,
        private _DebtListManagementComponent: DebtListComponent,
        private _debtService: debtManagementService,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Open the drawer
        this._DebtListManagementComponent.matDrawer.open();

        // Create the Debt form
        this.DebtForm = this._formBuilder.group({
            id: [''],
            description: [''],
            creditor: [''],
            debtor: [''],
            currency: [''],
            repaymentMethod: [''],
            debtType: [''],
            amount: 0,
            dueDate: [null],
            interestRate: 0,
            maturityPercentage: 0,
            Beneficiaries: [0],
            specialDocuments: [null],
        });

        // Get the Debts
        this._debtService
            .getdebts()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((Debts: Debt[]) => {
                this.Debts = Debts;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the Debt
        this._debtService.debt$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((Debt: Debt) => {
                // Open the drawer in case it is closed
                this._DebtListManagementComponent.matDrawer.open();

                // Get the Debt
                this.debt = Debt;

                // Patch values to the form from the Debt
                this.DebtForm.patchValue(Debt, { emitEvent: false });

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Update Debt when there is a value change on the Debt form
        this.DebtForm.valueChanges
            .pipe(
                tap((value) => {
                    // Update the Debt object
                    this.debt = assign(this.debt, value);
                }),
                debounceTime(300),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((value) => {
                // Update the Debt on the server
                this._debtService.updatedebt(value.id, value).subscribe();

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Listen for NavigationEnd event to focus on the title field
        this._router.events
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter((event) => event instanceof NavigationEnd)
            )
            .subscribe(() => {
                // Focus on the title field
                this._titleField.nativeElement.focus();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Listen for matDrawer opened change
        this._DebtListManagementComponent.matDrawer.openedChange
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter((opened) => opened)
            )
            .subscribe(() => {
                // Focus on the title element
                this._titleField.nativeElement.focus();
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
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult> {
        return this._DebtListManagementComponent.matDrawer.close();
    }

    /**
     * Check if the Debt is overdue or not
     */
    isOverdue(): boolean {
        return (
            DateTime.fromISO(this.debt.dueDate.toString()).startOf('day') <
            DateTime.now().startOf('day')
        );
    }

    /**
     * Delete the Debt
     */
    deleteDebt(): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete Debt',
            message:
                'Are you sure you want to delete this Debt? This action cannot be undone!',
            actions: {
                confirm: {
                    label: 'Delete',
                },
            },
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {
            // If the confirm button pressed...
            if (result === 'confirmed') {
                // Get the current Debt's id
                const id = this.debt.id;

                // Get the next/previous Debt's id
                const currentDebtIndex = this.Debts.findIndex(
                    (item) => item.id === id
                );
                const nextDebtIndex =
                    currentDebtIndex +
                    (currentDebtIndex === this.Debts.length - 1 ? -1 : 1);
                const nextDebtId =
                    this.Debts.length === 1 && this.Debts[0].id === id
                        ? null
                        : this.Debts[nextDebtIndex].id;

                // Delete the Debt
                this._debtService.deletedebt(id).subscribe((isDeleted) => {
                    // Return if the Debt wasn't deleted...
                    if (!isDeleted) {
                        return;
                    }

                    // Navigate to the next Debt if available
                    if (nextDebtId) {
                        this._router.navigate(['../', nextDebtId], {
                            relativeTo: this._activatedRoute,
                        });
                    }
                    // Otherwise, navigate to the parent
                    else {
                        this._router.navigate(['../'], {
                            relativeTo: this._activatedRoute,
                        });
                    }
                });

                // Mark for check
                this._changeDetectorRef.markForCheck();
            }
        });
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
