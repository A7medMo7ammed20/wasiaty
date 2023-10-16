import {
    Component,
    OnInit,
    ChangeDetectorRef,
    ElementRef,
    Renderer2,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { FamilyMemberComponent } from '../family-members.component';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {
    ActivatedRoute,
    NavigationEnd,
    RouterLink,
    Router,
} from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { Overlay } from '@angular/cdk/overlay';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { assign } from 'lodash-es';
import { DateTime } from 'luxon';
import { debounceTime, filter, Subject, takeUntil, tap } from 'rxjs';
import { FamiliesMembers } from '../../family-tree.types';
import { FamilyTreeService } from '../../family-tree.service';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
    selector: 'detail-member',

    standalone: true,
    imports: [
        FormsModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgIf,
        MatIconModule,
        RouterLink,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        NgFor,
        MatRippleModule,
        MatCheckboxModule,
        NgClass,
        MatRadioModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        FuseFindByKeyPipe,
        DatePipe,
        MatCardModule,
    ],

    templateUrl: './detail-member.component.html',
    styleUrls: ['./detail-member.component.scss'],
})
export class DetailMemberComponent implements OnInit {
    @ViewChild('titleField') private _titleField: ElementRef;
    color: ThemePalette = 'accent';
    isChecked = false;
    disabled = false;

    familyMember: FamiliesMembers;
    familyMemberForm: UntypedFormGroup;
    familyMembers: FamiliesMembers[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    age: number;

    labelGender: 'Female' | 'Male' = 'Male';
    labelmaritalStatus: 'Single' | 'Married' | 'Divorced' = 'Single';
    constructor(
        //   private _formBuilder:FormBuilder,
        private _familyMemberComponent: FamilyMemberComponent,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: UntypedFormBuilder,
        private _fuseConfirmationService: FuseConfirmationService,
        private _renderer2: Renderer2,
        private _router: Router,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef,
        private _familyTreeService: FamilyTreeService
    ) {}

    ngOnInit(): void {
        // Open the drawer
        this._familyMemberComponent.matDrawer.open();

        // Create the bequest form
        this.familyMemberForm = this._formBuilder.group({
            id: [''],
            firstName: [''],
            lastName: [''],
            age: 0,
            dateBirth: [null],
            placeBirth: [''],
            gender: [''],
            dateDeath: [null],
            placeDeath: [''],
            maritalStatus: [''],
            description: [''],
        });
        // Get The Family Members
        this._familyTreeService
            .getFamilyMembers()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((familyMembers: FamiliesMembers[]) => {
                this.familyMembers = familyMembers;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get The Family Member

        this._familyTreeService.familyMembers$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((familyMember: FamiliesMembers) => {
                // Open the drawer in case it is closed

                this._familyMemberComponent.matDrawer.open();
                // Get the Debt
                console.log('ssssssssssss', familyMember);

                this.familyMember = familyMember;
                // Patch values to the form from the Debt

                this.familyMemberForm.patchValue(familyMember, {
                    emitEvent: false,
                });

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Update family Member when there is a value change on the family Member form
        this.familyMemberForm.valueChanges
            .pipe(
                tap((value) => {
                    // Update the family Member object
                    this.familyMember = assign(this.familyMember, value);
                }),
                debounceTime(300),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((value) => {
                // Update the family Member on the server
                this._familyTreeService
                    .updateFamilyMembers(value.id, value)
                    .subscribe();

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
        this.calculateAge();
    }

    ngAfterViewInit(): void {
        // Listen for matDrawer opened change
        this._familyMemberComponent.matDrawer.openedChange
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter((opened) => opened)
            )
            .subscribe(() => {
                // Focus on the title element
                this._titleField.nativeElement.focus();
            });
    }
    calculateAge() {
        const today = new Date();
        const birthDate = new Date(this.familyMember.dateBirth);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        this.age = age;
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    /**
     * Check if the Family Members is overdue or not
     */
    // Check Date
    checkDate(): boolean {
        return (
            DateTime.fromISO(this.familyMember.dateBirth.toString()).startOf(
                'day'
            ) < DateTime.now().startOf('day')
        );
    }
    deleteMember(): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete Member',
            message:
                'Are you sure you want to delete this Debt? This action cannot be undone!',
            actions: {
                confirm: {
                    label: 'Delete',
                },
            },
        });
    }
    // Check Date Brith
    //  checkDate(): boolean {
    //     return (
    //         DateTime.fromISO(this.familyMember.dateDeath.toString())
    //         .startOf('day') <
    //         DateTime.now().startOf('day')
    //     );
    // }

    closeDrawer(): Promise<MatDrawerToggleResult> {
        return this._familyMemberComponent.matDrawer.close();
    }
}
