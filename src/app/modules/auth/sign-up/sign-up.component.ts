import { NgIf , NgFor } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthVerificationComponent } from 'app/modules/auth/sign-up/verification/verification.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterServiceAPI } from 'app/mock-api/registeration/register.api';
import { BequestManagementMockApi } from 'app/mock-api/bequest-management/api';
import { Users } from 'app/core/user/user.types';
@Component({
    selector: 'auth-sign-up',
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        RouterLink,
        NgIf,
        NgFor,
        FuseAlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatSelectModule,
        MatOptionModule,
    ],
})
export class AuthSignUpComponent implements OnInit {
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;
    verticalStepperForm: UntypedFormGroup;


    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    // signUpForm: UntypedFormGroup;
    showAlert: boolean = false;
    insertcode: boolean = true;
    countries: string[] = [];
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private _matDialog: MatDialog,
        private _activatedRoute: ActivatedRoute,
        private _register: RegisterServiceAPI ,
        private _bequestManagementMockApi:BequestManagementMockApi
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {


        this._register.getRegions('base').subscribe((data) => {
            // this.dataUser = data
            console.log( 'getRegions'  , data );

        })




        this._register.GetCountries('base').subscribe(
            (data) => {
              this.countries = data;
            console.log(this.countries);

            },
            (error) => {
              console.error('Error fetching countries:', error);
              // Handle error (e.g., show an error message)
            }
          );
        // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                firstName: [
                    'Mohammed',
                    [Validators.required, Validators.minLength(4)],
                ],
                lastName: ['Ziad', Validators.required],
                country: ['yemen'],
            }),
            step2: this._formBuilder.group({
                email: [
                    'mohammedziyed@gmail.com',
                    [Validators.required, Validators.email],
                ],
                // lastName : ['', Validators.required],
                phoneNumber: ['23413', [Validators.required]],

                // code : ['', [Validators.required]],
            }),
            step3: this._formBuilder.group({
                code: [
                    '3235',
                    [
                        Validators.required,
                        Validators.minLength(4),
                        Validators.maxLength(9),
                    ],
                ],
            }),
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    // signUp()
    // {
    //     // const formData = this.verticalStepperForm.value;
    //     // console.log('بيانات النموذج:', formData);

    // }
    signUp(): void {
        // Do nothing if the form is invalid
        if (this.verticalStepperForm.invalid) {
            return;
        }

        // Disable the form
        this.verticalStepperForm.disable();

        const userData: Users = {
            firstName: this.verticalStepperForm.get('step1.firstName').value,
            countryId: this.verticalStepperForm.get('step1.country').value,
            lastName: this.verticalStepperForm.get('step1.lastName').value,
            email: this.verticalStepperForm.get('step2.email').value,
            phoneNumber: this.verticalStepperForm.get('step2.phoneNumber').value,

        }

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.verticalStepperForm.value).subscribe(
            (response) => {
                // Navigate to the confirmation required page
                console.log(this.verticalStepperForm.value)
                // this._router.navigateByUrl('/confirmation-required');
                console.log( 'postRegions'  , userData );
                this._register.postRegions('base' , userData).subscribe(
                    (data) => {
                        const dataentire=data ;
                    }
                )
            },

            (response) => {
                // Re-enable the form
                this.verticalStepperForm.enable();

                // Reset the form
                this.signUpNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type: 'error',
                    message: 'Something went wrong, please try again.',
                };

                // Show the alert
                this.showAlert = true;
            }
        );
    }

    dialogVerfication() {
        let dialogRef = this._matDialog.open(AuthVerificationComponent);
        //     .afterClosed()
        //     .subscribe(() =>
        //     {
        //         // Go up twice because card routes are set up like this; "card/CARD_ID"
        //         // this._router.navigate(['./../..'], {relativeTo: this._activatedRoute});
        //     });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}
