import { Routes } from '@angular/router';
import { AssetsManagementComponent } from 'app/modules/assets-management/assets-management.component';
// import { TangableWealthComponent } from './tangible-wealthes.component';
import { CommercialRealEstateComponent } from './commercial-real-estate/commercial-real-estate.component';
import { TangableWealthListComponent } from './list/tangible-wealthes-list.component';
import { MixedUsePropertiesComponent } from './mixed-use-properties/mixed-use-properties.component';

export default [
    {
        path: '',
        component: TangableWealthListComponent,

        children: [
            {
                path: '',
                component: TangableWealthListComponent,
            },
            {
                path: 'commercial-real-estate',
                pathMatch: 'full',
                component: CommercialRealEstateComponent,
            },
            {
                path: 'mixed-use-properties',
                pathMatch: 'full',
                component: MixedUsePropertiesComponent,
            },
        ],
    },
] as Routes;
