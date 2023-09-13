import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { CurrentAssetsComponent } from './current-assets.component';
import { CurrentDetailComponent } from './current-detail/current-detail.component';


export default [
    {
        path     : '',
        component: CurrentAssetsComponent,
        children: [
            {
                path     : 'current-detail',
                pathMatch: 'full',
                component: CurrentDetailComponent,
             
            },
      
        
        ],
    },
   
] as Routes;
