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
// import { FamilyMemberComponent } from '../family-members.component';
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
// import { FamiliesMembers } from '../../family-tree.types';
// import { FamilyTreeService } from '../../family-tree.service';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FamiliesMembers } from 'app/modules/stakeholders/stakeholders.types';
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

    templateUrl: './detail-wealth.component.html',

})
export class DetailWealthComponent implements OnInit {
    @ViewChild('titleField') private _titleField: ElementRef;
    color: ThemePalette = 'accent';
    isChecked = false;
    disabled = false;

    // familyMember: FamiliesMembers;
    familyMemberForm: UntypedFormGroup;
    familyMembers: FamiliesMembers[]=[];
    familyMember: FamiliesMembers;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    age: number;

    labelGender: 'Female' | 'Male' = 'Male';
    labelmaritalStatus: 'Single' | 'Married' | 'Divorced' = 'Single';
    constructor(
        //   private _formBuilder:FormBuilder,
        // private _familyMemberComponent: FamilyMemberComponent,

        private _formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<DetailWealthComponent>,


        // private _familyTreeService: FamilyTreeService
    ) {}

    ngOnInit(): void {
        // Open the drawer
        // this._familyMemberComponent.matDrawer.open();

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


        // Get The Family Member



        // Update family Member when there is a value change on the family Member form


        // Listen for NavigationEnd event to focus on the title field

    }
    checkDate(): boolean {
        return (
            DateTime.fromISO(this.familyMember.dateBirth.toString()).startOf(
                'day'
            ) < DateTime.now().startOf('day')
        );
    }
    onNoClick(): void {
        this.dialogRef.close();
      }

    ngAfterViewInit(): void {
        // Listen for matDrawer opened change

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


    // Check Date Brith
    //  checkDate(): boolean {
    //     return (
    //         DateTime.fromISO(this.familyMember.dateDeath.toString())
    //         .startOf('day') <
    //         DateTime.now().startOf('day')
    //     );
    // }


}
