import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation ,ViewChild , TemplateRef, ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { BehaviorSubject, filter, map, mergeAll, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
export interface Section {
    avatar: string;
    name: string;
    email: string;
    role: string;
  };

@Component({
    selector       : 'settings-contacts',
    templateUrl    : './contacts.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, NgFor, NgIf, MatSelectModule, MatOptionModule, TitleCasePipe],
})
export class SettingsContactsComponent implements OnInit
{
    members: Section[] = [];

     // members: any[];
    roles: any[];
    private _product: BehaviorSubject<any | null> = new BehaviorSubject(null);
    @ViewChild('fileDialog') fileDialog: TemplateRef<any>;

    newFileName: string;
    // newFileName: string;

    // private _products: BehaviorSubject<any[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(
        private _fuseConfirmationService: FuseConfirmationService,
        private _httpClient: HttpClient,
        private dialog: MatDialog,
        private cdr:ChangeDetectorRef


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
        // Setup the team members
        this.members = [
            {
                avatar: 'assets/images/avatars/male-01.jpg',
                name  : 'Dejesus Michael',
                email : 'dejesusmichael@mail.org',
                role  : 'son',
            },
            {
                avatar: 'assets/images/avatars/male-03.jpg',
                name  : 'Mclaughlin Steele',
                email : 'mclaughlinsteele@mail.me',
                role  : 'brother',
            },
            {
                avatar: 'assets/images/avatars/female-02.jpg',
                name  : 'Laverne Dodson',
                email : 'lavernedodson@mail.ca',
                role  : 'daughter',
            },
            {
                avatar: 'assets/images/avatars/female-03.jpg',
                name  : 'Trudy Berg',
                email : 'trudyberg@mail.us',
                role  : 'daughter',
            },
            {
                avatar: 'assets/images/avatars/male-07.jpg',
                name  : 'Lamb Underwood',
                email : 'lambunderwood@mail.me',
                role  : 'son',
            },
            {
                avatar: 'assets/images/avatars/male-08.jpg',
                name  : 'Mcleod Wagner',
                email : 'mcleodwagner@mail.biz',
                role  : 'brother',
            },
            {
                avatar: 'assets/images/avatars/female-07.jpg',
                name  : 'Shannon Kennedy',
                email : 'shannonkennedy@mail.ca',
                role  : 'sister',
            },
        ];

        // Setup the roles
        this.roles = [
            {
                label      : 'Son',
                value      : 'son',
            },
            {
                label      : 'Daughter',
                value      : 'daughter',
            },
            {
                label      : 'Wife',
                value      : 'wife',
            },
            {
                label      : 'Brother',
                value      : 'brother',
            },
            {
                label      : 'Sister',
                value      : 'sister',
            },
            {
                label      : 'Father',
                value      : 'father',
            },
            {
                label      : 'Mother',
                value      : 'mother',
            },
        ];



    }

    openDialog() {
        const dialogRef = this.dialog.open(AddContactsComponent, {
          width: '500px',
        });
        dialogRef.beforeClosed().subscribe((result: Section) => {

            if(result) {
                this.members.push(result);
                this.cdr.detectChanges();


            }
        });
    }

    deleteContacts(item: any) {
        console.log(item)
        const index = this.members.indexOf(item);
        if (index !== -1) {
          this.members.splice(index, 1);
        }
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
