import { TangibleWealthes, WealthType } from "app/modules/assets-management/wealth-management.types"

export const tangableWealth: TangibleWealthes[] = [
    {
        //
        // Real Estate Properties
        id: '1',
        wealthType: 1,
        name: "Residential Real Estate",
        acquisitionValue: 1500,
        method: "Asset Weighting",
        status: "Process Completed",
        child:[],
        counter: 13,
        wealthTypeRoute: "commercial-real-estate"


    },

    // {
    //     id: '2',
    //     wealthType: 1,
    //     name: "Mixed-Use Properties",
    //     acquisitionValue: 300,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 5,
    //     wealthTypeRoute: "mixed-use-properties"
    // },
    // {
    //     id: '3',
    //     wealthType: 1,
    //     name: "Commercial Real Estate ",
    //     acquisitionValue: 800,
    //     method: "Asset Weighting",
    //     status: "From last month",
    //     counter: 9,
    //     wealthTypeRoute: ""
    // },
    ////////////////////Vehicles

    {
        id: '4',
        wealthType: 2,
        name: "Cars",
        acquisitionValue: 100,
        method: "From Vehicles",
        status: "Process Completed",
        counter: 13,
        child:[],
        wealthTypeRoute: ""
    },

    //Accounts receivable
    {
        id: '9',
        wealthType: 3,
        name: "General Accounts Receivable",
        acquisitionValue: 100,
        method: "From Vehicles",
        status: "Process Completed",
        counter: 7 ,
        child:[],
        wealthTypeRoute: ""
    },
    {
        id: '10',
        wealthType: 3,
        name: "Trade Accounts Receivable",
        acquisitionValue: 100,
        method: "Asset Weighting",
        status: " From last month",
        counter: 9,
        child:[],
        wealthTypeRoute: ""
    },
{
        id: '12',
        wealthType: 3,
        name: "Accrued Accounts Receivable",
        acquisitionValue: 1400,
        method: "Asset Weighting",
        status: " Process Completed",
        counter: 9 ,
        child:[],
        wealthTypeRoute: ""
    },

    // Marketable securities
    {
        id: '13',
        wealthType: 4,
        name: "Certificates of Deposit ",
        acquisitionValue: 800,
        method: "Tasks",
        status: " From yesterday",
        counter: 19,
        child:[],
        wealthTypeRoute: ""

    },
    {
        id: '14',
        wealthType: 4,
        name: "Sukuk",
        acquisitionValue: 200,
        method: "Open",
        status: " Completed",
        counter: 19,
        child:[],
        wealthTypeRoute: ""

    },
    {
        id: '15',
        wealthType: 4,
        name: "Exchange-Traded Funds - ETFs",
        acquisitionValue: 700,
        method: "Tasks",
        status: " From yesterday",
        counter: 19,
        child:[],
        wealthTypeRoute: ""

    },
    {
        id: '16',
        wealthType: 4,
        name: "Stocks",
        acquisitionValue: 600,
        method: "Proposals",
        status: " Closed today",
        counter: 8,
child:[],

        wealthTypeRoute: ""
    },



]


export const tangableWealthType: WealthType[] = [
    {
        id: 1,
        wealthType: "Real Estate",
        wealthTypeRoute: "commercial-real-estate",

    },
    {
        id: 2,
        wealthType: "Mixed-Use Properties",
        wealthTypeRoute: "mixed-use-properties",

    },
]


