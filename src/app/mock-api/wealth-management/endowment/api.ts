import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';

import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';
import {  Endowments } from './data';
// import { CommercialRealEstates as CommercialRealEstate  , tangableWealthType} from 'app/mock-api/wealth-management/commercial-real-estate/data';
// import { TangibleWealthes } from 'app/modules/assets-management/wealth-management.types';
@Injectable({providedIn: 'root'})
export class EndowmentsMockApi
{
    private _endowments: any[] = Endowments;
    // private _tangibleTypes: any[] = Endowments;



    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {

        this._fuseMockApiService
        .onGet('api/endowments/all')
        .reply(() =>
        {
            // Clone the Tangibles
            const endowments = cloneDeep(this._endowments);

            // Sort the Tangibles by the name field by default
            // endowments.sort((a, b) => a.name.localeCompare(b.name));

            // Return the response
            return [200, endowments];
        });
          // -----------------------------------------------------------------------------------------------------
        // @ Endowment - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/endowments/endowment')
            .reply(({ request }) => {
                // Get the id
                const id = request.params.get('id');

                // Find the individual and delete it
                this._endowments.forEach((item, index) => {
                    if (item.id === id) {
                        this._endowments.splice(index, 1);
                    }
                });

                // Return the response
                return [200, true];
            });


    }
}
