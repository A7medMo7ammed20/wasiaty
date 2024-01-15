import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { UserService } from 'app/core/user/user.service';
import { Users } from 'app/core/user/user.types';
import { RegisterServiceAPI } from 'app/mock-api/registeration/register.api';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';

@Component({
    selector     : 'auth-landing-page',
    templateUrl  : './landing-page.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink, FuseAlertComponent, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, NgFor ,  RouterLink,
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
        MatOptionModule,],
})
export class AuthLandingPageComponent implements OnInit
{
    private _authenticated: boolean = false;
    private authToken: string | null = null;



    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    signUpNgForm: UntypedFormGroup;
    showAlert: boolean = false;
    countries: string[] = [];
    verticalStepperForm: any;


    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private _register:RegisterServiceAPI,
        private _httpClient: HttpClient,
        private _userService: UserService,


    )
    {
    }
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {


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

        // Create the form
        this.signUpNgForm = this._formBuilder.group({

            firstName     : ['', Validators.required],
            lastName     : ['', Validators.required],
            email        : ['', [Validators.required, Validators.email]],
            phoneNumber  : [''],
            countryId  : [],
            // password     : ['', Validators.required],

        });
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signUp(): void
    {

        // Return if the form is invalid
        if ( this.signUpNgForm.invalid )
        {
            return;
        }
        // Disable the form
        // this.signUpNgForm.disab    le();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this.signUpLandingPage(this.signUpNgForm.value)
            .subscribe(
                () =>
                {
                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    debugger;
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                },
                (response) =>
                {
                    // Re-enable the form
                    this.signUpNgForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Item Created Successfully.',
                    };

                    // Show the alert
                    this.showAlert = true;
                },
            );
    }

//     /**
//      * sign In Landing Page
//      *
//      * @param credentials
//      */
    signUpLandingPage( credentials: { firstName:string ,
                                    lastName:string ,
                                    email: string ,
                                    phoneNumber:string ,
                                    countryId:number   }): Observable<any>
    {

        const options = {
            withCredentials: true,
          };

        debugger;
         console.log('credentials' ,  credentials)
   // Throw error, if the user is already logged in
   if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post('http://alwasiah-001-site1.btempurl.com/api/User', credentials , options).pipe(
            switchMap((response: any) =>
        {


                 console.log('response' ,  response)


                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            }),

            catchError((error: any) => {
                console.error('An error occurred during sign in:', error);
                // Handle the error (e.g., show an error message)
                return throwError(error); // or return an observable with a default/fallback response
            })
        );
    }

}
