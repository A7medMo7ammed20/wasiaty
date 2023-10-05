import { NgIf , NgFor , NgClass} from '@angular/common';
import { ChangeDetectionStrategy,
     ChangeDetectorRef, Component, OnDestroy,
      OnInit, ViewEncapsulation,ViewContainerRef
     ,Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject, takeUntil } from 'rxjs';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Overlay } from '@angular/cdk/overlay';
import { MatDividerModule } from '@angular/material/divider';
import { TableComponent } from '../table/table.component';
import { RelationshipsFamilyComponent } from '../relationships-family.component';
import { MatMenuModule } from '@angular/material/menu';
import { FamilyTreeService } from '../../family-tree.service';
import { FamiliesMembers, Family } from '../../family-tree.types';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
    selector       : 'relation-details',
    templateUrl    : './details.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [
        MatButtonModule, RouterLink, MatIconModule, NgIf,
        MatFormFieldModule ,NgFor ,FormsModule ,ReactiveFormsModule
         ,MatDividerModule ,MatMenuModule , NgClass ,
         MatTooltipModule,MatInputModule
    ],
})
export class RelationDetailsComponent implements OnInit, OnDestroy
{
    relationshipForm: UntypedFormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    familiasMembers: FamiliesMembers[];


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
        private _relationshipsFamily: RelationshipsFamilyComponent,
        // private _bequestService: BequestManagementService,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef,
        private _familyTreeServeice:FamilyTreeService ,


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
        this._relationshipsFamily.matDrawer.open();

        // Get the item
        this.relationshipForm = this._formBuilder.group({

            id:[''],
            fullName:[''],
            mother:[''],
            father:[''],
            childrenMale:[''],
            childrenFemale:[''],
            spouse:[''],
            uncle:[''],
            grandpa:[''],

        })
        // Get the families

        this._familyTreeServeice.familiesMembers$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((familiasMembers: FamiliesMembers[]) =>
            {
                this.familiasMembers = familiasMembers;

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
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close the drawer
     */

    closeDrawer(): Promise<MatDrawerToggleResult>
    {
        return this._relationshipsFamily.matDrawer.close();
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
