import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {TitleCasePipe , NgFor , NgIf} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FamiliesMembers, Family } from '../../family-tree.types';
// import {FamilyTreeService} from '../family-tree.service' ;
import { FormsModule } from '@angular/forms';
import { FamilyTreeService } from 'app/modules/family-tree/family-tree.service';




@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule,TitleCasePipe, NgFor , NgIf,MatSidenavModule, FormsModule,
    MatInputModule, MatTooltipModule, MatIconModule, RouterOutlet, MatFormFieldModule,
    MatButtonModule, MatSelectModule,MatPaginatorModule],

  // standalone     : true,
  // imports: [MatTableModule, MatPaginatorModule, MatIconModule],

})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age' ,
    'dateBirth' ,
    'placeBirth',
    'gender',
    'dateDeath' ,
    'placeDeath' ,
    'maritalStatus' ,
    'description' ];

  gender = 'before';
  roles: any[];
  data:any[];
//   @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;


  private _unsubscribeAll: Subject<any> = new Subject<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Family>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private _matDialog:MatDialog ,
    private _familyTreeServeice:FamilyTreeService,
    private _router:Router ,
    private _activatedRoute:ActivatedRoute,
    private _changeDetectorRef:ChangeDetectorRef

    )
    {

    }
    // clickedRows = new Set<PeriodicElement>();
    ngOnInit(): void
    {
        // Create the form
        this._familyTreeServeice.getFamilyMembers()
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((data:FamiliesMembers[]) => {
            // Store the data

            this.dataSource= new MatTableDataSource<FamiliesMembers>(data);
            this.dataSource.paginator= this.paginator
            // this.data = data;
            console.log('data Source',this.dataSource);
        });

        this.roles = [
            {
                label      : 'Newest',
                value      : 'newest',
            },
            {
                label      : 'Deadline',
                value      : 'deadline',
            },

        ];

    }

    onBackdropClicked(): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    // Add a relationship
    createMember(type:'member'):void
    {
        console.log('Members');

        // Create the task
        this._familyTreeServeice.createMember(type).subscribe((newFamilyMembers) => {
            // Go to the new task
            this._router.navigate(['./', newFamilyMembers.id], {
                relativeTo: this._activatedRoute,
            });

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }
    showDetails(id:any)
    {
        this._router.navigate(['family', id])
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



