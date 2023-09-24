import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FileManagerService } from 'app/modules/document-managment/file-manager/file-manager.service';
import { Item } from 'app/modules/document-managment/file-manager/file-manager.types';
import { FileManagerListComponent } from 'app/modules/document-managment/file-manager/list/list.component';
import { Subject, takeUntil , Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
    selector       : 'add-folder',
    templateUrl    : './add-folder.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatButtonModule, RouterLink, MatIconModule, NgIf],
})
export class FileManagerAddFolderComponent implements OnInit, OnDestroy
{
    item: Item;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fileManagerListComponent: FileManagerListComponent,
        private _fileManagerService: FileManagerService,
        private _route:Router,
        private _activeRoute:ActivatedRoute,
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
       


        // Get the item
        this._fileManagerService.item$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((item: Item) =>
            {
                // Open the drawer in case it is closed
                this._fileManagerListComponent.matDrawer.open();

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

            
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
    shouldRefresh = false;
    closeDrawer(): Promise<MatDrawerToggleResult>
    {      
        // this._route.navigate(['app/modules/document-managment/file-manager/file-manager.routes'])
        // this._route.navigate(['../../../'])
        //  const id: Observable<string> = thyyis._activeRoute.params.pipe(map(p => p.lastName));
            // console.log(p.la)
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
