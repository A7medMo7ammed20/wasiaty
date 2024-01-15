import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import {
    stepTwo,
    steps as stepsData,
    typeInfo, insuranceData
} from 'app/mock-api/insurance/data';
import { InsuranceData } from 'app/modules/assets-management/insurances/insurance.types';
import { Steps } from 'app/shared/types/step.types';
// import { Steps } from 'app/modules/assets-management/insurances/insurance.types';
import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InsurancesMockApi {
    // private _steps: Steps[] = stepsData;
    private _step: Steps = stepsData;
    private _typeInfo: Steps = typeInfo;
    private _stepTwo: Steps = stepTwo;


    // data insurance

    private _insuranceData: InsuranceData[] = insuranceData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
        this.registerHandlersStep();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
 /**
     * Register Mock API handlers
     */

    registerHandlers():void
    {
        this._fuseMockApiService.onGet('api/insurances/all').reply(() => {
            // Clone the steps
            const insurances = cloneDeep(this._insuranceData);
            // Sort the Tangibles by the name field by default
            // insurances.sort((a, b) => a.name.localeCompare(b.name));

            // Return the response
            return [200, insurances];
        });

        this._fuseMockApiService
        .onDelete('api/insurances/insurance')
        .reply(({ request }) => {
            // Get the id
            const id = request.params.get('id');

            // Find the individual and delete it
            this._insuranceData.forEach((item, index) => {
                if (item.id.toString() === id) {
                    this._insuranceData.splice(index, 1);
                }
            });

            // Return the response
            return [200, true];
        });

         // -----------------------------------------------------------------------------------------------------
        // @ insurance - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/insurance/update-insurance')
            .reply(({ request }) => {
                // Get the id and insurance
                const id = request.body.id;
                const insurance = cloneDeep(request.body.insurance);
                console.log('insurance', request.body.insurance);

                // Prepare the updated insurance
                let updatedinsurance = null;

                // Find the insurance and update it
                this._insuranceData.forEach((item, index, insurances) => {
                    if (item.id === id) {
                        // Update the insurance
                        insurances[index] = assign({}, insurances[index], insurance);

                        // Store the updated insurance
                        updatedinsurance = insurances[index];
                    }
                });

                return [200, updatedinsurance];
            });

    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers Step
     */
    registerHandlersStep(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onGet('api/step/all').reply(() => {
            // Clone the steps
            const steps = cloneDeep(this._step);

            // Sort the steps by the name field by default
            // steps.sort((a, b) => a.title.localeCompare(b.title));

            // Return the response
            return [200, steps];
        });
        this._fuseMockApiService.onGet('api/step/getType').reply(() => {
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
            .onGet('api/steps/step')
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
        this._fuseMockApiService.onPost('api/steps/step').reply(() => {
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
            .onPatch('api/steps/step')
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
            .onDelete('api/steps/step')
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

        this._fuseMockApiService
            .onGet('api/stepTwo-insurance/getType')
            .reply(() => {
                // Clone the steps
                const typeInfo = cloneDeep(this._stepTwo);

                // Sort the typeInfo by the name field by default
                // typeInfo.sort((a, b) => a.title.localeCompare(b.title));

                // Return the response
                return [200, typeInfo];
            });
    }
}
