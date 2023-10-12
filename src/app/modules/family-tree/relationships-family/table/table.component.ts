import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FamiliesMembers, Family } from '../../family-tree.types';
// import {FamilyTreeService} from '../family-tree.service' ;
import { FormsModule } from '@angular/forms';
import { FamilyTreeService } from 'app/modules/family-tree/family-tree.service';
import { takeWhile, toNumber } from 'lodash';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatTableModule,
        TitleCasePipe,
        NgFor,
        NgIf,
        MatSidenavModule,
        FormsModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule,
        RouterOutlet,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatPaginatorModule,
    ],

    // standalone     : true,
    // imports: [MatTableModule, MatPaginatorModule, MatIconModule],
})
export class TableComponent implements OnInit {
    displayedColumns: string[] = [
        'fullName',
        'mother',
        'father',
        'childrenMale',
        'childrenFemale',
    ];
    position = 'before';
    roles: any[];
    data: any[];
    //   @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    family: Family[];
    members: FamiliesMembers[];
    newfamily: Family[];
    dataSource = new MatTableDataSource<Family>();
    familyMembers = new MatTableDataSource<FamiliesMembers>();

    constructor(
        private _matDialog: MatDialog,
        private _familyTreeServeice: FamilyTreeService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef //Family Member
    ) {}

    // clickedRows = new Set<PeriodicElement>();
    ngOnInit(): void {
        // Create the form

        this._familyTreeServeice
            .getFamily()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data: Family[]) => {
                // Store the data
                debugger;

                this.family = data;

                // this.data = data;
                console.log(this.dataSource);
            });

        this._familyTreeServeice
            .getFamilyMembers()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((dataFamilyMembers: FamiliesMembers[]) => {
                debugger;
                this.members = dataFamilyMembers;
                this.familyMembers = new MatTableDataSource<FamiliesMembers>(
                    dataFamilyMembers
                );
                this.familyMembers.paginator = this.paginator;
                // this.getMembers();
                this.newfamily = this.assignNamesToFamily(
                    this.family,
                    this.members
                );
                console.log('new Family ', this.newfamily);
                this.dataSource = new MatTableDataSource<Family>(
                    this.newfamily
                );
                this.dataSource.paginator = this.paginator;
            });

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
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.familyMembers.paginator = this.paginator;
    }

    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
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
    // showDetails(id: any) {

    //         let data = this.members.filter((member) =>

    //         );
    //     });
    //     this._router.navigate(['family', id]);
    // }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    /*/////////////////////////////
    ///////////////////////////////
        // Get Family Members
    /////////////////////////////
    ////////////////////////////*/
    assignNamesToFamily(
        families: Family[],
        members: FamiliesMembers[]
    ): Family[] {
        const updatedFamilies: Family[] = []; // Initialize as an empty array

        families.forEach((family) => {
            const updated: Family = { ...family }; // Make a copy of the family

            if (updated.father) {
                const fatherMember = members.find(
                    (member) => member.id === updated.father
                );
                if (fatherMember) {
                    updated.father = `${fatherMember.firstName} ${fatherMember.lastName}`;
                }
            }

            if (updated.mother) {
                const motherMember = members.find(
                    (member) => member.id === updated.mother
                );
                if (motherMember) {
                    updated.mother = `${motherMember.firstName} ${motherMember.lastName}`;
                }
            }

            if (updated.childrenMale) {
                debugger;
                updated.childrenMale.forEach((male, index) => {
                    const childMember = members.find((member) => {
                        if (member.id === male.toString()) {
                            updated.childrenMale.fill(
                                ` ${member.firstName} ${member.lastName}`,
                                index,
                                index + 1
                            );
                        }
                    });
                });
            }

            if (updated.childrenFemale) {
                updated.childrenFemale.forEach((female, index) => {
                    const childMember = members.find((member) => {
                        if (member.id === female.toString()) {
                            updated.childrenFemale.fill(
                                ` ${member.firstName} ${member.lastName}`,
                                index,
                                index + 1
                            );
                        }
                    });
                });
            }

            updatedFamilies.push(updated); // Push the updated family to the array
        });

        return updatedFamilies;
    }

    getMembers() {}
}
