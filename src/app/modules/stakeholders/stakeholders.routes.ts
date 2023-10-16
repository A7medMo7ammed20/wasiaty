import { Routes } from '@angular/router';
import { StakeholdersComponent } from './stakeholders.component';

export default [
    {
        path: '',
        component: StakeholdersComponent,

        children: [
            {
                path: 'family-tree',
                loadChildren: () =>
                    import(
                        'app/modules/stakeholders/family-tree/family-tree.routes'
                    ),
            },
            {
                path: 'individual',
                loadChildren: () =>
                    import(
                        'app/modules/stakeholders/individual/individual.routes'
                    ),
            },
        ],
    },
] as Routes;
