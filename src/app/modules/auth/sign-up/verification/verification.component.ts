import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink , ActivatedRoute } from '@angular/router';
import { FuseAlertComponent } from '@fuse/components/alert';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogRef } from '@angular/material/dialog';
import { CompleteVdentityVerificationComponent } from '../complete-vdentity-verification/complete-vdentity-verification.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector     : 'auth-verification',
    templateUrl  : './verification.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports: [RouterLink, FuseAlertComponent, MatInputModule, MatProgressSpinnerModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule],

})
export class AuthVerificationComponent implements OnInit, OnDestroy
{
    
    constructor(
        public matDialogRef: MatDialogRef<AuthVerificationComponent>,
        private _matDialog: MatDialog,
        private _activatedRoute: ActivatedRoute,
        private _router:Router
    )
    {
    }
    ngOnInit(): void
    {
        
    }
    ngOnDestroy(): void
    {
        
       
    }
    completeVdentityVerification()
    {
        this._matDialog.open(CompleteVdentityVerificationComponent, {autoFocus: false})
        .afterClosed()
        .subscribe(() =>
        {
            // Go up twice because card routes are set up like this; "card/CARD_ID"
            // this._router.navigate(['./../..'], {relativeTo: this._activatedRoute});
            
        });   
        this.matDialogRef.close()
    }
}
