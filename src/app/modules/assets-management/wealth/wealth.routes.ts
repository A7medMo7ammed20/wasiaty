import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { FileManagerDetailsComponent } from 'app/modules/document-managment/file-manager/details/details.component';
import { FileManagerComponent } from 'app/modules/document-managment/file-manager/file-manager.component';
import { FileManagerService } from 'app/modules/document-managment/file-manager/file-manager.service';
import { FileManagerListComponent } from 'app/modules/document-managment/file-manager/list/list.component';
import { catchError, throwError } from 'rxjs';
// import { FileManagerAddFolderComponent } from './add-Folder/add-folder.component';
import { FileManagerAddFolderComponent } from 'app/modules/document-managment/file-manager/add-folder/add-folder.component';
import { WealthComponent } from './wealth.component';
import { WealthListComponent } from './wealth-list/wealth-list.component';


/**
 * Folder resolver
 *
 * @param route
 * @param state
 */
const folderResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const fileManagerService = inject(FileManagerService);
    const router = inject(Router);

    return fileManagerService.getItems(route.paramMap.get('folderId')).pipe(
        // Error here means the requested folder is not available
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
 * Item resolver
 *
 * @param route
 * @param state
 */
const itemResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const fileManagerService = inject(FileManagerService);
    const router = inject(Router);

    return fileManagerService.getItemById(route.paramMap.get('id')).pipe(
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
 * Can deactivate file manager details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateFileManagerDetails = (
    component: FileManagerDetailsComponent,
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

    // If the next state doesn't contain '/file-manager'
    // it means we are navigating away from the
    // file manager app
    if ( !nextState.url.includes('/file-manager') )
    {
        // Let it navigate
        return true;
    }

    // If we are navigating to another item...
    if ( nextState.url.includes('/details') )
    {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};
/////////////////////////////////

/**
 * Can deactivate contacts details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateContactsDetails = (
    component: FileManagerDetailsComponent,
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
    if ( !nextState.url.includes('/file-manager') )
    {
        // Let it navigate
        return true;
    }

    // If we are navigating to another contact...
    if ( nextRoute.paramMap.get('id') )
    {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};


export default [
    {
        path     : '',
        component: WealthComponent,
        children : [
            {
                path     : 'folders/:folderId',
                component: WealthListComponent,
                resolve  : {
                    item: folderResolver,
                },

            },
            {
                path     : '',
                component: WealthListComponent,


            },
        ],
    },
] as Routes;
