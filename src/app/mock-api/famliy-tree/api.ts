import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { familys as familyData } from 'app/mock-api/famliy-tree/data';
import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FamilyTreeMockApi
{
    private _families: any[] = familyData;


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

        // -----------------------------------------------------------------------------------------------------
        // @ familys - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/family-tree/familys')
            .reply(() => [200, cloneDeep(this._families)]);

        // -----------------------------------------------------------------------------------------------------
        // @ family - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onPost('api/family-tree/family')

        .reply(({request}) =>
        {

            // Generate a new family
            const newfamily = {
                id       : FuseMockApiUtils.guid(),
                name     : request.body.type,
                executor    : '',
                description    : '',
                completed: false,
                dueDate  : null,
                Beneficiaries : 1,
            };
            // Unshift the new family
            this._families.unshift(newfamily);



            return [
                200,
                newfamily,
            ];
        });



        this._fuseMockApiService
        .onDelete('api/family-tree/family')
        .reply(({request}) =>
        {
            // Get the id
            const id = request.params.get('id');

            // Find the family and delete it
            const index = this._families.findIndex(item => item.id === id);
            this._families.splice(index, 1);

            return [
                200,
                true,
            ];
        });
           // -----------------------------------------------------------------------------------------------------
        // @ family - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/family-tree/family')
            .reply(({request}) =>
            {
                // Get the id and family
                const id = request.body.id;
                const family = cloneDeep(request.body.family);

                // Prepare the updated family
                let updatedfamily = null;

                // Find the family and update it
                this._families.forEach((item, index, familys) =>
                {
                    if ( item.id === id )
                    {
                        // Update the family
                        familys[index] = assign({}, familys[index], family);

                        // Store the updated family
                        updatedfamily = familys[index];
                    }
                });

                return [
                    200,
                    updatedfamily,
                ];
            });



    }
}
