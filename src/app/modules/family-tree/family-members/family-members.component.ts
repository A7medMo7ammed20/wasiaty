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
import { DetailMemberComponent } from './detail-member/detail-member.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { FamilyTreeService } from '../family-tree.service';

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
  selector: 'app-family-members',
  standalone: true,
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.scss'],

  imports: [
    MatTableModule,
    TableComponent ,
    TitleCasePipe,
    NgFor , NgIf,
    MatSidenavModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    RouterOutlet,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule

],


})
export class FamilyMemberComponent {
    displayedColumns: string[] = ['fullName', 'mother', 'father', 'childrenMale' , 'childrenFemale' ,'spouse' ,'grandpa' ];
    dataSource = new MatTableDataSource<PeriodicElement>;
    position = 'before';
    roles: any[];

    @ViewChild('matDrawer', { static:true }) matDrawer: MatDrawer;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    drawerMode:'side' | 'over' ;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }


  constructor(
    private _familyTreeServeice:FamilyTreeService ,
    private _router: Router ,
    private _activatedRoute : ActivatedRoute ,
    private _changeDetectorRef: ChangeDetectorRef


  ) { }


  ngOnInit(): void {

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
  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }
  onBackdropClicked(): void
    {
        // Go back to the list
        this._router.navigate(['./'], {relativeTo: this._activatedRoute});

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
    createFamilyMember(type:'family'):void
    {

        // Create the task
        this._familyTreeServeice.createMember(type).subscribe((newFamily) => {
            // Go to the new task
            this._router.navigate(['./', newFamily.id], {
                relativeTo: this._activatedRoute,
            });

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

}

