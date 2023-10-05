/* eslint-disable */
import { DateTime } from 'luxon';

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

