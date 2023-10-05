import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { BequestAnalytics as analyticsData , bequests as bequestsData } from 'app/mock-api/bequest-management/data';
import { assign, cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class BequestManagementMockApi
{
    private _analytic: any = analyticsData;
    private _bequests: any[] = bequestsData;

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
        // -----------------------------------------------------------------------------------------------------
        // @ Data - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/bequest-management')
            .reply(() => [200, cloneDeep(this._analytic)]);
        // -----------------------------------------------------------------------------------------------------
        // @ Bequests - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/bequest-management/bequests')
            .reply(() => [200, cloneDeep(this._bequests)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Bequest - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onPost('api/bequest-management/bequest')
        .reply(({request}) =>
        {
            
            // Generate a new bequest
            const newBequest = {
                id       : FuseMockApiUtils.guid(),
                name     : request.body.type,
                executor    : '',
                description    : '',
                completed: false,
                dueDate  : null,
                Beneficiaries : 1,
            };
            // Unshift the new bequest
            this._bequests.unshift(newBequest);

         

            return [
                200,
                newBequest,
            ];
        });



        this._fuseMockApiService
        .onDelete('api/bequest-management/bequest')
        .reply(({request}) =>
        {
            // Get the id
            const id = request.params.get('id');

            // Find the bequest and delete it
            const index = this._bequests.findIndex(item => item.id === id);
            this._bequests.splice(index, 1);

            return [
                200,
                true,
            ];
        });
           // -----------------------------------------------------------------------------------------------------
        // @ Bequest - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/bequest-management/bequest')
            .reply(({request}) =>
            {
                // Get the id and bequest
                const id = request.body.id;
                const bequest = cloneDeep(request.body.bequest);

                // Prepare the updated bequest
                let updatedbequest = null;

                // Find the bequest and update it
                this._bequests.forEach((item, index, bequests) =>
                {
                    if ( item.id === id )
                    {
                        // Update the bequest
                        bequests[index] = assign({}, bequests[index], bequest);

                        // Store the updated bequest
                        updatedbequest = bequests[index];
                    }
                });

                return [
                    200,
                    updatedbequest,
                ];
            });



    }

    
     
}
