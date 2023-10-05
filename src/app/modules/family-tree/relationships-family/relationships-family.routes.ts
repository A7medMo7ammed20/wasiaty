import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Routes,
    Router
    } from '@angular/router';
import { RelationshipsFamilyComponent } from './relationships-family.component';
import { RelationDetailsComponent } from './details/details.component';
import { catchError ,throwError } from 'rxjs';
import { FamilyTreeService } from '../family-tree.service';
/**
 * Task resolver
 *
 * @param route
 * @param state
 */
const familyResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const familyService = inject(FamilyTreeService);
    const router = inject(Router);

    return familyService.getFamilyById(route.paramMap.get('id'))
        .pipe(
            // Error here means the requested task is not available
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


const canDeactivateFamilyDetails = (
    component: RelationDetailsComponent,
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

    // If the next state doesn't contain '/bequests'
    // it means we are navigating away from the
    // tasks app
    if ( !nextState.url.includes('/family') )
    {
        // Let it navigate
        return true;
    }

    // If we are navigating to another task...
    if ( nextRoute.paramMap.get('id') )
    {
        // Just navigate
        return true;
    }
console.log('found Error in drawer')
    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};
export default [
    {
        path     : '',

        component: RelationshipsFamilyComponent,
        children:[
            {
                path:':id',
                // pathMatch:'full',
                component:RelationDetailsComponent ,
                resolve :{
                    family:familyResolver
                },
                canDeactivate:[canDeactivateFamilyDetails]

        }
        ]

          },

] as Routes;
