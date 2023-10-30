import { inject } from '@angular/core';
import { Routes} from '@angular/router';

import { AddingInitComponent } from 'app/layout/common/adding-init/adding-init.component';
import { EndowmentsComponent } from '../endowment.component';
import { EndowmentsService } from '../endowment.service';
import { InsurancesDetailComponent } from './insurances-detail.component';
// import { InsurancesService } from '../insurances/insurances.service';

/**
 * Individual resolver
 *
 * @param route
 * @param state
 */



export default [
    {

                path: '',

                component: InsurancesDetailComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).getSteps(),
                },
                data: {
                    layout: 'empty',
                },
                children: [
                    {
                        path: '',

                        component: AddingInitComponent,
                        resolve: {
                            steps: () => inject(EndowmentsService).getSteps(),
                        },
                    },
                    {
                        path: 'endowment-type',

                        component: AddingInitComponent,
                        resolve: {
                            steps: () =>
                                inject(EndowmentsService).getGetTypeInfo(),
                        },
                    },
                ],


    },



] as Routes;
