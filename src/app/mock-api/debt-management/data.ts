/* eslint-disable */
import { Debt } from 'app/modules/debt-management/debt-management.types';
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const debts = [
    {
        id: '1',
        description: 'Mortgage',
        creditor: 'Bank XYZ',
        debtor: 'John Doe',
        amount: 200000,
        currency: 'USD',
        dueDate: new Date('2024-12-31'),
        interestRate: 3.5,
        maturityPercentage: 80,
        repaymentMethod: 'Monthly Installments',
        debtType: 'Mortgage',
        specialDocuments: ['Property Deed', 'Loan Agreement'],
    },
    {
        id: '2',
        description: 'Credit Card Debt',
        creditor: 'Credit Card Company ABC',
        debtor: 'Jane Smith',
        amount: 5000,
        currency: 'USD',
        dueDate: new Date('2023-10-15'),
        interestRate: 18.5,
        maturityPercentage: 100,
        repaymentMethod: 'Minimum Monthly Payment',
        debtType: 'Credit Card',
        specialDocuments: ['Credit Card Statement'],
    },
    {
        id: '3',
        description: 'Student Loan',
        creditor: 'Student Loan Provider XYZ',
        debtor: 'Sam Johnson',
        amount: 30000,
        currency: 'USD',
        dueDate: new Date('2025-05-30'),
        interestRate: 4.2,
        maturityPercentage: 100,
        repaymentMethod: 'Graduated Repayment Plan',
        debtType: 'Student Loan',
        specialDocuments: ['Loan Agreement', 'Transcripts'],
    },
];
export const data = {
    debtsDetails: {
        columns: [
            'description',
            'creditor',
            'debtor',
            'amount',
            'currency',
            'dueDate',
            'interestRate',
            'maturityPercentage',
            'repaymentMethod',
            'debtType',
            'specialDocuments',
        ],

        rows: [
            {
                id: 1,
                description: 'Sample Debt 1',
                creditor: 'John Doe',
                debtor: 'Jane Doe',
                amount: 1000,
                currency: 'USD',
                dueDate: new Date().getFullYear(),
                interestRate: 5,
                maturityPercentage: 50,
                repaymentMethod: 'Monthly Installments',
                debtType: 'Personal Loan',
                specialDocuments: ['Document A', 'Document B'],
            },
            {
                id: 2,
                description: 'Sample Debt 2',
                creditor: 'Alice Smith',
                debtor: 'Bob Johnson',
                amount: 2000,
                currency: 'EUR',
                dueDate: new Date().getFullYear(),
                interestRate: 4.5,
                maturityPercentage: 60,
                repaymentMethod: 'Lump Sum',
                debtType: 'Mortgage',
                specialDocuments: ['Document C'],
            },
            {
                id: 3,
                description: 'Sample Debt ',
                creditor: 'Alice Smith',
                debtor: 'Bob ',
                amount: 2000,
                currency: 'EUR',
                dueDate: new Date().getFullYear(),
                interestRate: 4.5,
                maturityPercentage: 60,
                repaymentMethod: ' Sum',
                debtType: 'Mortgage',
                specialDocuments: ['Document C'],
            },
        ],
    },
    Details: {
        columns: [
            'description',
            'creditor',
            'debtor',
            'amount',
            'currency',
            'dueDate',
        ],
        rows: [
            {
                id: 1,
                description: 'Sample Debt 1',
                creditor: 'John Doe',
                debtor: 'Jane Doe',
                amount: 1000,
                currency: 'USD',
                dueDate: new Date().getFullYear(),
            },
            {
                id: 2,
                description: 'Sample Debt 2',
                creditor: 'Alice Smith',
                debtor: 'Jane Doe',
                amount: 1000,
                currency: 'EUR',
                dueDate: new Date().getFullYear(),
            },
            {
                id: 3,
                description: 'Sample Debt ',
                creditor: 'Alice Smith',
                debtor: 'Bob ',
                amount: 2000,
                currency: 'EUR',
                dueDate: new Date().getFullYear(),
            },
        ],
    },

    // Add more debt records as needed
};

export const dataAnalystic = {
    TotalDebt: {
        amount: 4123,
        labels: [
            now.minus({ days: 47 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 40 }).toFormat('dd MMM'),
            now.minus({ days: 39 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 32 }).toFormat('dd MMM'),
            now.minus({ days: 31 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 24 }).toFormat('dd MMM'),
            now.minus({ days: 23 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 16 }).toFormat('dd MMM'),
            now.minus({ days: 15 }).toFormat('dd MMM') +
                ' - ' +
                now.minus({ days: 8 }).toFormat('dd MMM'),
            now.minus({ days: 7 }).toFormat('dd MMM') +
                ' - ' +
                now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Debt',
                data: [4412, 4345, 4541, 4677, 4322, 4123],
            },
        ],
    },

    age: {
        uniqueVisitors: 46085,
        series: [35, 65],
        labels: ['Under 30', 'Over 30'],
    },
    language: {
        uniqueVisitors: 46085,
        series: [25, 75],
        labels: ['English', 'Other'],
    },
};
