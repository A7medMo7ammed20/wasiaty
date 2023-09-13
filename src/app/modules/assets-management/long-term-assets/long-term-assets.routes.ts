import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { LongTermAssetsComponent } from './long-term-assets.component';
import { TangableAssetsComponent } from './tangable-assets/tangable-assets.component';
import { IntangableAssetsComponent } from './intangable-assets/intangable-assets.component';


export default [
    {
        path     : '',

        component: LongTermAssetsComponent,
        children: [
            {
                path     : 'tangible-assets',
                pathMatch: 'full',
                component: TangableAssetsComponent,
             
            },
            {
                path     : 'intangible-assets',
                pathMatch: 'full',
                component: IntangableAssetsComponent,
             
            },
        
        ],
    },
   
] as Routes;
