import {
    Component,
    OnInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ElementRef,
    OnDestroy,
    Renderer2,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
    } from '@angular/core';
import {FormBuilder , FormGroup  ,Validators  , FormsModule,ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup} from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { FamilyMemberComponent } from '../family-members.component';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, NavigationEnd, RouterLink ,Router } from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass, NgFor, NgIf ,CommonModule} from '@angular/common';
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
import {ThemePalette} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'detail-member',

  standalone: true,
  imports : [FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgIf, MatIconModule,
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
    MatCardModule

],

  templateUrl: './detail-member.component.html',
  styleUrls: ['./detail-member.component.scss']
})
export class DetailMemberComponent implements OnInit {

    color: ThemePalette = 'accent';
    isChecked = false;
    disabled = false;

    familyMember: FamiliesMembers
    familyMemberForm: UntypedFormGroup;
    familyMembers: FamiliesMembers[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(

    //   private _formBuilder:FormBuilder,
      private _familyMemberComponent:FamilyMemberComponent,
      private _activatedRoute: ActivatedRoute,
      private _changeDetectorRef: ChangeDetectorRef,
      private _formBuilder: UntypedFormBuilder,
      private _fuseConfirmationService: FuseConfirmationService,
      private _renderer2: Renderer2,
      private _router: Router,
      private _overlay: Overlay,
      private _viewContainerRef: ViewContainerRef,
      private _familyTreeService:FamilyTreeService

    )
    {

    }

      ngOnInit(): void {

        // Open the drawer
        this._familyMemberComponent.matDrawer.open();

        // Create the bequest form
        this.familyMemberForm = this._formBuilder.group({
            id       : [''],
            firstName     : [''],
            lastName    : [''],
            age:0 ,
            dateBirth :[null] ,
            placeBirth:[''],
            gender:[''],
            dateDeath:[null],
            placeDeath:[''],
            maritalStatus:[''],
            description:[''],


        });

        this._familyTreeService.familiesMembers$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((familyMembers: FamiliesMembers[]) =>
            {
                this.familyMembers = familyMembers;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        this._familyTreeService.familyMembers$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((familyMember: FamiliesMembers) =>
            {
                this.familyMember = familyMember;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });


     // Update family Member when there is a value change on the family Member form
     this.familyMemberForm.valueChanges
     .pipe(
         tap((value) =>
         {
             // Update the family Member object
             this.familyMember = assign(this.familyMember, value);
         }),
         debounceTime(300),
         takeUntil(this._unsubscribeAll),
     )
     .subscribe((value) =>
     {
         // Update the family Member on the server
         this._familyTreeService.updateFamilyMembers(value.id, value).subscribe();

         // Mark for check
         this._changeDetectorRef.markForCheck();
     });
    }
     /**
     * Check if the Family Members is overdue or not
     */
     isOverdue(): boolean
     {
         return DateTime.fromISO(this.familyMember.dateBirth.toString()).startOf('day') < DateTime.now().startOf('day');
     }
     isOverDeath(): boolean
     {
         return DateTime.fromISO(this.familyMember.dateDeath.toString()).startOf('day') < DateTime.now().startOf('day');
     }
    closeDrawer(): Promise<MatDrawerToggleResult>
    {
        return this._familyMemberComponent.matDrawer.close();
    }
    }





