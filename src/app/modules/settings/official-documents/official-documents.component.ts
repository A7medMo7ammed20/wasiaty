import { CurrencyPipe, NgClass, NgFor, NgIf,DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit,TemplateRef, ViewEncapsulation ,ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FuseAlertComponent } from '@fuse/components/alert';
import {MatListModule} from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

export interface Section {
    name: string;
    updated: Date;
  }
@Component({
    selector       : 'settings-official-documents',
    templateUrl    : './official-documents.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [FormsModule,MatMenuModule,  ReactiveFormsModule,MatDialogModule,MatListModule,DatePipe ,FuseAlertComponent, MatRadioModule, NgFor, NgClass, NgIf, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, CurrencyPipe],
})
export class SettingsOfficialDocuments implements OnInit
{
    newFileName: string;
    @ViewChild('fileDialog') fileDialog: TemplateRef<any>;


    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private dialog: MatDialog
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
       }
      
       
      files: Section[] = [
        {
          name: 'Document One',
          updated: new Date('2/20/24'),
        },
        {
          name: 'Document Two',
          updated: new Date('1/18/24'),
        },
        {
          name: 'Document Three',
          updated: new Date('3/18/24'),
        },
      ];
    
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    openDialog() {
        this.dialog.open(this.fileDialog);
      }
    
      uploadFile(event: any) {
        const file = event.target.files[0];
        const newFile: Section = {
          name: file.name,
          updated: new Date()
        };
        this.files.push(newFile);
        this.closeDialog();
      }
    
      closeDialog() {
        this.dialog.closeAll();
      }
}

