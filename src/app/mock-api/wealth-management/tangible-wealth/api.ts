import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { items as itemsData } from 'app/mock-api/apps/file-manager/data';

import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';
import { tangableWealth as tangableData  , tangableWealthType} from 'app/mock-api/wealth-management/tangible-wealth/data';
import { TangibleWealthes } from 'app/modules/assets-management/wealth-management.types';
@Injectable({providedIn: 'root'})
export class TangibleWealthMockApi
{
    private _tangables: any[] = tangableData;
    private _tangibleTypes: any[] = tangableWealthType;
    private _items: any[] = itemsData;



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
        .onGet('api/wealth-managements/all')
        .reply(() =>
        {
            // Clone the Tangibles
            const tangables = cloneDeep(this._tangables);

            // Sort the Tangibles by the name field by default
            tangables.sort((a, b) => a.name.localeCompare(b.name));

            // Return the response
            return [200, tangables];
        });

        this._fuseMockApiService
        .onGet('api/wealth-managements/tangible-types')
        .reply(() =>
        {
            // Clone the Tangibles
            const tangablesTypes = cloneDeep(this._tangibleTypes);

            // Sort the Tangibles by the name field by default
            tangablesTypes.sort((a, b) => a.wealthType.localeCompare(b.wealthType));

            // Return the response
            return [200, tangablesTypes];
        });
        // -----------------------------------------------------------------------------------------------------
        // @ tangableWealthes - GET
        // -----------------------------------------------------------------------------------------------------
        // this._fuseMockApiService
        // .onGet('api/wealth-management/tangible-wealthes')
        // .reply(() => [200, cloneDeep(this._tangableWealthes)]);

        // -----------------------------------------------------------------------------------------------------
        // @ tangableWealth - GET
        // -----------------------------------------------------------------------------------------------------

        // -----------------------------------------------------------------------------------------------------
        // @ tangableWealth - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onPost('api/wealth-management/tangible-wealthes')
        .reply(({request}) =>
        {
            // Generate a new tangableWealth
            const newTangable:any = {
                id              : FuseMockApiUtils.guid(),
                wealthType      : 0,
                name            : '',
                acquisitionValue: 0,
                method          : '',
                status          : '',
                counter         : 0,
                wealthTypeRoute: ''

            };
            // Unshift the new tangible-wealthes
            this._tangables.unshift(newTangable);
            return [
                200,
                newTangable,
            ];
        });

     // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onPost('api/apps/assetBranch/item')
        .reply(() =>
        {
            // Generate a new contact
            const newContact = {
                id          : FuseMockApiUtils.guid(),
                name        : 'New ',
                description       : 'sjhd sjhcs',
            };

            // Unshift the new contact
            this._items.unshift(newContact);
                debugger
            // Return the response
            return [200, newContact];
        });

        // this._fuseMockApiService
        // .onDelete('api/wealth-management/tangible-wealthes')
        // .reply(({request}) =>
        // {
        //     // Get the id
        //     const id = request.params.get('id');

        //     // Find the tangible-wealthes and delete it
        //     const index = this._tangableWealth.findIndex(item => item.id === id);
        //     this._tangableWealth.splice(index, 1);

        //     return [
        //         200,
        //         true,
        //     ];
        // });
           // -----------------------------------------------------------------------------------------------------
        // @ tangible-wealthes - PATCH
        // -----------------------------------------------------------------------------------------------------

    }
}
