import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';

import { InsurancesComponent } from './insurances.component';
import { InsurancesDetailComponent } from './insurances-detail/insurances-detail.component';
import { catchError, throwError } from 'rxjs';
import { InsurancesService } from './insurances.service';
import { InsurancesListComponent } from './insurances-list/insurances-list.component';
import { ShowDetailsComponent } from './show-detail/show-detail.component';

/**
 * Step resolver
 *
 * @param route
 * @param state
 */

const insurancesResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
     ;
    const insurancesService = inject(InsurancesService);
    const router = inject(Router);

    return insurancesService
        .getInsuranceById(route.paramMap.get('id'))
        .pipe(
            // Error here means the requested insurances is not available
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

const canDeactivateShowDetails = (
    component: ShowDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
) => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    if (!nextState.url.includes('/insurance')) {
        // Let it navigate
        return true;
    }


    // If the next state doesn't contain '/individuals'
    // it means we are navigating away from the
    // individuals app

    // If we are navigating to another individual...
    if (nextRoute.paramMap.get('id')) {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};


/**
 * Can deactivate stepss details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */


export default [
    {
        path: '',
        component: InsurancesComponent,
        resolve: {
            steps: () => inject(InsurancesService).getSteps(),
            // data: () => inject(InsurancesService).getInsurancesData(),
        },
        children: [
            {
                path: 'create-insurance',
                loadChildren: () =>
                import(
                    'app/modules/assets-management/insurances/show-detail/insurances.routes'
                ),
            },
            {
                path: '',

                component: InsurancesListComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getSteps(),
                },
                // children :[
                //     {
                //         path: ':id',
                //         component: ShowDetailsComponent,

                //         resolve: {
                //             endowment: insurancesResolver,
                //         },
                //         canDeactivate: [canDeactivateShowDetails],
                //     },

                // ]





            },
        ],
    },
] as Routes;
