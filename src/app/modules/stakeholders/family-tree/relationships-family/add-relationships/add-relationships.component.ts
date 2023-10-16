import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder , FormGroup  ,Validators  , FormsModule,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-current-detail',
  standalone: true,
  animations   : fuseAnimations,
  imports: [CommonModule , FormsModule ,FuseAlertComponent ,MatButtonModule,MatIconModule, ReactiveFormsModule,MatFormFieldModule , MatSelectModule],
  templateUrl: './add-relationships.component.html',
  styleUrls: ['./add-relationships.component.scss']
})
export class AddRelationships implements OnInit {
  relationshipsFmillyFrpm:FormGroup;
alert: { type: FuseAlertType;
  message: string } = {
 type   : 'success',
 message: '',
};
showAlert: boolean = false;

constructor(
  public matDialogRef:MatDialogRef<AddRelationships> ,
  private _formBuilder:FormBuilder

)
{

}

  ngOnInit(): void {
   this.relationshipsFmillyFrpm = this._formBuilder.group({
    fullName : ['', [Validators.required ]],
    father : ['', [ ]],
    mother : ['', [ ]],
    childrenMale : ['', [ ]],
    childrenFemale : ['', [ ]],
    spouse : ['', [ ]],
    uncla : ['', [ ]],
    grandpa : ['', [ ]],
   })

}
}
