import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';

import { TitleCasePipe, NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddRelationships } from './add-relationships/add-relationships.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerMode } from '@angular/material/sidenav';
// import {FamilyTreeService} from '../family-tree.service' ;
import { FormsModule } from '@angular/forms';
import { FamilyTreeService } from 'app/modules/stakeholders/family-tree/family-tree.service';
import { TableComponent } from './table/table.component';
import { FamilyTreeComponent } from './falmily-tree/family-tree.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';

export interface PeriodicElement {
    // position:number
    fullName: string;
    mother: string;
    father: string;
    childrenMale: string;
    childrenFemale: string;
    spouse: string;
    uncle: string;
    grandpa: string;
}

@Component({
    selector: 'app-relationships-family',
    standalone: true,
    templateUrl: './relationships-family.component.html',
    styleUrls: ['./relationships-family.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FamilyTreeComponent,
        MatTableModule,
        TableComponent,
        MatRippleModule,
        MatMenuModule,
        TitleCasePipe,
        NgFor,
        NgIf,
        MatSidenavModule,
        FormsModule,
        MatPaginatorModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule,
        RouterOutlet,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
    ],

    // standalone     : true,
    // imports: [MatTableModule, MatPaginatorModule, MatIconModule],
})
export class RelationshipsFamilyComponent implements OnInit {
    displayedColumns: string[] = [
        'fullName',
        'mother',
        'father',
        'childrenMale',
        'childrenFemale',
        'spouse',
        'uncle',
        'grandpa',
    ];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    position = 'before';
    roles: any[];
    data: any;
    selectType: string = 'Table';

    drawerMode: 'side' | 'over';

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    constructor(
        private _matDialog: MatDialog,
        private _familyTreeServeice: FamilyTreeService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}
    clickedRows = new Set<PeriodicElement>();
    ngOnInit(): void {
        // Create the form
        console.log('data source in rel', this.dataSource);

        this.roles = [
            {
                label: 'Newest',
                value: 'newest',
            },
            {
                label: 'Deadline',
                value: 'deadline',
            },
        ];
    }

    detailsRelatioships() {
        let dialogRef = this._matDialog.open(AddRelationships);
        dialogRef.afterClosed().subscribe((result) => {});
    }
    // Add a relationship
    createRelationship(type: 'relationship'): void {
        console.log('Relationship');

        // Create the task
        this._familyTreeServeice
            .createRelationship(type)
            .subscribe((newFamily) => {
                // Go to the new task
                this._router.navigate(['./', newFamily.id], {
                    relativeTo: this._activatedRoute,
                });

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }
    showDetails() {
        console.log('kl;clxkvsdkvk');
    }

    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
const ELEMENT_DATA: PeriodicElement[] = [
    {
        mother: 'mask',
        fullName: 'Ali Ahmad Mohammed',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Ali Mohammed',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Ali',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen Jasm ',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen Mosa',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Basam',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Osamh',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Kalid',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Ahmad',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Kalid',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'Kalid',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
    {
        mother: 'mask',
        fullName: 'Hydrogen',
        father: 'Gasem',
        childrenMale: 'Hgff',
        childrenFemale: 'Rimas',
        spouse: 'Hmdi',
        uncle: 'Aki',
        grandpa: 'alosh',
    },
];
