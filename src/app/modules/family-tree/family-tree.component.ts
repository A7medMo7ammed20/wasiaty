import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
// import { AssetsManagementService } from './family-tree.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-family-tree',
  standalone: true,
  imports: [CommonModule ,RouterOutlet],
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],

})
export class FamilyTreeComponent {


  data: any;

  private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
    constructor(
    //   private _assetsManagementServicee: AssetsManagementService,
      private _router: Router,
  )
  {
  }
    /**
     * On init
     */
    ngOnInit(): void
    {

    }
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
    }
}
