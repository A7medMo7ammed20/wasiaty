import { NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { EvaluationService } from 'app/modules/wealth-evaluation/evaluation.service';
import { Contact } from 'app/modules/wealth-evaluation/evaluation.types';
import { Subject, takeUntil } from 'rxjs';
import { WealthManagementService } from 'app/modules/assets-management/wealth-management.service';
import { TangibleWealthes} from 'app/modules/assets-management/wealth-management.types';
import { flattenTangibleWealth } from 'app/modules/assets-management/wealth-management.utliti';
import { MatDialog } from '@angular/material/dialog';
import { EvaluationComponent } from '../evaluation.component';
import { SendForEvaluationComponent } from './send-for-evaluation/send-for-evaluation.component';
import { NestedItemComponent } from './nested-item/nested-item.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { items } from 'app/mock-api/apps/file-manager/data';


interface NavigationItem {
  label: string;
  isOpen?: boolean;
  children?: NavigationItem[];
}

@Component({
    selector: 'evaluation-new-evaluation',
    templateUrl: './new-evaluation.component.html',
    styleUrls: ['./new-evaluation.component.scss'],
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [MatButtonModule, MatIconModule, NgIf, NgFor,NestedItemComponent],
    animations: [
      trigger('fadeInOut', [
          transition(':enter', [
              style({ opacity: 0 }),
              animate('0.5s', style({ opacity: 1 })),
          ]),
          transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
      ]),
  ],
})
export class NewEvaluationComponent implements OnInit, OnDestroy {
    @Input() drawer: MatDrawer;
    @ViewChild(NestedItemComponent) nestedItemComponent: NestedItemComponent;
    contacts: Contact[] = [];
    wealthAssets: TangibleWealthes[]=[];
    flattenedWealth: any[];
    openItems = new Set<string>();
    currentOpenItem: NavigationItem = null;
    currentOpenSubItem: NavigationItem = null;
 
    navigationItems: NavigationItem[] = [
      {
        label: 'Current Touchuable Assets',
        isOpen: false,
        children: [
          { label: 'Supplies', isOpen: false, children: [
            { label: 'office equipment' },
            { label: 'manufacturing supplies' },
            // Add more children as needed
          ] },
          { label: 'Mutual funds' },
          { label: 'Marketable securities', isOpen: false, children: [
            { label: 'treasury bills' },
            { label: 'stocks' },
            // Add more children as needed
          ] },
          { label: 'Cash' },
          // Add more children as needed
        ]
      },
      {
        label: 'Fixed Touchuable Assets',
        isOpen: false,
        children: [
          { label: 'Real state', isOpen: false, children: [
            { label: 'Lands' },
            { label: 'Buidings' },
            // Add more children as needed
          ] },
          { label: 'Machinery' },
          // Add more children as needed
        ]
      },
      {
        label: 'Definite intangible assets',
        isOpen: false,
        children: [
          { label: 'Bellatrix Lestrange', isOpen: false, children: [
            { label: 'The Burrow' },
            { label: 'Hogsmeade' },
            // Add more children as needed
          ] },
          { label: 'Remus Lupin' },
          { label: 'Luna Lovegood', isOpen: false, children: [
            { label: 'Number 4 Privet Drive' },
            { label: 'The Hog\'s Head Inn' },
            // Add more children as needed
          ] },
          { label: 'Harry Potter' },
          { label: 'Dobby', isOpen: false, children: [
            { label: 'The Three Broomsticks' },
            { label: 'Honeyduke\'s Sweetshop' },
            // Add more children as needed
          ] },
          { label: 'Ron Weasley' },
          // Add more children as needed
        ]
      },
      {
        label: ' Indefinite intangible assets',
        isOpen: false,
        children: [
          { label: 'Severus Snape', isOpen: false, children: [
            { label: 'Forest of Dean' },
            { label: 'Godric\'s Hollow' },
            // Add more children as needed
          ] },
          { label: 'Draco Malfoy' },
          // Add more children as needed
        ]
      },
      // Add more items as needed
    ];
    
  




    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _EvaluationService: EvaluationService,
                private _WealthService: WealthManagementService,
                private _NewEvaluationDialog: MatDialog,
                private router: Router,
               ) 
        {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    navigateToDetail(item: TangibleWealthes): void {
      // Add your navigation logic here
      // For example, navigate to a detail component using the router
      this.router.navigate(['/detail', item.id]);
    }
//--------------------------------------------------------------------------------------------------------------
                                        //  methods
//--------------------------------------------------------------------------------------------------------------

toggleOpenItem(item: NavigationItem): void {
  // If the clicked item is already open, close it
  if (item === this.currentOpenItem && item.isOpen) {
    item.isOpen = false;
    this.closeAllItems(item.children);
    this.currentOpenItem = null; // Reset the currentOpenItem
  } else {
    // Close the current open item (if any)
    if (this.currentOpenItem) {
      this.currentOpenItem.isOpen = false;
      this.closeAllItems(item.children);
    }

    // Open the clicked item
    item.isOpen = true;
    this.currentOpenItem = item;
  }
}


toggleOpenSubItem(subItem: NavigationItem): void {
  // If the clicked subItem is already open, close it
  if (subItem === this.currentOpenSubItem && subItem.isOpen) {
    subItem.isOpen = false;
    this.closeAllItems(subItem.children);
    this.currentOpenSubItem = null; // Reset the currentOpenSubItem
  } else {
     //Close the current open subItem (if any)
    if (this.currentOpenSubItem) {
      this.currentOpenSubItem.isOpen = false;
      this.closeAllItems(this.currentOpenSubItem.children);
    }

    // Open the clicked subItem
    subItem.isOpen = true;
    this.currentOpenSubItem = subItem;
  }
}

//  close all subitems of parent
closeAllItems(items:NavigationItem[]){

  for(let item of items){
    item.isOpen=false;
    if(item.children && item.children.length >0){
      this.closeAllItems(item.children);
    }
  }
}

  
    // Add this method to check if an item has children
    hasChildren(item: NavigationItem): boolean {
      return item.children && item.children.length > 0;
    }
    

    
    ngOnInit(): void {
        // Contacts
        this._EvaluationService.contacts$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contacts: Contact[]) => {
                this.contacts = contacts;
          
            });


            // get all non evaluated Assets Wealth for Evaluation 

            this._WealthService.tangableWealthes$;
            this._WealthService.getTangableWealth()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((_wealthAssets: TangibleWealthes[]) => {
                this.wealthAssets = _wealthAssets;
                //this.flattenedWealth = flattenTangibleWealth(this.wealthAssets);
               
              
            });
    }

/**
 *        Do check NG
 */
ngDoCheck() {


 
  }
    /**
     * Open New Evaluation
     */

    openNewEvaluationDialog(){

        // Open the dialog
       
        const dialogRef = this._NewEvaluationDialog.open(SendForEvaluationComponent);

        dialogRef.afterClosed()
            .subscribe((result) =>
            {
                console.log('Compose dialog was closed!');
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
