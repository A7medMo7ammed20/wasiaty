import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';

import { InsurancesComponent } from './insurances.component';
import { InsurancesDetailComponent } from './insurances-detail/insurances-detail.component';
// import { StakeholdersService } from '../insurances.service';
import { catchError, throwError } from 'rxjs';
import { InsurancesService } from './insurances.service';
import { InsurancesListComponent } from './insurances-list/insurances-list.component';
import { AddingInitComponent } from 'app/layout/common/adding-init/adding-init.component';
import { DescribeTypeComponent } from './describe-type/describe-type.component';
import { DescribePriceComponent } from './describe-price/describe-price.component';

/**
 * Step resolver
 *
 * @param route
 * @param state
 */
const stepsResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const stepssService = inject(InsurancesService);
    const router = inject(Router);

    return stepssService.getStepById(route.paramMap.get('id')).pipe(
        // Error here means the requested steps is not available
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
 * Can deactivate stepss details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateStepsDetails = (
    component: InsurancesDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
) => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;

    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/stepss'
    // it means we are navigating away from the
    // stepss app
    if (!nextState.url.includes('/beneficiaries')) {
        // Let it navigate
        return true;
    }

    // If we are navigating to another steps...
    if (nextRoute.paramMap.get('id')) {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    // return component.closeDrawer().then(() => true);
};

export default [
    {
        path: '',
        component: InsurancesComponent,
        resolve: {
            steps: () => inject(InsurancesService).getSteps(),
        },
        children: [
            {
                path: '',

                component: InsurancesListComponent,
            },
            {
                path: 'create-insurance',

                component: InsurancesDetailComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getSteps(),
                },
                data: {
                    layout: 'empty',
                },
                children: [
                    {
                        path: '',

                        component: AddingInitComponent,
                        resolve: {
                            steps: () => inject(InsurancesService).getSteps(),
                        },
                    },
                    {
                        path: 'Insurance-type',

                        component: AddingInitComponent,
                        resolve: {
                            steps: () =>
                                inject(InsurancesService).getGetTypeInfo(),
                        },
                    },
                    {
                        path: 'describe-type',

                        component: DescribeTypeComponent,
                        resolve: {
                            steps: () =>
                                inject(InsurancesService).getGetTypeInfo(),
                        },
                    },
                    {
                        path: 'describe-price',

                        component: DescribePriceComponent,
                        resolve: {
                            steps: () =>
                                inject(InsurancesService).getGetTypeInfo(),
                        },
                    },
                ],
            },
        ],
    },
] as Routes;
