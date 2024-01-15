import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { catchError, throwError } from 'rxjs';

import {ShowDetailsComponent} from './show-detail.component';
import { InsurancesService } from '../insurances.service';
import { InsurancesListComponent } from '../insurances-list/insurances-list.component';
import { InsurancesComponent } from '../insurances.component';
import { InsurancesDetailComponent } from '../insurances-detail/insurances-detail.component';
import { AddingInitComponent } from 'app/layout/common/adding-init/adding-init.component';
import { DescribeTypeComponent } from '../describe-type/describe-type.component';
import { DescribePriceComponent } from '../describe-price/describe-price.component';
import { ChoosePlaceComponent } from '../choose-place/choose-place.component';





export default [
    {
        path: '',

        component: InsurancesDetailComponent,
        resolve: {
            steps: () => inject(InsurancesService).getSteps(),
        },
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: '',

                component: AddingInitComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getSteps(),
                },
            },
            {
                path: 'Insurance-type',

                component: AddingInitComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getGetTypeInfo(),
                },
            },
            {
                path: 'describe-type',

                component: DescribeTypeComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getGetTypeInfo(),
                    checkbox: () => inject(InsurancesService).getCheckboxes(),
                },
            },
            {
                path: 'describe-price',

                component: DescribePriceComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getGetTypeInfo(),
                },
            },
            {
                path: 'step-two',

                component: ChoosePlaceComponent,
                resolve: {
                    steps: () => inject(InsurancesService).getChoosePlace(),
                },
            },


        ],
    },
] as Routes;


