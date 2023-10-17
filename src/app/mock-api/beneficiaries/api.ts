import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import {
    individuals as individualsData,
    countries as countriesData,
    tags as tagsData,
} from 'app/mock-api/beneficiaries/data';
import { assign, cloneDeep } from 'lodash-es';
import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BeneficiariesMockApi {
    private _individuals: any[] = individualsData;
    private _countries: any[] = countriesData;
    private _tags: any[] = tagsData;

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
        this._fuseMockApiService.onGet('api/individuals/all').reply(() => {
            // Clone the individuals
            const individuals = cloneDeep(this._individuals);

            // Sort the individuals by the name field by default
            individuals.sort((a, b) => a.name.localeCompare(b.name));

            // Return the response
            return [200, individuals];
        });

        // -----------------------------------------------------------------------------------------------------
        // @ Contacts Search - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/individuals/search')
            .reply(({ request }) => {
                // Get the search query
                const query = request.params.get('query');

                // Clone the individuals
                let individuals = cloneDeep(this._individuals);

                // If the query exists...
                if (query) {
                    // Filter the individuals
                    individuals = individuals.filter(
                        (individual) =>
                            individual.name &&
                            individual.name
                                .toLowerCase()
                                .includes(query.toLowerCase())
                    );
                }

                // Sort the individuals by the name field by default
                individuals.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, individuals];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/individuals/individual')
            .reply(({ request }) => {
                // Get the id from the params
                const id = request.params.get('id');

                // Clone the individuals
                const individuals = cloneDeep(this._individuals);

                // Find the individual
                const individual = individuals.find((item) => item.id === id);

                // Return the response
                return [200, individual];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/individuals/individual')
            .reply(() => {
                // Generate a new individual
                const newContact = {
                    id: FuseMockApiUtils.guid(),
                    avatar: null,
                    name: 'New Contact',
                    emails: [],
                    phoneNumbers: [],
                    job: {
                        title: '',
                        company: '',
                    },
                    birthday: null,
                    address: null,
                    notes: null,
                    tags: [],
                };

                // Unshift the new individual
                this._individuals.unshift(newContact);

                // Return the response
                return [200, newContact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/individuals/individual')
            .reply(({ request }) => {
                // Get the id and individual
                const id = request.body.id;
                const individual = cloneDeep(request.body.individual);

                // Prepare the updated individual
                let updatedContact = null;

                // Find the individual and update it
                this._individuals.forEach((item, index, individuals) => {
                    if (item.id === id) {
                        // Update the individual
                        individuals[index] = assign(
                            {},
                            individuals[index],
                            individual
                        );

                        // Store the updated individual
                        updatedContact = individuals[index];
                    }
                });

                // Return the response
                return [200, updatedContact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/individuals/individual')
            .reply(({ request }) => {
                // Get the id
                const id = request.params.get('id');

                // Find the individual and delete it
                this._individuals.forEach((item, index) => {
                    if (item.id === id) {
                        this._individuals.splice(index, 1);
                    }
                });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Countries - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/individuals/countries')
            .reply(() => [200, cloneDeep(this._countries)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService

            .onGet('api/individuals/tags')
            .reply(() => [200, cloneDeep(this._tags)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/individuals/tag')
            .reply(({ request }) => {
                // Get the tag
                const newTag = cloneDeep(request.body.tag);

                // Generate a new GUID
                newTag.id = FuseMockApiUtils.guid();

                // Unshift the new tag
                this._tags.unshift(newTag);

                // Return the response
                return [200, newTag];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/individuals/tag')
            .reply(({ request }) => {
                // Get the id and tag
                const id = request.body.id;
                const tag = cloneDeep(request.body.tag);

                // Prepare the updated tag
                let updatedTag = null;

                // Find the tag and update it
                this._tags.forEach((item, index, tags) => {
                    if (item.id === id) {
                        // Update the tag
                        tags[index] = assign({}, tags[index], tag);

                        // Store the updated tag
                        updatedTag = tags[index];
                    }
                });

                // Return the response
                return [200, updatedTag];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tag - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/individuals/tag')
            .reply(({ request }) => {
                // Get the id
                const id = request.params.get('id');

                // Find the tag and delete it
                this._tags.forEach((item, index) => {
                    if (item.id === id) {
                        this._tags.splice(index, 1);
                    }
                });

                // Get the individuals that have the tag
                const individualsWithTag = this._individuals.filter(
                    (individual) => individual.tags.indexOf(id) > -1
                );

                // Iterate through them and delete the tag
                individualsWithTag.forEach((individual) => {
                    individual.tags.splice(individual.tags.indexOf(id), 1);
                });

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
            .onPost('api/individuals/avatar')
            .reply(({ request }) => {
                // Get the id and avatar
                const id = request.body.id;
                const avatar = request.body.avatar;

                // Prepare the updated individual
                let updatedContact: any = null;

                // In a real world application, this would return the path
                // of the saved image file (from host, S3 bucket, etc.) but,
                // for the sake of the demo, we encode the image to base64
                // and return it as the new path of the uploaded image since
                // the src attribute of the img tag works with both image urls
                // and encoded images.
                return from(readAsDataURL(avatar)).pipe(
                    map((path) => {
                        // Find the individual and update it
                        this._individuals.forEach(
                            (item, index, individuals) => {
                                if (item.id === id) {
                                    // Update the avatar
                                    individuals[index].avatar = path;

                                    // Store the updated individual
                                    updatedContact = individuals[index];
                                }
                            }
                        );

                        // Return the response
                        return [200, updatedContact];
                    })
                );
            });
    }
}
