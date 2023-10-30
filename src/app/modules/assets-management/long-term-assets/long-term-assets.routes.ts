import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { LongTermAssetsComponent } from './long-term-assets.component';
// import { TangableWealthComponent } from './tangable-assets/tangible-wealthes.component';
import { IntangableAssetsComponent } from './intangable-assets/intangable-assets.component';
import { CommercialRealEstateComponent } from './tangable-assets/commercial-real-estate/commercial-real-estate.component';

export default [
    {
        path: '',

        component: LongTermAssetsComponent,
        children: [
            {
                path: 'tangible-assets',

                loadChildren: () =>
                    import(
                        'app/modules/assets-management/long-term-assets/tangable-assets/tangible-wealthes.routes'
                    ),
            },
            {
                path: 'intangible-assets',
                pathMatch: 'full',
                component: IntangableAssetsComponent,
            },
            // {
            //     path: 'real-state-properties',
            //     pathMatch: '',
            //     component: IntangableAssetsComponent,
            // },
        ],
    },
] as Routes;
