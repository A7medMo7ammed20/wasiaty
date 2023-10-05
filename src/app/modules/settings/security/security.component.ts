import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector       : 'settings-security',
    templateUrl    : './security.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatButtonModule ,NgFor,NgIf, MatSelectModule,TitleCasePipe],
})
export class SettingsSecurityComponent implements OnInit
{
    securityForm: UntypedFormGroup;
    members: any[];
    roles: any[];

    /**
     * Constructor
     */
    constructor(
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
        // Create the form
        this.securityForm = this._formBuilder.group({
            currentPassword  : [''],
            newPassword      : [''],
            passwordconfirmation      : [''],
            twoStep          : [true],
            userRestrictions: [false],
            accountActivityNotifications: [false],
            setSessionTimeout: [true],
            deviceRecognition: [false],
            digitalCertificateSecurity: [false],
            fraudDetection: [false],
            userSecurityEducation: [false],
            askPasswordChange: [false],
            seamlessUserInteractions: [false],
            completeIdentityVerification: [false],
            zeroTrustSecurity: [false],
            enableMFA: [false],
            secureDeviceBinding: [false],
            remoteAccount: [false],
            setTimebasedAccessRestrictions: [false],
            implementAccountLockout: [false],
        });
       

        // Setup the roles
        this.roles = [
            {
                label      : 'Face Recognized',
                value      : 'face',
            },
            {
                label      : ' Recognized',
                value      : 'recognized',
            },
           
        ];
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
