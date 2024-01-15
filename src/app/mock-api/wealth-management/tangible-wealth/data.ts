import {
    TangibleWealthes,
    WealthType,
} from 'app/modules/assets-management/wealth-management.types';

export const tangableWealth: TangibleWealthes[] = [
    {
        //
        // Real Estate Properties
        id: '1',
        parentId: '',
        wealthType: 1,
        name: 'Real Estate Properties',
        acquisitionValue: 1500,
        method: 'Asset Weighting',
        status: 'Process Completed',
        counter: 13,
        wealthTypeRoute: '',
        child: [
            {
                id: '823e6166-c0c8-4373-9270-8a0d1748953gh',

                parentId: '1',
                wealthType: 1,
                name: 'Commercial Real Estate',
                acquisitionValue: 98,
                method: '',
                status: '',
                counter: 0,
                wealthTypeRoute: '',
                child: [
                    {
                        id: '823e6166-c0c8-4373-9270-8a0d17489a34',
                        parentId: '1',
                        wealthType: 1,
                        name: 'Office Buildings',
                        acquisitionValue: 98,
                        method: '',
                        status: '',
                        counter: 0,
                        wealthTypeRoute: '',
                        child: [
                            {
                                id: '823e6166-c0c8-4373-9270-8a0d17489a08',
                                parentId: '1',
                                wealthType: 1,
                                name: 'Business Center',
                                acquisitionValue: 34,
                                method: '',
                                status: '',
                                counter: 0,
                                child: [],
                                wealthTypeRoute: '',
                            },
                            {
                                id: 'e6166-c0c8-4373-9270-8a0d17489a08823',
                                parentId: '1',
                                wealthType: 1,
                                name: 'Co-working Space',
                                acquisitionValue: 34,
                                method: '',
                                status: '',
                                counter: 0,
                                child: [],
                                wealthTypeRoute: '',
                            },
                            {
                                id: 'e6166823-c0c8-4373-9270-8a0d17489a08823',
                                parentId: '1',
                                wealthType: 1,
                                name: 'Executive Office',
                                acquisitionValue: 34,
                                method: '',
                                status: '',
                                counter: 0,
                                child: [],
                                wealthTypeRoute: '',
                            },
                        ],
                    },
                    {
                        id: '834je6166-c0c8-4373-9270-8a0d17489a08',
                        parentId: '1',
                        wealthType: 1,
                        name: 'Industrial Buildings',
                        acquisitionValue: 98,
                        method: '',
                        status: '',
                        counter: 0,
                        child: [],
                        wealthTypeRoute: '',
                    },
                    {
                        id: '823e6166-c0c8-4373-9270-8a0d17489dfgd9',
                        parentId: '1',
                        wealthType: 1,
                        name: 'Hotels and Hospitality',
                        acquisitionValue: 98,
                        method: '',
                        status: '',
                        counter: 0,
                        child: [],

                        wealthTypeRoute: '',
                    },
                ],
            },
            {
                id: '467567',
                parentId: '1',
                wealthType: 1,
                name: '',
                acquisitionValue: 98,
                method: '',
                status: '',
                counter: 0,
                child: [],
                wealthTypeRoute: '',
            },
            {
                id: 'rtur56767',
                parentId: '1',
                wealthType: 1,
                name: '',
                acquisitionValue: 98,
                method: '',
                status: '',
                counter: 0,
                child: [],
                wealthTypeRoute: '',
            },
        ],
    },

    ////////////////////Vehicles

    {
        id: '478946i8',
        parentId: ' ',
        wealthType: 2,
        name: 'Cars',
        acquisitionValue: 100,
        method: 'From Vehicles',
        status: 'Process Completed',
        counter: 13,
        child: [],
        wealthTypeRoute: '',
    },
    {
        id: '34563565',
        parentId: '',
        wealthType: 2,
        name: 'Motorcycles',
        acquisitionValue: 500,
        method: 'Asset Weighting',
        status: 'From last month',
        counter: 9,
        child: [],
        wealthTypeRoute: '',
    },
    {
        id: '34655356',
        parentId: '',
        wealthType: 2,
        name: 'Buses',
        acquisitionValue: 900,
        method: 'From Vehicles',
        status: 'Evaluation',
        counter: 5,
        child: [],

        wealthTypeRoute: '',
    },
    {
        id: 'asgs436346',
        parentId: '',
        wealthType: 2,
        name: 'Trucks',
        acquisitionValue: 400,
        method: 'From Vehicles',
        status: 'Process Completed',
        counter: 9,
        child: [],
        wealthTypeRoute: '',
    },
    {
        id: '346y54ytgxf4t',
        parentId: '',
        wealthType: 2,
        name: 'Boats',
        acquisitionValue: 1200,
        method: 'From Vehicles',
        status: 'Process Completed',
        counter: 7,
        child: [],

        wealthTypeRoute: '',
    },

    //Accounts receivable
    {
        id: '9',
        parentId: '',
        wealthType: 3,
        name: 'General Accounts Receivable',
        acquisitionValue: 100,
        method: 'From Vehicles',
        status: 'Process Completed',
        counter: 7,
        child: [],

        wealthTypeRoute: '',
    },
    {
        id: '10',
        parentId: '',
        wealthType: 3,
        name: 'Trade Accounts Receivable',
        acquisitionValue: 100,
        method: 'Asset Weighting',
        status: ' From last month',
        counter: 9,

        child: [],
        wealthTypeRoute: '',
    },

    // Marketable securities
    {
        id: '13',
        parentId: ' ',
        wealthType: 4,
        name: 'Certificates of Deposit ',
        acquisitionValue: 800,
        method: 'Tasks',
        status: ' From yesterday',
        counter: 19,
        child: [],
        wealthTypeRoute: '',
    },
    {
        id: '14',
        parentId: ' ',
        wealthType: 4,
        name: 'Sukuk',
        acquisitionValue: 200,
        method: 'Open',
        status: ' Completed',
        counter: 19,
        child: [],
        wealthTypeRoute: '',
    },
    {
        id: '15',
        parentId: ' ',
        wealthType: 4,
        name: 'Exchange-Traded Funds - ETFs',
        acquisitionValue: 700,
        method: 'Tasks',
        status: ' From yesterday',
        counter: 19,
        child: [],
        wealthTypeRoute: '',
    },
    {
        id: '16',
        parentId: ' ',
        wealthType: 4,
        name: 'Stocks',
        acquisitionValue: 600,
        method: 'Proposals',
        status: ' Closed today',
        counter: 8,
        child: [],
        wealthTypeRoute: '',
    },

    ///////////////
    // {
    //     id: '17',
    //     parentId:'1',wealthType: 1,
    //     name: "Special Purpose Real Estate",
    //     acquisitionValue: 400,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 5,

    //     child: []
    // },

    // {
    //     id: '18',
    //     parentId:'1',wealthType: 1,
    //     name: "Raw Land",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     child: []
    // },
    // {
    //     id: '19',
    //     parentId:'1',wealthType: 4,
    //     name: "Bonds",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     child: []
    // },

    // {
    //     id: '14',
    //     parentId:'1',wealthType: 4,
    //     name: "Sukuk",
    //     acquisitionValue: 200,
    //     method: "Open",
    //     status: " Completed",
    //     counter: 19,
    //     wealthTypeRoute: ""

    // },
    // {
    //     id: '15',
    //     parentId:'1',wealthType: 4,
    //     name: "Exchange-Traded Funds - ETFs",
    //     acquisitionValue: 700,
    //     method: "Tasks",
    //     status: " From yesterday",
    //     counter: 19,
    //     wealthTypeRoute: ""

    // },
    // {
    //     id: '16',
    //     parentId:'1',wealthType: 4,
    //     name: "Stocks",
    //     acquisitionValue: 600,
    //     method: "Proposals",
    //     status: " Closed today",
    //     counter: 8,

    //     wealthTypeRoute: ""
    // },

    // ///////////////
    // {
    //     id: '17',
    //     parentId:'1',wealthType: 1,
    //     name: "Special Purpose Real Estate",
    //     acquisitionValue: 400,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 5,

    //     wealthTypeRoute: ""
    // },

    // {
    //     id: '18',
    //     parentId:'1',wealthType: 1,
    //     name: "Raw Land",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     wealthTypeRoute: ""
    // },
    // {
    //     id: '19',
    //     parentId:'1',wealthType: 4,
    //     name: "Bonds",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     wealthTypeRoute: ""
    // },
];

export const tangableWealthType: WealthType[] = [
    {
        id: 1,
        wealthType: 'Real Estate',
        wealthTypeRoute: 'commercial-real-estate',
    },
    {
        id: 2,
        wealthType: 'Mixed-Use Properties',
        wealthTypeRoute: 'mixed-use-properties',
    },
    {
        id: 3,
        wealthType: 'Vehicles',
        wealthTypeRoute: 'mixed-use-properties',
    },
    {
        id: 4,
        wealthType: 'Marketable securities',
        wealthTypeRoute: 'mixed-use-properties',
    },
    {
        id: 5,
        wealthType: 'Accounts receivable',
        wealthTypeRoute: 'mixed-use-properties',
    },
    {
        id: 6,
        wealthType: 'Other',
        wealthTypeRoute: 'mixed-use-properties',
    },
];

export const items =[

  {
      id          :'cd6897cb',
    name        :'build',
    description :''
}
]
