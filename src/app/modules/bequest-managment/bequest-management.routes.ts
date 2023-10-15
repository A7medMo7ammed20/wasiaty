import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { BequestManagementComponent } from './bequest-management.component';
import { BequeqstChartComponent } from './buquest-chart/bequest-chart.component';
import { BequestManagementService } from './bequest-management.service';
import { BequestDetailsComponent } from './details/details.component';
import { catchError, throwError } from 'rxjs';

/**
 * Bequest resolver
 *
 * @param route
 * @param state
 */
const bequestResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const bequestService = inject(BequestManagementService);
    const router = inject(Router);

    return bequestService.getbequestById(route.paramMap.get('id')).pipe(
        // Error here means the requested task is not available
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
 * Can deactivate tasks details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateBequestsDetails = (
    component: BequestDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
) => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/bequests'
    // it means we are navigating away from the
    // tasks app
    if (!nextState.url.includes('/bequest')) {
        // Let it navigate
        return true;
    }

    // If we are navigating to another task...
    if (nextRoute.paramMap.get('id')) {
        // Just navigate
        return true;
    }
    console.log('found Error in drawer ');

    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};
export default [
    {
        path: '',
        component: BequestManagementComponent,

        children: [
            {
                path: '',
                component: BequeqstChartComponent,
                resolve: {
                    data: () => inject(BequestManagementService).getData(),
                },
            },
            {
                path: ':id',
                component: BequestDetailsComponent,
                resolve: {
                    bequest: bequestResolver,
                },
                canDeactivate: [canDeactivateBequestsDetails],
            },

            // {path: 'current-assets', loadChildren: () => import('app/modules/assets-management/current-assets/current-assets.routes')},
        ],
    },
] as Routes;
