import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { FileManagerService } from 'app/modules/document-managment/file-manager/file-manager.service';
import { Item } from 'app/modules/document-managment/file-manager/file-manager.types';
import { FileManagerListComponent } from 'app/modules/document-managment/file-manager/list/list.component';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

@Component({
    selector       : 'file-manager-details',
    templateUrl    : './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatButtonModule, RouterLink, MatIconModule, NgIf],
})
export class FileManagerDetailsComponent implements OnInit, OnDestroy
{
    item: Item;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /////
    contactForm: UntypedFormGroup;
    contacts: Item[];
    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fileManagerListComponent: FileManagerListComponent,
        private _fileManagerService: FileManagerService,
        private _formBuilder: UntypedFormBuilder,

    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Open the drawer
        this._fileManagerListComponent.matDrawer.open();

        this.contactForm = this._formBuilder.group({
            id:[''],
            folderId:null,
            name:['New Contact'],
            createdBy:[''],
            createdAt:[''],
            modifiedAt:null,
            size:null,
            type:['PDF'],
            description:null,
            contents:null,

        })

  // Get the contacts

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
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult>
    {
        return this._fileManagerListComponent.matDrawer.close();
    }

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
