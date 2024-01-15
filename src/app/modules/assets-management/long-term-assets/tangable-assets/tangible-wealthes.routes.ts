import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { AssetsManagementComponent } from 'app/modules/assets-management/assets-management.component';
// import { TangableWealthComponent } from './tangible-wealthes.component';
import { CommercialRealEstateComponent } from './commercial-real-estate/commercial-real-estate.component';
import { TangableWealthListComponent } from './list/tangible-wealthes-list.component';
import { MixedUsePropertiesComponent } from './mixed-use-properties/mixed-use-properties.component';
import { catchError, throwError } from 'rxjs';
import { TangableWealthDetailsComponent } from './details/details.component';
import { LongTermAssetsComponent } from '../long-term-assets.component';
import { TangibleWealthService } from './tangible-wealth.service';




/**
 * Item resolver
 *
 * @param route
 * @param state
 */
const itemResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const fileManagerService = inject(TangibleWealthService);
    const router = inject(Router);

    return fileManagerService.getTangableAssetBranchById(route.paramMap.get('id')).pipe(
        // Error here means the requested item is not available
        catchError((error) =>
        {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        }),
    );
};

/**
 * Can deactivate contacts details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateangableWealthDetails = (
    component: TangableWealthDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot) =>
{
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while ( nextRoute.firstChild )
    {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/contacts'
    // it means we are navigating away from the
    // contacts app


    // If we are navigating to another contact...
    if ( nextRoute.paramMap.get('id') )
    {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    // return component.closeDrawer().then(() => true);
};

/**
 * Folder resolver
 *
 * @param route
 * @param state
 */


export default [
    {
        path: '',
        component: LongTermAssetsComponent,

        children: [
            {
                path: '',
                component: TangableWealthListComponent,
                children:[
                    {
                       path         : ':id',
                        component    : TangableWealthDetailsComponent,
                        // resolve      : {
                        //     item: itemResolver,
                        // },
                        // canDeactivate: [canDeactivateangableWealthDetails],
                    }
                ]
            },


        ],
    },
] as Routes;
