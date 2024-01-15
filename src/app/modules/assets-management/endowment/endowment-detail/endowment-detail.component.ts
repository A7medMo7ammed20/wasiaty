import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
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
    UntypedFormArray,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { BeneficiariesService } from 'app/modules/stakeholders/beneficiaries/beneficiaries.service';
import {
    Individual,
    Country,
    Tag,
} from 'app/modules/stakeholders/stakeholders.types';
// import { BeneficiariesComponent } from 'app/modules/stakeholders/beneficiaries/beneficiaries.component';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';
import { EndowmentsComponent } from '../endowment.component';
import { EndowmentsService } from '../endowment.service';
import { Endowment, VMEndowment } from '../endowment.types';
import { assign } from 'lodash';
import { EndowmentsListeComponent } from '../endowments-list/endowments-list.component';

@Component({
    selector: 'insurances-detail',
    templateUrl: './endowment-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        MatButtonModule,
        MatTooltipModule,
        RouterLink,
        MatIconModule,
        NgFor,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        NgClass,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        TextFieldModule,
        FuseFindByKeyPipe,
        DatePipe,
    ],
})
export class EndowmentsDetailComponent   implements OnInit, OnDestroy {
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    @ViewChild('tagsPanel') private _tagsPanel: TemplateRef<any>;
    @ViewChild('tagsPanelOrigin') private _tagsPanelOrigin: ElementRef;

    endowments: Endowment[];
    endowment: VMEndowment;
    beneficiaries: Individual[];
    beneficiarydateils:Individual;

    endowmentData:VMEndowment;
    endowmentesData:VMEndowment[];
    data: Endowment;
    beneficiary:Individual;
    editMode: boolean = true;
    tags: Tag[];
    tagsEditMode: boolean = false;
    filteredTags: Tag[];
    endowmentForm: UntypedFormGroup;
    countries: Country[];
    private _tagsPanelOverlayRef: OverlayRef;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _endowmentsListComponent: EndowmentsListeComponent,
        private _endowmentsService: EndowmentsService,
        private _formBuilder: UntypedFormBuilder,
        private _fuseConfirmationService: FuseConfirmationService,
        private _renderer2: Renderer2,
        private _router: Router,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef,
        ///// beneficiaries
        private _beneficiariesService:BeneficiariesService


    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Open the drawer
        this._endowmentsListComponent.matDrawer.open();

        // Create the Endowment form
        this.endowmentForm = this._formBuilder.group({
            id: [''],
            endowmentName: ['', [Validators.required]],
            amount:0,
            donationDate: [null],
            beneficiaryId:[''],
            beneficiary:[''],
            wealthId:[''],
            beneficiaryName:['']



        });
        // this.getbeneficiaries()

        // Get endowments
        this._endowmentsService
        .endowment$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((data) => {
            // Store the data

            this.data = data ;
             ;
            this.beneficiaries.forEach(beneficiary=>{
                if( data.beneficiaryId == beneficiary.id)
                {

                    if(this.endowmentData){
                        this.endowmentesData?.push({...data , beneficiaryName:beneficiary.name , wealthName:'' });
                    }else{
                        this.endowmentesData=[{...data , beneficiaryName:beneficiary.name , wealthName:'' }];
                    }
                }

            });




        //     // this.dataSource = new MatTableDataSource<Endowment>(this.endowmentData);
        //     // this.dataSource.paginator = this.paginator;
        // // this.endowmentData

        //     // console.log('data Source',this.dataSource);
        });



        // Get the endowment
        this._endowmentsService.endowment$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((endowment: VMEndowment) => {

                // Open the drawer in case it is closed
                this._endowmentsListComponent.matDrawer.open();
                // this.beneficiaries.find(beneficiary => beneficiary.id == endowment.beneficiaryId);
                            // Get the endowment
                this.endowment = endowment;
                console.log('this endowment'  )


                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

            this._beneficiariesService
            .getIndividualById(this.endowment.beneficiaryId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((individuals) => {
                this.endowmentData={...this.endowment , beneficiaryName:individuals.name , wealthName:'' };

                this.endowmentForm.patchValue(this.endowmentData , {emitEvent:false} );


                 // this.beneficiariesdataSources = new MatTableDataSource<Individual>(this.beneficiarirs);
                    // Store the data
                    // this.data = individuals;
                    // this.beneficiariesdataSources.paginator = this.paginator;
                    console.log('individuals' , this.beneficiaries)
                });

                // Get the Endowments


             // Update family Member when there is a value change on the family Member form
        // this.endowmentForm.valueChanges
        // .pipe(
        //     tap((value) => {
        //         // Update the family Member object
        //         this.endowment = assign(this.endowment, value);
        //     }),
        //     debounceTime(300),
        //     takeUntil(this._unsubscribeAll)
        // )
        // .subscribe((value) => {
        //     // Update the family Member on the server
        //     this._endowmentsService
        //         .updateFamilyMembers(value.id, value)
        //         .subscribe();

        //     // Mark for check
        //     this._changeDetectorRef.markForCheck();
        // });


    }


    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();

        // Dispose the overlays if they are still on the DOM
        if (this._tagsPanelOverlayRef) {
            this._tagsPanelOverlayRef.dispose();
        }
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
     getbeneficiaries(){
        this._beneficiariesService
        .getIndividuals()
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((individuals) => {
            this.beneficiaries=individuals;
                 this.beneficiaries.filter((beneficiar)=>{
                     beneficiar.tags.includes("cbde2486-5033-4e09-838e-e901b108cd41")
                     this.beneficiarydateils = beneficiar
                     return this.beneficiarydateils
                }) ;
                // this.beneficiariesdataSources = new MatTableDataSource<Individual>(this.beneficiarirs);
                // Store the data
                // this.data = individuals;
                // this.beneficiariesdataSources.paginator = this.paginator;
                console.log('beneficiaries 1' , this.beneficiarydateils)
            });

    }

    /**
     * Delete the individual
     */

    deleteEndowment(): void {
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'Delete individual',
            message:
                'Are you sure you want to delete this individual? This action cannot be undone!',
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
                // Get the current Endowment's id
                const id = this.endowment.id;

                // Get the next/previous Endowment's id
                // const currentEndowmentIndex = this.endowmentesData.findIndex(
                //     (item) => item.id === id
                // );
                // const nextEndowmentIndex =
                //     currentEndowmentIndex +
                //     (currentEndowmentIndex === this.endowmentesData.length - 1
                //         ? -1
                //         : 1);
                // const nextEndowmentlId =
                //     this.endowmentesData.length === 1 &&
                //     this.endowmentesData[0].id === id
                //         ? null
                //         : this.endowmentesData[nextEndowmentIndex].id;

                // Delete the Endowment
                this._endowmentsService
                    .deleteEndowment(id)
                    .subscribe((isDeleted) => {
                        // Return if the Endowment wasn't deleted...
                        if (!isDeleted) {
                            return;
                        }

                        // Navigate to the next Endowment if available
                        // if (nextEndowmentIndex) {
                        //     this._router.navigate(['../', nextEndowmentIndex], {
                        //         relativeTo: this._activatedRoute,
                        //     });
                        // }
                        // // Otherwise, navigate to the parent
                        // else {
                        //     this._router.navigate(['../'], {
                        //         relativeTo: this._activatedRoute,
                        //     });
                        // }

                        // Toggle the edit mode off
                        this.toggleEditMode(false);
                        this.closeDrawer()
                        // Mark for check
                        this._changeDetectorRef.markForCheck();
                    });

            }
        });
    }

    /**
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult> {
        return this._endowmentsListComponent.matDrawer.close();
    }

    /**
     * Toggle edit mode
     *
     * @param editMode
     */
    toggleEditMode(editMode: boolean | null = null): void {
        // if (editMode === null) {
        //     this.editMode = !this.editMode;
        // } else {
        //     this.editMode = editMode;
        // }
        // // Mark for check
        // this._changeDetectorRef.markForCheck();
        this.closeDrawer();
    }

    /**
     * Update the endowment
     */
    updateIndividual(): void {
        // Get the endowment object
        const endowment = this.endowmentForm.getRawValue();

        // Go through the individual object and clear empty values




        // Update the individual on the server

    }



    /**
     * Upload avatar
     *
     * @param fileList
*/
}
