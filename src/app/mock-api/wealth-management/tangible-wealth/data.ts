import { TangibleWealthes, WealthType } from "app/modules/assets-management/wealth-management.types"

export const tangableWealth : TangibleWealthes[] = [
    {
        //
// Real Estate Properties
        id: '1',
        wealthType: 1,
        name: "Residential Real Estate",
        acquisitionValue: 1500,
        method:"Asset Weighting",
        status: "Process Completed",
        counter:13

    },

    {
        id: '2',
        wealthType: 1,
        name: "Mixed-Use Properties",
        acquisitionValue: 300,
        method:"From Real Estate",
        status: "Evaluation",
        counter:5

    },
    {
        id: '3',
        wealthType: 1,
        name: "Commercial Real Estate ",
        acquisitionValue: 800,
        method:"Asset Weighting",
        status: "From last month",
        counter:9

    },
    ////////////////////Vehicles

    {
        id: '4',
        wealthType: 2,
        name: "Cars",
        acquisitionValue: 100,
        method:"From Vehicles",
        status: "Process Completed",
        counter:13

    },
    {
        id: '5',
        wealthType: 2,
        name: "Motorcycles",
        acquisitionValue: 500,
        method:"Asset Weighting",
        status: "From last month",
        counter:9

    },
    {
        id: '6',
        wealthType: 2,
        name: "Buses",
        acquisitionValue: 900,
        method:"From Vehicles",
        status: "Evaluation",
        counter:5

    },
    {
        id: '7',
        wealthType: 2,
        name: "Trucks",
        acquisitionValue: 400,
        method:"From Vehicles",
        status: "Process Completed",
        counter:9

    },
    {
        id: '8',
        wealthType: 2,
        name: "Boats",
        acquisitionValue: 1200,
        method:"From Vehicles",
        status: "Process Completed",
        counter:7

    },

    //Accounts receivable
    {
        id: '9',
        wealthType: 3,
        name: "General Accounts Receivable",
        acquisitionValue: 100,
        method:"From Vehicles",
        status: "Process Completed",
        counter:7

    },
    {
        id: '10',
        wealthType: 3,
        name: "Trade Accounts Receivable",
        acquisitionValue: 100,
        method:"Asset Weighting",
        status: " From last month",
        counter:9

    },
    // {
    //     id: '11',
    //     wealthType: 3,
    //     name: "Non-Trade Accounts Receivable",
    //     acquisitionValue: 100,
    //     method:"From Vehicles",
    //     status: "Evaluation ",
    //     counter:5

    // },
    {
        id: '12',
        wealthType: 3,
        name: "Accrued Accounts Receivable",
        acquisitionValue: 1400,
        method:"Asset Weighting",
        status: " Process Completed",
        counter:9

    },

// Marketable securities
{
    id: '13',
    wealthType: 4,
    name: "Certificates of Deposit ",
    acquisitionValue: 800,
    method:"Tasks",
    status: " From yesterday" ,
    counter:19

},
{
    id: '14',
    wealthType: 4,
    name: "Sukuk",
    acquisitionValue: 200,
    method:"Open",
    status: " Completed" ,
    counter:19

},
{
    id: '15',
    wealthType: 4,
    name: "Exchange-Traded Funds - ETFs",
    acquisitionValue: 700,
    method:"Tasks",
    status: " From yesterday" ,
    counter:19

},
{
    id: '16',
    wealthType: 4,
    name: "Stocks",
    acquisitionValue: 600,
    method:"Proposals",
    status: " Closed today" ,
    counter:8

},

///////////////
{
    id: '17',
    wealthType: 1,
    name: "Special Purpose Real Estate",
    acquisitionValue: 400,
    method:"From Real Estate",
    status: "Evaluation",
    counter:5

},

{
    id: '18',
    wealthType: 1,
    name: "Raw Land",
    acquisitionValue: 600,
    method:"From Real Estate",
    status: "Evaluation",
    counter:9

},
{
    id: '19',
    wealthType: 4,
    name: "Bonds",
    acquisitionValue: 600,
    method:"From Real Estate",
    status: "Evaluation",
    counter:9

},

]


export const tangableWealthType :WealthType[]=[
    {
        id:1,
        wealthType:"Real Estate",
        wealthTypeRoute:"commercial-real-estate",

    } ,
    {
        id:2,
        wealthType:"Mixed-Use Properties",
        wealthTypeRoute:"mixed-use-properties",

    } ,
]


