import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import {
    dataAnalystic,
    data as debtsData,
    debts,
} from 'app/mock-api/debt-management/data';
import { Debt } from 'app/modules/debt-management/debt-management.types';
import { assign, cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class DebtManagementMockApi {
    private _data: any = debtsData;
    private _debts: any[] = debts;

    private _dataAnalystic: any = dataAnalystic;

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
        // @ analytics - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/debt-management')
            .reply(() => [200, cloneDeep(this._dataAnalystic)]);
        // -----------------------------------------------------------------------------------------------------
        // @ debts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/debt-management/debts')
            .reply(() => [200, cloneDeep(this._debts)]);
        // -----------------------------------------------------------------------------------------------------
        // @ Data - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/debt-management/data')
            .reply(() => [200, cloneDeep(this._data)]);

        // -----------------------------------------------------------------------------------------------------
        // @ debt - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/debt-management/debt')
            .reply(({ request }) => {
                // Generate a new debt
                const newdebt: Debt = {
                    id: FuseMockApiUtils.guid(),
                    description: '',
                    creditor: '',
                    debtor: '',
                    amount: 0,
                    currency: '',
                    dueDate: null,
                    interestRate: 0,
                    maturityPercentage: 0,
                    repaymentMethod: '',
                    debtType: request.body.type,
                    specialDocuments: [],
                };

                // Unshift the new debt
                this._debts.unshift(newdebt);

                return [200, newdebt];
            });

        this._fuseMockApiService
            .onDelete('api/debt-management/debt')
            .reply(({ request }) => {

                // Get the id
                const id = request.params.get('id');

                // Find the debt and delete it
                const index = this._debts.findIndex((item) => item.id === id);
                this._debts.splice(index, 1);

                return [200, true];
            });
        // -----------------------------------------------------------------------------------------------------
        // @ debt - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/debt-management/debt')
            .reply(({ request }) => {
                // Get the id and debt
                const id = request.body.id;
                const debt = cloneDeep(request.body.debt);

                // Prepare the updated debt
                let updateddebt = null;

                // Find the debt and update it
                this._debts.forEach((item, index, debts) => {
                    if (item.id === id) {
                        // Update the debt
                        debts[index] = assign({}, debts[index], debt);

                        // Store the updated debt
                        updateddebt = debts[index];
                    }
                });

                return [200, updateddebt];
            });
    }
}
