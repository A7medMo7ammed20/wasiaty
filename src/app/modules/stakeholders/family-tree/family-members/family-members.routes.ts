import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';

import { FamilyMemberComponent } from './family-members.component';
import { DetailMemberComponent } from './detail-member/detail-member.component';
import { FamilyTreeService } from '../family-tree.service';
import { catchError ,throwError } from 'rxjs';

/**
 * Task resolver
 *
 * @param route
 * @param state
 */
const familyMemberResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const familyService = inject(FamilyTreeService);
    const router = inject(Router);

    return familyService.getFamilyMembersById(route.paramMap.get('id'))
        .pipe(
            // Error here means the Family Member task is not available
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


const canDeactivateFamilyMemberDetails = (
    component: DetailMemberComponent,
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
    if ( !nextState.url.includes('/family-members') )
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
        component: FamilyMemberComponent,
        children:[
            {
                path:':id' ,
                component:DetailMemberComponent,
                resolve:{
                    familyMember:familyMemberResolver,
                    // familyMembesrs:inject(FamilyTreeService).getFamilyMembers()
                },
                canDeactivate:[canDeactivateFamilyMemberDetails]
            }
        ]
    },



] as Routes;
