import { TextFieldModule } from '@angular/cdk/text-field';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation ,Inject, Output , ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsContactsComponent } from '../contacts.component';
export interface Section {
    avatar: string;
    name: string;
    email: string;
    role: string;
  };
@Component({
    selector       : 'add-contacts',
    templateUrl    : './add-contacts.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [FormsModule, ReactiveFormsModule, MatDialogModule,MatFormFieldModule, MatIconModule, MatInputModule, TextFieldModule, MatSelectModule, MatOptionModule, MatButtonModule],
})



export class AddContactsComponent implements OnInit
{
  newMember: Section = {
    avatar: '',
    name: '',
    email: '',
    role: '',
  }
@ViewChild(SettingsContactsComponent) SettingsContactsComponent:SettingsContactsComponent ;
  constructor(
    public dialogRef: MatDialogRef<AddContactsComponent>,
    //   @Inject(MAT_DIALOG_DATA) public data: any
        ) {}
  ngOnInit(): void {

  }

        addMember() {

            this.dialogRef.close(this.newMember);

        }

        cancel() {
          this.dialogRef.close();
        }
      }
