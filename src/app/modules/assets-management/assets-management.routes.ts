import { Routes } from '@angular/router';
import {AssetsManagementComponent  } from 'app/modules/assets-management/assets-management.component';


export default [
    {
        path     : '',
        component: AssetsManagementComponent,

        children : [
                {path: 'long-term', loadChildren: () => import('app/modules/assets-management/long-term-assets/long-term-assets.routes')},
                {path: 'current-assets', loadChildren: () => import('app/modules/assets-management/current-assets/current-assets.routes')},
                // {path: 'real-estate' , loadChildren:()=>import('app/modules/assets-management/long-term-assets/long-term-assets.routes')}


        ],
    },
] as Routes;
