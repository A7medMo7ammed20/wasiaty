import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import {
    typeBequest as checkboxesData,

} from 'app/mock-api/type-bequest/data';
import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypeBequestMockApi {
    private _checkbxes: any[] = checkboxesData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onGet('api/bequest/create-type/checkboxes/all').reply(() => {
            // Clone the checkboxes
            const checkboxes = cloneDeep(this._checkbxes);

            // Sort the checkboxes by the name field by default
            // checkboxes.sort((a, b) => a.name.localeCompare(b.name));

            // Return the response
            return [200, checkboxes];
        });


        // -----------------------------------------------------------------------------------------------------
        // @ checkbox - GET
        // -----------------------------------------------------------------------------------------------------
        // this._fuseMockApiService
        //     .onGet('api/checkboxes/checkbox')
        //     .reply(({ request }) => {
        //         // Get the id from the params
        //         const id = request.params.get('id');

        //         // Clone the checkboxes
        //         const checkboxes = cloneDeep(this._checkbxes);

        //         // Find the checkbox
        //         const checkbox = checkboxes.find((item) => item.id === id);

        //         // Return the response
        //         return [200, checkbox];
        //     });





    }
}
