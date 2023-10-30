import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';

import { TitleCasePipe, NgFor, NgIf, I18nPluralPipe } from '@angular/common';
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
import { IndividualDetailComponent } from './individual-detail/individual-detail.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { IndividualService } from './individual.service';
import { MatMenuModule } from '@angular/material/menu';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher/media-watcher.service';
import { Country, Individual } from '../stakeholders.types';

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
    selector: 'app-individual',
    standalone: true,

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './individual.component.html',
    styleUrls: ['./individual.component.scss'],

    imports: [
        MatTableModule,
        TableComponent,
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
        I18nPluralPipe,
        MatMenuModule,
    ],
})
export class IndividualComponent {
    displayedColumns: string[] = [
        'fullName',
        'mother',
        'father',
        'childrenMale',
        'childrenFemale',
        'spouse',
        'grandpa',
    ];
    dataSource = new MatTableDataSource<PeriodicElement>();
    position = 'before';
    roles: any[];

    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    drawerMode: 'side' | 'over' = 'over';

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    individualsCount: number;
    individual$: Observable<Individual[]>;
    selectedIndividual: Individual;
    countries: Country[];

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        private _individualService: IndividualService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,

        private _fuseMediaWatcherService: FuseMediaWatcherService
    ) {}

    ngOnInit(): void {

        this.individual$ = this._individualService.individuals$;
        this._individualService.individuals$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((individuals: Individual[]) => {
                // Update the counts
                this.individualsCount = individuals.length;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the contact
        this._individualService.individual$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contact: Individual) => {
                // Update the selected contact
                this.selectedIndividual = contact;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the countries
        this._individualService.countries$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((countries: Country[]) => {
                // Update the countries
                this.countries = countries;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Subscribe to MatDrawer opened change
        this.matDrawer.openedChange.subscribe((opened) => {
            if (!opened) {
                // Mark for check
                this._changeDetectorRef.markForCheck();
            }
        });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the drawerMode if the given breakpoint is active
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'over';
                } else {
                    this.drawerMode = 'over';
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
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

    //   detailsRelatioships()
    //   {
    //     let dialogRef = this._matDialog.open(CurrentDetailComponent)  ;
    //     dialogRef.afterClosed().subscribe(result=>{

    //     })

    //   }
    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    createFamilyMember(): void {
        // Create the task
        this._individualService.createIndividual().subscribe((newFamily) => {
            // Go to the new task
            this._router.navigate(['./', newFamily.id], {
                relativeTo: this._activatedRoute,
            });

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }
}
