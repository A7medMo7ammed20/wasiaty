import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
// import {
// stepTwo , steps as stepsData , typeInfo
// } from 'app/mock-api/bequest-management/data';
import { assign, cloneDeep } from 'lodash-es';
import { Observable, from, map } from 'rxjs';
import { BequestAnalytics as analyticsData , bequests as bequestsData } from 'app/mock-api/bequest-management/data';
import { Steps } from 'app/shared/types/step.types';
import { Bequest } from 'app/modules/bequest-managment/bequest-management.types';
import {
    choosePlace,
    steps as stepsData,
    typeInfo,
    reviewEndowment,
} from 'app/mock-api/bequest-management/data';
import { APIUrlEndpoint } from 'app/configs/api-url.interface';
import { environment } from 'environment/environment.development';
import { BequestManagementService } from 'app/modules/bequest-managment/bequest-management.service';
import { MockAPIConfig } from 'app/configs/mock-endpoints.config';
import { ApiService } from '../api.service';
import { BEQUEST_ENDPOINTS } from 'app/modules/bequest-managment/bequest.endpoint';
import { User } from 'app/core/user/user.types';

// import {
//     stepTwo,
//     steps as stepsData,
//     typeInfo
// } from 'app/mock-api/bequest-management/data';
@Injectable({providedIn: 'root'})
export class BequestManagementMockApi
{
    private _analytic: any = analyticsData;
    private _bequests: any[] = bequestsData;

    private _step: Steps = stepsData;
    private _typeInfo: Steps = typeInfo;
    // private _stepTwo: Steps = stepTwo;
    private _bequestData: Bequest[] = bequestsData;
    private _choosePlace: Steps = choosePlace;
    private _reviewEndowment: Steps = reviewEndowment;

    baseUrl = environment.apiBase;
    private readonly userEndpointConfig: APIUrlEndpoint = BEQUEST_ENDPOINTS.find(config => config.mockEndpoint === 'user');
    endpoint: string = 'user'

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService
        , private _bequestManagementService:BequestManagementService
        , private _apiService: ApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
        this.registerHandlersStep();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    // getRegions(env: 'base' | 'mock' = 'mock'): Observable<string[]> {
    //     // const apiUrl = this._bequestManagementService.getApiEndpoint(env, this.endpoint);
    //     const url = `${this.baseUrl}/${this.endpoint}`;

    //     return this._apiService.get<string[]>(url);
    // }


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
        .reply(() => {
            // Clone the steps

            // Sort the Tangibles by the name field by default
            // insurances.sort((a, b) => a.name.localeCompare(b.name));

            // Return the response
            return [200,  cloneDeep(this._analytic)];
        });

        // this._fuseMockApiService
        //     .onGet('api/bequest-management/all')
        //     .reply(() => [200, cloneDeep(this._analytic)]);
        // // -----------------------------------------------------------------------------------------------------
        // @ Bequests - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/bequest-management/bequests')
            .reply(() => {
                // Clone the steps
                // Sort the Tangibles by the name field by default
                // insurances.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200,   cloneDeep(this._bequests)
                ];
            });





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

    registerHandlersStep(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onGet('api/step-bequest/all').reply(() => {
            // Clone the steps
            const steps = cloneDeep(this._step);

            // Sort the steps by the name field by default
            // steps.sort((a, b) => a.title.localeCompare(b.title));

            // Return the response
            return [200, steps];
        });

        this._fuseMockApiService
            .onGet('api/step-bequest/getType')
            .reply(() => {
                // Clone the steps
                const typeInfo = cloneDeep(this._typeInfo);

                // Sort the typeInfo by the name field by default
                // typeInfo.sort((a, b) => a.title.localeCompare(b.title));

                // Return the response
                return [200, typeInfo];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onGet('api/steps-bequest/step')
        .reply(({ request }) => {
            // Get the id from the params
            const id = request.params.get('id');

            // Clone the steps
            const steps = cloneDeep(this._step);

            // Find the step
            // const step = steps.find((item) => item.id === id);

            // Return the response
            return [200, steps];
        });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
        .onPost('api/steps-bequest/step')
        .reply(() => {
            // // Generate a new step
            // const newContact: = {
            //     id: FuseMockApiUtils.guid(),
            //     avatar: null,
            //     name: 'New Contact',
            //     emails: [],
            //     phoneNumbers: [],
            //     job: {
            //         title: '',
            //         company: '',
            //     },
            //     birthday: null,
            //     address: null,
            //     notes: null,
            //     tags: [],
            // };
            // // Unshift the new step
            // this._steps.unshift(newContact);
            // Return the response
            // return [200, newContact];
            return null;
        });
        // -----------------------------------------------------------------------------------------------------
        // @ Contact - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/steps-bequest/step')
            .reply(({ request }) => {
                // Get the id and step
                const id = request.body.id;
                const step = cloneDeep(request.body.step);

                // Prepare the updated step
                let updatedContact = null;

                // Find the step and update it
                // this._step.forEach((item, index, steps) => {
                //     if (item.id === id) {
                //         // Update the step
                //         steps[index] = assign({}, steps[index], step);

                //         // Store the updated step
                //         updatedContact = steps[index];
                //     }
                // });

                // Return the response
                return [200, updatedContact];
            });
        // -----------------------------------------------------------------------------------------------------
        // @ Contact - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/steps-bequest/step')
            .reply(({ request }) => {
                // Get the id
                const id = request.params.get('id');

                // Find the step and delete it
                // this._steps.forEach((item, index) => {
                //     if (item.id === id) {
                //         this._steps.splice(index, 1);
                //     }
                // });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Avatar - POST
        // -----------------------------------------------------------------------------------------------------

        /**
         * Read the given file as mock-api url
         *
         * @param file
         */
        const readAsDataURL = (file: File): Promise<any> =>
        // Return a new promise
        new Promise((resolve, reject) => {
            // Create a new reader
            const reader = new FileReader();

            // Resolve the promise on success
            reader.onload = (): void => {
                resolve(reader.result);
            };

            // Reject the promise on error
            reader.onerror = (e): void => {
                reject(e);
            };

            // Read the file as the
            reader.readAsDataURL(file);
        });

        // choosePlace

        this._fuseMockApiService
            .onGet('api/stepTwo-bequest/getType')
            .reply(() => {
                // Clone the steps
                const typeInfo = cloneDeep(this._choosePlace);

                // Sort the typeInfo by the name field by default
                // typeInfo.sort((a, b) => a.title.localeCompare(b.title));

                // Return the response
                return [200, typeInfo];
            });
            this._fuseMockApiService
            .onGet('api/stepThree-endowment/getType')
            .reply(() => {
                // Clone the steps
                const typeInfo = cloneDeep(this._reviewEndowment);

                // Sort the typeInfo by the name field by default
                // typeInfo.sort((a, b) => a.title.localeCompare(b.title));

                // Return the response
                return [200, typeInfo];
            });

        this._fuseMockApiService
            .onPost('api/steps/avatar')
            .reply(({ request }) => {
                // Get the id and avatar
                const id = request.body.id;
                const avatar = request.body.avatar;

                // Prepare the updated step
                let updatedContact: any = null;

                // In a real world application, this would return the path
                // of the saved image file (from host, S3 bucket, etc.) but,
                // for the sake of the demo, we encode the image to base64
                // and return it as the new path of the uploaded image since
                // the src attribute of the img tag works with both image urls
                // and encoded images.
                return from(readAsDataURL(avatar)).pipe(
                    map((path) => {
                        // Find the step and update it
                        // this._steps.forEach((item, index, steps) => {
                        //     if (item.id === id) {
                        //         // Update the avatar
                        //         steps[index].icon = path;

                        //         // Store the updated step
                        //         updatedContact = steps[index];
                        //     }
                        // });

                        // Return the response
                        return [200, updatedContact];
                    })
                );
            });

        // choosePlace


    }


}
