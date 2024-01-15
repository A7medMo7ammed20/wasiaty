import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AuthFaceVerificationComponent } from '../face-verification/face-verification.component';
import { AuthService } from 'app/core/auth/auth.service';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import { NgIf } from '@angular/common';
import { Subject } from 'rxjs';
@Component({
    selector: 'auth-complete-vdentity-verification',
    templateUrl: './complete-vdentity-verification.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatInputModule, MatIconModule, NgIf, WebcamModule],

})
export class CompleteVdentityVerificationComponent implements OnInit, OnDestroy {
    selectedImage: string | null = null;
    showWebcam = false;
    capturedImage: string | null = null;
    stream: any = null;
    status: any = null;
    trigger: Subject<void> = new Subject();
    previewImage: string = '';
    btnLabel: string = 'Capture image';
    constructor(public matDialogRef: MatDialogRef<CompleteVdentityVerificationComponent>,
        private _matDialog: MatDialog,
        private _authService: AuthService,
        private _changeDetectorRef: ChangeDetectorRef

    ) { }

    ngOnInit(): void { }

    ngOnDestroy(): void { }


        // change dialog to face verification// Function to navigate to the face verification component
goToFaceVerification() {
    // Open the face verification dialog
    this._matDialog
        .open(AuthFaceVerificationComponent, { autoFocus: false })
        .afterClosed()
        .subscribe(() => {
            // Handle dialog close if needed
        });

    // Mark for check to ensure change detection
    this._changeDetectorRef.markForCheck();

    // Close the current dialog
    this.matDialogRef.close();
}

// Function to handle file selection (when user selects an image file)
onFileSelected(event: any) {
    // Get the selected file
    const file = event.target.files[0];

    // Read and set the image from the selected file
    this.readAndSetImage(file);
}

// Function to read and set the image from the selected file
readAndSetImage(file: File) {
    // Create a FileReader to read the selected file
    const reader = new FileReader();

    // Event listener for when the FileReader finishes reading the file
    reader.onload = (e) => {
        // Convert the image to a string
        const selectedImage = e.target?.result as string;

        // Set the selected image in the authService
        this._authService.setSelectedImage(selectedImage);

        // Navigate to the face verification component
        this.goToFaceVerification();
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(file);

    // Mark for check to ensure change detection
    this._changeDetectorRef.markForCheck();
}

// Observable to trigger webcam snapshot
get $trigger() {
    return this.trigger.asObservable();
}

// Function called when a photo is captured by the webcam
snapShot(event: WebcamImage) {
    console.log(event);
    // Set the preview image to the captured image
    this.previewImage = event.imageAsDataUrl;
    // Update the button label
    this.btnLabel = 'Re Capture image';
}

// Function to stop the webcam
stopWebcam() {
    // Check if the webcam stream is active
    if (this.stream) {
        // Get all tracks from the webcam stream and stop each track
        const tracks = this.stream.getTracks();
        tracks.forEach((track: any) => track.stop());
        // Set the stream to null
        this.stream = null;
    }
}

// Function to toggle the webcam on/off
toggleWebcam(even: any) {
    // Try to access the webcam
    navigator.mediaDevices.getUserMedia({
        video: {
            height: { ideal: 480, max: 720 },
            width: { ideal: 640, max: 1280 }
        }
    }).then((res) => {
        // If successful, set the stream and update status and button label
        console.log("response", res);
        this.stream = res;
        this.status = 'My camera is accessing';
        this.btnLabel = 'Capture image';
    }).catch((err) => {
        // If unsuccessful, handle errors and update status
        console.log(err);
        if (err?.message === 'Permission denied') {
            this.status = 'Permission denied please try again by approving the access';
        } else {
            this.status = 'You may not have a camera system, Please try again ... ';
        }
    });
}

// Function called when the capture image button is clicked
captureImage() {
    // Trigger the webcam snapshot
    this.trigger.next();
    // Stop the webcam after capturing the image
    this.stopWebcam();
}

// Function to proceed after capturing an image
proceed() {
    // Set the captured image in the authService
    this._authService.setSelectedImage(this.previewImage);
    // Navigate to the face verification component
    this.goToFaceVerification();
    // Mark for check to ensure change detection
    this._changeDetectorRef.markForCheck();
}

    closeDialog() {
        this.matDialogRef.close();
    }


}
