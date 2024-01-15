import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { FileManagerService } from 'app/modules/document-managment/file-manager/file-manager.service';
import { Item } from 'app/modules/document-managment/file-manager/file-manager.types';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators , FormGroup ,FormControl } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import { AssetBranch } from 'app/modules/assets-management/wealth-management.types';
import { DialogData, TangableWealthListComponent } from '../list/tangible-wealthes-list.component';
import { WealthManagementService } from 'app/modules/assets-management/wealth-management.service';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector       : 'file-manager-details',
    templateUrl    : './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatButtonModule, RouterLink, MatIconModule, NgIf, MatFormFieldModule,
        MatInputModule,ReactiveFormsModule


        ],
})
export class TangableWealthDetailsComponent implements OnInit, OnDestroy
{
    item: AssetBranch;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /////
    contactForm: UntypedFormGroup;
    contacts: AssetBranch[];
    /**
     * Constructor
     */
    constructor(

        private _formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<TangableWealthDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

    )
    {
    }

    onNoClick(): void {
        this.dialogRef.close();
      }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.contactForm = this._formBuilder.group({
            id:[''],
            name:[''],
            description:null,

        })




    }
    submitForm() {
        // Handle form submission
      }
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------



    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}


