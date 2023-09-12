import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import {AssetsManagementComponent  } from 'app/modules/assets-management/assets-management.component';
import { AssetsManagementService } from 'app/modules/assets-management/assets-management.service';
import { CurrentAssetsComponent } from 'app/modules/assets-management/current-assets/current-assets.component';
import { CurrentDetailComponent } from './current-assets/current-detail/current-detail.component';
import { TangableAssetsComponent } from './long-term-assets/tangable-assets/tangable-assets.component';
import { IntangableAssetsComponent } from './long-term-assets/intangable-assets/intangable-assets.component';
/**
 * Course resolver
 *
 * @param route
 * @param state
 */


export default [
    {
        path     : '',
        component: AssetsManagementComponent,
       
        children : [
            {
                path     : 'current-assets',
                pathMatch: 'full',
                component: CurrentAssetsComponent,
              
              
            },
           
                {
                    path     : 'current-detail',
                    pathMatch: 'full',
                    component: CurrentDetailComponent,
                   
                },
                {
                    path     : 'tangable-assets',
                    pathMatch: 'full',
                    component: TangableAssetsComponent,
                   
                },
                {
                    path     : 'intangable-assets',
                    pathMatch: 'full',
                    component: IntangableAssetsComponent,
                   
                },
             
           
        ],
    },
] as Routes;
