import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';

import { EndowmentsComponent } from './endowment.component';
import { EndowmentsDetailComponent } from './endowment-detail/endowment-detail.component';
// import { StakeholdersService } from '../insurances.service';
import { catchError, throwError } from 'rxjs';
import { EndowmentsService } from './endowment.service';
import { EndowmentsListeComponent } from './endowments-list/endowments-list.component';
// import { InsurancesService } from '../insurances/insurances.service';

/**
 * Individual resolver
 *
 * @param route
 * @param state
 */
const endowmentResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const individualsService = inject(EndowmentsService);
    const router = inject(Router);

    return individualsService.getEndowmentlById(route.paramMap.get('id')).pipe(
        // Error here means the requested individual is not available
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
 * Can deactivate individuals details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateEndowmentDetails = (
    component: EndowmentsDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
) => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/individuals'
    // it means we are navigating away from the
    // individuals app
    if (!nextState.url.includes('/endowment')) {
        // Let it navigate
        return true;
    }

    // If we are navigating to another individual...
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
        component: EndowmentsComponent,
        resolve: {
            steps: () => inject(EndowmentsService).getSteps(),
            // countries: () => inject(EndowmentsService).getCountries(),
        },
        children: [
            {
                path:'create-endowment',
                loadChildren: () =>
                import(
                    'app/modules/assets-management/endowment/insurances-detail/endowment-details.routes'
                ),
            },
            {
                path: '',


                component: EndowmentsListeComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).getSteps(),
                    // countries: () => inject(EndowmentsService).getCountries(),
                },
                children:[



                    {
                        path: ':id',
                        component: EndowmentsDetailComponent,

                        resolve: {
                            endowment: endowmentResolver,
                        },
                        canDeactivate: [canDeactivateEndowmentDetails],
                    },
                ]
            },

        ],
    },



] as Routes;
