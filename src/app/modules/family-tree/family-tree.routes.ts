import { Routes } from '@angular/router';
import {FamilyTreeComponent  } from 'app/modules/family-tree/family-tree.component';


export default [
    {
        path     : '',
        component: FamilyTreeComponent,
    
        children : [
                {path: 'family-members', loadChildren: () => import('app/modules/family-tree/family-members/family-members.routes')},
                {path: 'relationships-family', loadChildren: () => import('app/modules/family-tree/relationships-family/relationships-family.routes')},
             
           
        ],
    },
] as Routes;
