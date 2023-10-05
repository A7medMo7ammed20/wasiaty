import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { DebtManagementComponent } from './debt-management.component';
import { debtManagementService } from './debt-management.service';
import { DebtListComponent } from './list/list.component';

import { catchError, throwError } from 'rxjs';
import { DebtDetailsComponent } from './details/details.component';

/**
 * debt resolver
 *
 * @param route
 * @param state
 */
const debtResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const debtService = inject(debtManagementService);
    const router = inject(Router);

    return debtService.getdebtById(route.paramMap.get('id')).pipe(
        // Error here means the requested Debt is not available
        catchError((error) => {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        })
    );
};

/**
 * Can deactivate Debts details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateDebtsDetails = (
    component: DebtDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
) => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/Debts'
    // it means we are navigating away from the
    // Debts app
    // if (!nextState.url.includes('/Debt')) {
    //     // Let it navigate
    //     return true;
    // }

    // If we are navigating to another Debt...
    if (nextRoute.paramMap.get('id')) {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};
export default [
    {
        path: '',
        component: DebtManagementComponent,

        children: [
            {
                path: '',

                component: DebtListComponent,
                resolve: {
                    debts: () => inject(debtManagementService).getdebts(),
                },
                children: [
                    {
                        path: ':id',

                        component: DebtDetailsComponent,
                        resolve: {
                            debt: debtResolver,
                        },
                        canDeactivate: [canDeactivateDebtsDetails],
                    },
                ],
            },

            // {path: 'current-assets', loadChildren: () => import('app/modules/assets-management/current-assets/current-assets.routes')},
        ],
    },
] as Routes;
