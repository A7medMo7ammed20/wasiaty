import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { AddingInitComponent } from 'app/layout/common/adding-init/adding-init.component';
import { EndowmentsComponent } from '../endowment.component';
import { EndowmentsService } from '../endowment.service';
import { CreateEndowmentComponent } from './create-endowment.component';
import { CreateTypeComponent } from '../create-type/create-type.component';
import { ChoosePlaceComponent } from '../choose-place/choose-place.component';
import { ChooseEndowmentComponent } from '../choose-place/choose-endowment/choose-endowment.component';
import { DescribePriceComponent } from '../describe-price/describe-price.component';
import { ReviewEndowmentComponent } from '../choose-place copy/review-endowment.component';
// import { CreateTypeComponent } from '../create-type/create-type.component';
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

        component: CreateEndowmentComponent,
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
                    steps: () => inject(EndowmentsService).GetTypeInfo(),
                },
            },
            {
                path: 'create-type',

                component: CreateTypeComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).GetTypeInfo(),
                    checkbox: () => inject(EndowmentsService).getCheckboxes(),
                },
            },
            {
                path: 'choose-place',

                component: ChoosePlaceComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).getChoosePlace(),
                },
            },
            {
                path: 'choose-endowment',

                component: ChooseEndowmentComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).GetTypeInfo(),
                },
            },
            {
                path: 'describe-price',

                component: DescribePriceComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).GetTypeInfo(),
                },
            },
            {
                path: 'review-endowment',

                component: ReviewEndowmentComponent,
                resolve: {
                    steps: () => inject(EndowmentsService).getreviewEndowment(),
                },
            },
        ],
    },
] as Routes;
