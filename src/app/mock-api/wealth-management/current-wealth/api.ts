import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { familiesMembers  } from 'app/mock-api/family-members/data';
import { FamiliesMembers } from 'app/modules/family-tree/family-tree.types';

import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FamilyMembersMockApi
{
    private _familyMembers: any[] = familiesMembers;
    private _familyMember: any = familiesMembers;


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
        // @ familys - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onGet('api/family-tree/familys-members')
        .reply(() => [200, cloneDeep(this._familyMembers)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Data - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onGet('api/family-tre/family-members')
        .reply(() => [200, cloneDeep(this._familyMember)]);
        // -----------------------------------------------------------------------------------------------------
        // @ family - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onPost('api/family-tree/family-members')
        .reply(({request}) =>
        {
            // Generate a new family
            const newfamily:FamiliesMembers = {
                id       : FuseMockApiUtils.guid(),
                firstName     : '',
                lastName    : '',
                age: 0,
                dateBirth  : null,
                placeBirth    : '',
                gender    : '',
                dateDeath : null,
                placeDeath    : '',
                maritalStatus    : '',
                description    : '',
            };
            // Unshift the new family
            this._familyMembers.unshift(newfamily);
            return [
                200,
                newfamily,
            ];
        });



        this._fuseMockApiService
        .onDelete('api/family-tree/family-members')
        .reply(({request}) =>
        {
            // Get the id
            const id = request.params.get('id');

            // Find the family and delete it
            const index = this._familyMembers.findIndex(item => item.id === id);
            this._familyMembers.splice(index, 1);

            return [
                200,
                true,
            ];
        });
           // -----------------------------------------------------------------------------------------------------
        // @ family - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/family-tree/family-members')
            .reply(({request}) =>
            {
                // Get the id and family
                const id = request.body.id;
                const family = cloneDeep(request.body.familyMember);
                // console.log('family' ,request.body.familiesMembers)
                console.log('familyMember' ,request.body.familyMember)
                // console.log('familyMembers' ,request.body.familyMembers)

                // Prepare the updated family Member
                let updatedfamily = null;

                // Find the family and update it
                this._familyMembers.forEach((item, index, familys) =>
                {
                    if ( item.id === id )
                    {
                        // Update the family Member
                        familys[index] = assign({}, familys[index], family);

                        // Store the updated family member
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
