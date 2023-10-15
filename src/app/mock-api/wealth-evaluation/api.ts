import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import {
    Evaluations as EvaluationsData,
    contacts as contactsData,
    messages as messagesData,
    profile as profileData,
    data as financeData,
} from 'app/mock-api/wealth-evaluation/data';
import { assign, cloneDeep, omit } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class WealthEvaluationMockApi {
    private _Evaluations: any[] = EvaluationsData;
    private _contacts: any[] = contactsData;
    private _messages: any[] = messagesData;
    private _profile: any = profileData;

    private _finance: any = financeData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();

        // Modify the Evaluations array to attach certain data to it
        this._Evaluations = this._Evaluations.map((Evaluation) => ({
            ...Evaluation,
            // Get the actual contact object from the id and attach it to the Evaluation
            contact: this._contacts.find(
                (contact) => contact.id === Evaluation.contactId
            ),
            // Since we use same set of messages on all Evaluations, we assign them here.
            messages: this._messages.map((message) => ({
                ...message,
                EvaluationId: Evaluation.id,
                contactId:
                    message.contactId === 'me'
                        ? this._profile.id
                        : Evaluation.contactId,
                isMine: message.contactId === 'me',
            })),
        }));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Evaluations - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/wealth-evaluation/Evaluations')
            .reply(() => {
                // Clone the Evaluations
                const Evaluations = cloneDeep(this._Evaluations);

                // Return the response
                return [200, Evaluations];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/wealth-evaluation/data')
            .reply(() => [200, cloneDeep(this._finance)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Evaluation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/wealth-evaluation/Evaluation')
            .reply(({ request }) => {
                // Get the Evaluation id
                const id = request.params.get('id');

                // Clone the Evaluations
                const Evaluations = cloneDeep(this._Evaluations);

                // Find the Evaluation we need
                const Evaluation = Evaluations.find((item) => item.id === id);

                // Return the response
                return [200, Evaluation];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Evaluation - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/wealth-evaluation/Evaluation')
            .reply(({ request }) => {
                // Get the id and Evaluation
                const id = request.body.id;
                const Evaluation = cloneDeep(request.body.Evaluation);

                // Prepare the updated Evaluation
                let updatedEvaluation = null;

                // Find the Evaluation and update it
                this._Evaluations.forEach((item, index, Evaluations) => {
                    if (item.id === id) {
                        // Update the Evaluation
                        Evaluations[index] = assign(
                            {},
                            Evaluations[index],
                            Evaluation
                        );

                        // Store the updated Evaluation
                        updatedEvaluation = Evaluations[index];
                    }
                });

                // Return the response
                return [200, updatedEvaluation];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/wealth-evaluation/contacts')
            .reply(() => {
                // Clone the contacts
                let contacts = cloneDeep(this._contacts);

                // Sort the contacts by the name field by default
                contacts.sort((a, b) => a.name.localeCompare(b.name));

                // Omit details and attachments from contacts
                contacts = contacts.map((contact) =>
                    omit(contact, ['details', 'attachments'])
                );

                // Return the response
                return [200, contacts];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact Details - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/wealth-evaluation/contact')
            .reply(({ request }) => {
                // Get the contact id
                const id = request.params.get('id');

                // Clone the contacts
                const contacts = cloneDeep(this._contacts);

                // Find the contact
                const contact = contacts.find((item) => item.id === id);

                // Return the response
                return [200, contact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Profile - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/wealth-evaluation/profile')
            .reply(() => {
                // Clone the profile
                const profile = cloneDeep(this._profile);

                // Return the response
                return [200, profile];
            });
    }
}
