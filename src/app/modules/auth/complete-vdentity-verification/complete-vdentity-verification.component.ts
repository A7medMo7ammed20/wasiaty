import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink  } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AuthFaceVerificationComponent } from '../face-verification/face-verification.component';

@Component({
    selector     : 'auth-complete-vdentity-verification',
    templateUrl  : './complete-vdentity-verification.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports: [RouterLink, MatButtonModule,  MatInputModule, MatIconModule],

})
export class CompleteVdentityVerificationComponent implements OnInit, OnDestroy
{
    
    /**
     * Constructor
     */
    constructor(
        public matDialogRef: MatDialogRef<CompleteVdentityVerificationComponent>,
        private _matDialog: MatDialog,
       
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
    goToFaceVerification()
    {
        this._matDialog.open(AuthFaceVerificationComponent, {autoFocus: false})
        .afterClosed()
        .subscribe(() =>
        {
            // Go up twice because card routes are set up like this; "card/CARD_ID"
            // this._router.navigate(['./../..'], {relativeTo: this._activatedRoute});
        });
        this.matDialogRef.close()
        
    }
}
