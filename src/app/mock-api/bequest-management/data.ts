/* eslint-disable */
import { DateTime } from 'luxon';

import { Steps } from 'app/shared/types/step.types';
// import { InsuranceData } from 'app/modules/assets-management/insurances/insurances.types';
import { InsuranceData } from "app/modules/assets-management/insurances/insurance.types";

/* Get the current instant */
const now = DateTime.now();

export const BequestAnalytics = {


    newVsReturning     : {
        uniqueVisitors: 46085,
        series        : [90, 80],
        labels        : [
            'All wealth',
            'Bequest',

        ],
    },
    taskDistribution  : {
        overview: {
            'this-week': {
                'new'      : 594,
                'completed': 287,
            },
            'last-week': {
                'new'      : 526,
                'completed': 260,
            },
        },
        labels  : ['Building a mosque', 'Ongoing charity', 'Orphanage'],
        series  : {
            'this-week': [29, 40, 35],
            'last-week': [30, 46, 70],
        },
    },
    bequestDetails     : {
        columns: ['type', 'total', 'expensesAmount', 'expensesPercentage', 'remainingAmount', 'remainingPercentage'],
        rows   : [
            {
                id                 : 1,
                type               : 'Building a mosque',
                total              : 14880,
                expensesAmount     : 14000,
                expensesPercentage : 94.08,
                remainingAmount    : 880,
                remainingPercentage: 5.92,
            },
            {
                id                 : 2,
                type               : 'Ongoing charity',
                total              : 21080,
                expensesAmount     : 17240.34,
                expensesPercentage : 81.78,
                remainingAmount    : 3839.66,
                remainingPercentage: 18.22,
            },
            {
                id                 : 3,
                type               : 'Orphanage',
                total              : 34720,
                expensesAmount     : 3518,
                expensesPercentage : 10.13,
                remainingAmount    : 31202,
                remainingPercentage: 89.87,
            },

        ],
    },

};

export const bequests=[

        {
          id: '1',
          name: 'Bequest 1',
          executor: 'John Doe',
          description: 'This is the description for Bequest 1.',
          Beneficiaries: 3,
          dueDate: '2023-10-15'
        },
        {
          id: '2',
          name: 'Bequest 2',
          executor: 'Jane Smith',
          description: 'This is the description for Bequest 2.',
          Beneficiaries: 2,
          dueDate: '2023-11-20'
        },
        {
          id: '3',
          name: 'Bequest 3',
          executor: 'Sam Johnson',
          description: 'This is the description for Bequest 3.',
          Beneficiaries: 4,
          dueDate: null
        },
        {
          id: '4',
          name: 'Bequest 4',
          executor: 'Mary Brown',
          description: 'This is the description for Bequest 4.',
          Beneficiaries: 1,
          dueDate: '2023-12-05'
        },
        {
          id: '5',
          name: 'Bequest 5',
          executor: 'Chris Wilson',
          description: 'This is the description for Bequest 5.',
          Beneficiaries: 3,
          dueDate: null
        },
        {
          id: '6',
          name: 'Bequest 6',
          executor: 'Lisa Davis',
          description: 'This is the description for Bequest 6.',
          Beneficiaries: 2,
          dueDate: '2023-11-30'
        },
        {
          id: '7',
          name: 'Bequest 7',
          executor: 'Tom Harris',
          description: 'This is the description for Bequest 7.',
          Beneficiaries: 5,
          dueDate: '2023-12-25'
        },
        {
          id: '8',
          name: 'Bequest 8',
          executor: 'Emily Jones',
          description: 'This is the description for Bequest 8.',
          Beneficiaries: 2,
          dueDate: null
        },
        {
          id: '9',
          name: 'Bequest 9',
          executor: 'Michael Lee',
          description: 'This is the description for Bequest 9.',
          Beneficiaries: 3,
          dueDate: '2023-10-10'
        },
        {
          id: '10',
          name: 'Bequest 10',
          executor: 'Olivia Taylor',
          description: 'This is the description for Bequest 10.',
          Beneficiaries: 4,
          dueDate: '2023-11-15'
        }


];

// step progress
export const steps: Steps = {
    id: '1',
    title: 'It’s Easy To Make An Bequest Of Your Property',
    description: 'Earn money by renting out your extra space.',
    icon: '',
    haveIcon: false,
    currentStep: 0,
    steps: [
        {
            id: '1',
            title: 'Choose The Type Of Bequest',
            description:
                'Choose the type of endowment you would like to create - whether it is for education, healthcare, or any other purpose.',
            icon: 'assets/images/wasiaty/bfc0bc89-58cb-4525-a26e-7b23b750ee00.webp',
            haveIcon: true,
            currentStep: 0,
        },
        {
            id: '2',
            title: 'Choose what the endowment will be',
            description:
                'Share Some Basic Info, Like Where It Is and the Name of the Place You Will Endowment.',
            icon: 'assets/images/wasiaty/fund.png',
            haveIcon: true,
            currentStep: 0,
        },
        // {
        //     id: '3',
        //     title: 'Determine the Amount',
        //     description:
        //         'Decide on the amount you want to contribute to the endowment and set a target goal if desired.',
        //     icon: 'assets/images/wasiaty/perspective_matte-383-128x128.png',
        //     haveIcon: true,
        //     currentStep: 0,
        // },
        // {
        //     id: '4',
        //     title: 'Choose a Beneficiary',
        //     description:
        //         'Select the individual, organization, or cause that will benefit from your endowment.',
        //     icon: 'assets/images/wasiaty/growth.png',
        //     haveIcon: true,
        //     currentStep: 0,
        // },
        {
            id: '3',
            title: 'Review and Confirm',
            description:
                'Review all the details of your endowment before finalizing and confirming your commitment.',
            icon: 'assets/images/wasiaty/istockphoto-1215563941-1024x1024.jpg',
            haveIcon: true,
            currentStep: 0,
        },
    ],
};
export const typeInfo: Steps = {
    id: '1',
    title: 'Tell us about your endowment type',
    description:
        'In this step, we’ll ask you to select the type of endowment you would like to create.',
    icon: 'https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};

export const choosePlace: Steps = {
    id: '1',
    title: 'Choose what the endowment will be',
    description:
        'In this step, we’ll ask you to select the place of endowment you would like to create. Consider the cause or purpose that is close to your heart.',
    icon: 'https://media.istockphoto.com/id/150434138/video/birth-of-a-city.mp4?s=mp4-480x480-is&k=20&c=FTm9zChFcVYS7wvVbKSYSGzgkaodMw6In9qSyxrRdwc=    ',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};
export const reviewEndowment: Steps = {
    id: '2',
    title: 'Review and Confirm',
    description:
        'In this step, we’ll ask you to select the place of endowment you would like to create. Consider the cause or purpose that is close to your heart.',
    icon: 'https://media.istockphoto.com/id/150434138/video/birth-of-a-city.mp4?s=mp4-480x480-is&k=20&c=FTm9zChFcVYS7wvVbKSYSGzgkaodMw6In9qSyxrRdwc=    ',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};
