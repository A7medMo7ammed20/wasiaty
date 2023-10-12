import { Routes } from '@angular/router';
import { AssetsManagementComponent } from 'app/modules/assets-management/assets-management.component';
import { TangableWealthComponent } from './tangible-wealthes.component';
import { RealStatePropertiesComponent } from './real-state-properties/real-state-properties.component';
import { TangableWealthListComponent } from './list/tangible-wealthes-list.component';

export default [
    {
        path: '',
        component: TangableWealthComponent,

        children: [
            {
                path: '',
                component: TangableWealthListComponent,
            },
            {
                path: 'real-estate',
                pathMatch: 'full',
                component: RealStatePropertiesComponent,
            },
            {
                path: 'mixed-use-properties',
                pathMatch: 'full',
                component: RealStatePropertiesComponent,
            },
        ],
    },
] as Routes;
