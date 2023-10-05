import { Routes } from '@angular/router';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';

export default [
    {
        path     : '',
        component: AuthSignUpComponent,
        children:[
            { path: 'verification', loadChildren: () => import('app/modules/auth/sign-up/verification/verification.routes') },
            { path: 'complete-vdentity-verification', loadChildren: () => import('app/modules/auth/sign-up/complete-vdentity-verification/complete-vdentity-verification.routes') },
            { path: 'face-verification', loadChildren: () => import('app/modules/auth/sign-up/face-verification/face-verification.routes') }

        ]

    },
] as Routes;
