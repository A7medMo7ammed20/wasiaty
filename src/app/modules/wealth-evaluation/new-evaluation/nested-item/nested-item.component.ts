import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Input,
    Component,   
} from '@angular/core';
import { NewEvaluationComponent } from '../new-evaluation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SendForEvaluationComponent } from '../send-for-evaluation/send-for-evaluation.component';

interface NavigationItem {
    label: string;
    isOpen?: boolean;
    children?: NavigationItem[];
}
@Component({
    selector: 'app-nested-item',
    standalone: true,
    imports: [CommonModule, NewEvaluationComponent, SendForEvaluationComponent,MatIconModule],
    templateUrl: './nested-item.component.html',
    styleUrls: ['./nested-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class NestedItemComponent {
    @Input() nestedItem: NavigationItem;
    currentOpenSubItem: NavigationItem = null;
    parentNewEvaluation : NewEvaluationComponent; 

    constructor(  private _NewEvaluationDialog: MatDialog,){
     
    }

    toggleOpenSubItem(subItem: NavigationItem): void {
        // If the clicked subItem is already open, close it
        if (subItem === this.currentOpenSubItem && subItem.isOpen) {
            subItem.isOpen = false;
            this.closeAllItems(subItem.children);
            this.currentOpenSubItem = null; // Reset the currentOpenSubItem
        } else {
            // Close the current open subItem (if any)
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
//items.forEach(item=> (item.isOpen=false))
    for(let item of items){
      item.isOpen=false;
      if(item.children && item.children.length > 0){
        this.closeAllItems(item.children);
      }
    }
  }
  openNewEvaluationDialog(){

    // Open the dialog
   
    const dialogRef = this._NewEvaluationDialog.open(SendForEvaluationComponent);

    dialogRef.afterClosed()
        .subscribe((result) =>
        {
            console.log('Compose dialog was closed!');
        });
}
}
