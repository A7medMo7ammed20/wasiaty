import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { AddingInitComponent } from 'app/layout/common/adding-init/adding-init.component';
import { DescribePriceComponent } from '../describe-price/describe-price.component';
import { ChoosePlaceComponent } from '../choose-place/choose-place.component';
import { BequestDetailsComponent } from '../details/details.component';
import { BequestManagementService } from '../bequest-management.service';
import { CreateBequestsComponent } from './create-bequest.component';
import {CreateTypeComponent} from "../create-type/create-type.component";


export default [
    {
        path: '',

        component: CreateBequestsComponent,
        resolve: {
            steps: () => inject(BequestManagementService).getSteps(),
        },
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: '',

                component: AddingInitComponent,
                resolve: {
                    steps: () => inject(BequestManagementService).getSteps(),
                },
            },
            {
                path: 'bequest-type',

                component: AddingInitComponent,
                resolve: {
                    steps: () => inject(BequestManagementService).GetTypeInfo(),
                },
            },
            {
                path: 'create-type',

                component: CreateTypeComponent,
                resolve: {
                    steps: () => inject(BequestManagementService).GetTypeInfo(),
                    checkbox: () => inject(BequestManagementService).getCheckboxes(),
                },
            },
            {
                path: 'choose-place',

                component: ChoosePlaceComponent,
                resolve: {
                    steps: () => inject(BequestManagementService).getChoosePlace(),
                },
            },
            // {
            //     path: 'choose-endowment',

            //     component: ChooseEndowmentComponent,
            //     resolve: {
            //         steps: () => inject(BequestManagementService).GetTypeInfo(),
            //     },
            // },
            {
                path: 'describe-price',

                component: DescribePriceComponent,
                resolve: {
                    steps: () => inject(BequestManagementService).GetTypeInfo(),
                },
            },
            // {
            //     path: 'review-endowment',

            //     component: ReviewEndowmentComponent,
            //     resolve: {
            //         steps: () => inject(BequestManagementService).getreviewEndowment(),
            //     },
            // },
        ],
    },
] as Routes;

