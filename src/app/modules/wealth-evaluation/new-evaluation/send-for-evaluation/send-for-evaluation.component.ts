import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import {  OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-send-for-evaluation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,   
  imports      : [MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf], 
  templateUrl: './send-for-evaluation.component.html',
  styleUrls: ['./send-for-evaluation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendForEvaluationComponent implements OnInit
  {
    evaluationForm: UntypedFormGroup;
        
  
      /**
       * Constructor
       */
      constructor(
          public matDialogRef: MatDialogRef<SendForEvaluationComponent>,
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
          this.evaluationForm = this._formBuilder.group({
              name     : ['', [Validators.required]],
              type     : [''],
              Value    : [''],
              subject  : [''],
            
          });
      }
  
      // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------
  
   
      /**
       * Save and close
       */
      saveAndClose(): void
      {
          // Save the message as a draft
          this.saveAsDraft();
  
          // Close the dialog
          this.matDialogRef.close();
      }
  
      /**
       * Discard the message
       */
      discard(): void
      {
      }
  
      /**
       * Save the message as a draft
       */
      saveAsDraft(): void
      {
      }
  
      /**
       * Send the message
       */
      send(): void
      {
      }
  }
