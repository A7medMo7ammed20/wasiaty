import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';

import { BeneficiariesComponent } from './beneficiaries.component';
import { BeneficiariesDetailComponent } from './beneficiaries-detail/beneficiaries-detail.component';
import { StakeholdersService } from '../stakeholders.service';
import { catchError, throwError } from 'rxjs';
import { BeneficiariesService } from './beneficiaries.service';

/**
 * Individual resolver
 *
 * @param route
 * @param state
 */
const individualResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const individualsService = inject(BeneficiariesService);
    const router = inject(Router);


    return individualsService.getIndividualById(route.paramMap.get('id')).pipe(
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
const canDeactivateIndividualsDetails = (
    component: BeneficiariesDetailComponent,
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
    if (!nextState.url.includes('/beneficiaries')) {
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
        component: BeneficiariesComponent,
        resolve: {
            individual: () => inject(BeneficiariesService).getIndividuals(),
            countries: () => inject(BeneficiariesService).getCountries(),
        },
        children: [
            {
                path: ':id',
                component: BeneficiariesDetailComponent,

                resolve: {
                    individual: individualResolver,
                    countries: () =>
                        inject(BeneficiariesService).getCountries(),
                },
                canDeactivate: [canDeactivateIndividualsDetails],
            },
        ],
    },
] as Routes;
