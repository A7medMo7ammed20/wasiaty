import { Component, OnInit, ViewChild, ViewEncapsulation , ViewChildren , ElementRef , QueryList, ChangeDetectorRef} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseCardComponent } from '@fuse/components/card';
import { AuthService } from 'app/core/auth/auth.service';
import { CompleteVdentityVerificationComponent } from '../complete-vdentity-verification/complete-vdentity-verification.component';

@Component({
    selector     : 'auth-face-verification',
    templateUrl  : './face-verification.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink,FuseCardComponent, MatInputModule, MatButtonModule, MatIconModule],
})
export class AuthFaceVerificationComponent implements OnInit
{
    selectedImage: string | null = null;
    constructor( private _authServe:AuthService ,
        private _matDialog: MatDialog
        ,
        private _changeDetectorRef: ChangeDetectorRef,
        public matDialogRef: MatDialogRef<AuthFaceVerificationComponent>,

        )
    {
    }

    ngOnInit(): void
    {
        // this.selectedImage ="./assets/images/face-verification.png";
        this._authServe.selectedImage$.subscribe((image) => {
            this.selectedImage = image;

          });


    }
    backToComplete() {
        // Open the face verification dialog
        this._matDialog
            .open(CompleteVdentityVerificationComponent, { autoFocus: false })
            .afterClosed()
            .subscribe(() => {
                // Handle dialog close if needed
            });

        // Mark for check to ensure change detection
        this._changeDetectorRef.markForCheck();

        // Close the current dialog
        this.matDialogRef.close();
    }
}
