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
// import { InsurancesDetailComponent } from './insurances-detail/insurances-detail.component';
import { FormsModule } from '@angular/forms';
// import { TableComponent } from './table/table.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
// import { InsurancesService } from './endowment.service';
import { MatMenuModule } from '@angular/material/menu';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher/media-watcher.service';
import {
    Individual,
    Country,
} from 'app/modules/stakeholders/stakeholders.types';
// import { InsurancesService } from '../insurances/insurances.service';
import { BeneficiariesService } from 'app/modules/stakeholders/beneficiaries/beneficiaries.service';
import { TableComponent } from '../table/table.component';
// import { Country, Individual } from '../stakeholders.types';

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
    selector: 'app-endowments-list',
    standalone: true,

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './endowments-list.component.html',
    // styleUrls: ['./endowment.component.scss'],

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
export class EndowmentsListeComponent {


    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    drawerMode: 'side' | 'over' = 'over';

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    individualsCount: number;
    individual$: Observable<Individual[]>;
    selectedIndividual: Individual;
    countries: Country[];

    ///
    beneficiaries: Individual[];
    beneficiariesdataSources = new MatTableDataSource<Individual>();
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
    )
    {

    }

    ngOnInit(): void {


    }
    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    createEndowments(): void {
        // Create the task
         ;

        this._router.navigate(['./', 'create-endowment'], {
            relativeTo: this._activatedRoute.parent,

        });
    }
}
