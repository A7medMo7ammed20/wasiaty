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
import { BequestManagementComponent } from 'app/modules/bequest-managment/bequest-management.component';
import { BequestManagementService } from 'app/modules/bequest-managment/bequest-management.service';
import { Bequest } from 'app/modules/bequest-managment/bequest-management.types';
import { assign } from 'lodash-es';
import { DateTime } from 'luxon';
import { debounceTime, filter, Subject, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'bequest-details',
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
export class BequestDetailsComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    @ViewChild('titleField') private _titleField: ElementRef;

    bequest: Bequest;
    bequestForm: UntypedFormGroup;
    bequests: Bequest[];
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
        private _bequestManagementComponent: BequestManagementComponent,
        private _bequestService: BequestManagementService,
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
        this._bequestManagementComponent.matDrawer.open();

        // Create the bequest form
        this.bequestForm = this._formBuilder.group({
            id: [''],
            name: [''],
            executor: [''],
            description: [''],
            dueDate: [null],
            Beneficiaries: [0],
        });

        // Get the bequests
        this._bequestService.bequests$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((bequests: Bequest[]) => {
                this.bequests = bequests;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the bequest
        this._bequestService.bequest$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((bequest: Bequest) => {
                // Open the drawer in case it is closed
                this._bequestManagementComponent.matDrawer.open();

                // Get the bequest
                this.bequest = bequest;

                // Patch values to the form from the bequest
                this.bequestForm.patchValue(bequest, { emitEvent: false });

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Update bequest when there is a value change on the bequest form
        this.bequestForm.valueChanges
            .pipe(
                tap((value) => {
                    // Update the bequest object
                    this.bequest = assign(this.bequest, value);
                }),
                debounceTime(300),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((value) => {
                // Update the bequest on the server
                this._bequestService.updateBequest(value.id, value).subscribe();

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
        this._bequestManagementComponent.matDrawer.openedChange
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
        return this._bequestManagementComponent.matDrawer.close();
    }

    /**
    /**
     * Close the drawer
     */
    addNewBequest(): void {}

    /**
     * Toggle the completed status
     */
    toggleCompleted(): void {
        // Get the form control for 'completed'
        const completedFormControl = this.bequestForm.get('completed');

        // Toggle the completed status
        completedFormControl.setValue(!completedFormControl.value);
    }

    /**
     * Check if the bequest is overdue or not
     */
    isOverdue(): boolean {
        return (
            DateTime.fromISO(this.bequest.dueDate).startOf('day') <
            DateTime.now().startOf('day')
        );
    }

    /**
     * Delete the bequest
     */
    deleteBequest(): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete bequest',
            message:
                'Are you sure you want to delete this bequest? This action cannot be undone!',
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
                // Get the current bequest's id
                const id = this.bequest.id;

                // Get the next/previous bequest's id
                const currentBequestIndex = this.bequests.findIndex(
                    (item) => item.id === id
                );
                const nextbequestIndex =
                    currentBequestIndex +
                    (currentBequestIndex === this.bequests.length - 1 ? -1 : 1);
                const nextbequestId =
                    this.bequests.length === 1 && this.bequests[0].id === id
                        ? null
                        : this.bequests[nextbequestIndex].id;

                // Delete the bequest
                this._bequestService
                    .deleteBequest(id)
                    .subscribe((isDeleted) => {
                        // Return if the bequest wasn't deleted...
                        if (!isDeleted) {
                            return;
                        }

                        // Navigate to the next bequest if available
                        if (nextbequestId) {
                            this._router.navigate(['../', nextbequestId], {
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
