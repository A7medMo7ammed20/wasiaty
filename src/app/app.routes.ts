import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/empty'
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    // Redirect signed-in user to the '/empty'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboard' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.routes'
                    ),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.routes'
                    ),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.routes'
                    ),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.routes'),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.routes'),
            },
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.routes'),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.routes'
                    ),
            },
        ],
    },

    // modules routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import(
                        'app/modules/admin/dashboards/assets-dashboard/assets-dashboard.routes'
                    ),
            },

            {
                path: 'assets-management',
                loadChildren: () =>
                    import(
                        'app/modules/assets-management/assets-management.routes'
                    ),
            },
            // { path: 'indebtedness', loadChildren: () => import('app/modules/indebtedness/indebtedness.routes') },
            {
                path: 'family-tree',
                loadChildren: () =>
                    import('app/modules/family-tree/family-tree.routes'),
            },

            {
                path: 'document-managment',
                children: [
                    {
                        path: 'file-manager',
                        loadChildren: () =>
                            import(
                                'app/modules/document-managment/file-manager/file-manager.routes'
                            ),
                    },
                ],
            },
            {
                path: 'family-tree',
                loadChildren: () =>
                    import('app/modules/family-tree/family-tree.routes'),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('app/modules/settings/settings.routes'),
            },
            {
                path: 'bequest-management',
                loadChildren: () =>
                    import(
                        'app/modules/bequest-managment/bequest-management.routes'
                    ),
            },
            {
                path: 'debt-management',
                loadChildren: () =>
                    import(
                        'app/modules/debt-management/debt-management.routes'
                    ),
            },
            {
                path: 'wealth-evaluation',
                loadChildren: () =>
                    import('app/modules/wealth-evaluation/evaluation.routes'),
            },
        ],
    },
];
