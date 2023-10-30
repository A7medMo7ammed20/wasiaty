import { Routes } from '@angular/router';
import { AssetsManagementComponent } from 'app/modules/assets-management/assets-management.component';

export default [
    {
        path: '',
        component: AssetsManagementComponent,

        children: [
            {
                path: 'insurances',
                loadChildren: () =>
                    import(
                        'app/modules/assets-management/insurances/insurances.routes'
                    ),
            },
            {
                path: 'endowments',
                loadChildren: () =>
                    import(
                        'app/modules/assets-management/endowment/endowment.routes'
                    ),
            },
            {
                path: 'long-term',
                loadChildren: () =>
                    import(
                        'app/modules/assets-management/long-term-assets/long-term-assets.routes'
                    ),
            },
            {
                path: 'current-assets',
                loadChildren: () =>
                    import(
                        'app/modules/assets-management/current-assets/current-assets.routes'
                    ),
            },
            // {path: 'real-estate' , loadChildren:()=>import('app/modules/assets-management/long-term-assets/long-term-assets.routes')}
        ],
    },
] as Routes;
