import { TangibleWealthes, WealthType } from "app/modules/assets-management/wealth-management.types"

export const tangableWealth: TangibleWealthes[] = [
    {
        //
        // Real Estate Properties
        id: '1',
        wealthType: 1,
        name: "Real Estate Properties",
        acquisitionValue: 1500,
        method: "Asset Weighting",
        status: "Process Completed",
        counter: 13,
        wealthTypeRoute:'',
        child: [
            {
                id: '8',
                wealthType: 1,
                name: 'Commercial Real Estate',
                acquisitionValue: 98,
                method: '',
                status: '',
                counter: 0,
                wealthTypeRoute:'',
                child: [
                    {
                        id: '8',
                        wealthType: 1,
                        name: 'Office Buildings',
                        acquisitionValue: 98,
                        method: '',
                        status: '',
                        counter: 0,
                        wealthTypeRoute:'',
                        child: [
                            {
                                id:'823e6166-c0c8-4373-9270-8a0d17489a08' ,
                                wealthType:1,
                                name:'Business Center',
                                acquisitionValue:34,
                                method:'',
                                status:'',
                                counter:0,
                                child:[],
                                wealthTypeRoute:''

                            },
                            {
                                id:'e6166-c0c8-4373-9270-8a0d17489a08823' ,
                                wealthType:1,
                                name:'Co-working Space',
                                acquisitionValue:34,
                                method:'',
                                status:'',
                                counter:0,
                                child:[],
                                wealthTypeRoute:''

                            },
                            {
                                id:'e6166823-c0c8-4373-9270-8a0d17489a08823' ,
                                wealthType:1,
                                name:'Executive Office',
                                acquisitionValue:34,
                                method:'',
                                status:'',
                                counter:0,
                                child:[],
                                wealthTypeRoute:''

                            },
                        ]
                    },
                    {
                        id: '9',
                        wealthType: 1,
                        name: 'Industrial Buildings',
                        acquisitionValue: 98,
                        method: '',
                        status: '',
                        counter: 0,
                        child: [
                        ],
                        wealthTypeRoute:''
                    },
                    {
                        id: '10',
                        wealthType: 1,
                        name: 'Hotels and Hospitality',
                        acquisitionValue: 98,
                        method: '',
                        status: '',
                        counter: 0,
                        child: [
                        ] ,

                        wealthTypeRoute:'',
                    },
                ]
            },
            {
                id: '8',
                wealthType: 1,
                name: '',
                acquisitionValue: 98,
                method: '',
                status: '',
                counter: 0,
                child: [],
                wealthTypeRoute:''

            },
            {
                id: '9',
                wealthType: 1,
                name: '',
                acquisitionValue: 98,
                method: '',
                status: '',
                counter: 0,
                child: [],
                wealthTypeRoute:''
            },
        ]
    },

    // {
    //     id: '2',
    //     wealthType: 1,
    //     name: "Mixed-Use Properties",
    //     acquisitionValue: 300,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 5,

    //     child: []
    // },
    // {
    //     id: '3',
    //     wealthType: 1,
    //     name: "Commercial Real Estate ",
    //     acquisitionValue: 800,
    //     method: "Asset Weighting",
    //     status: "From last month",
    //     counter: 9,
    //     child: []

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
        child: [],
        wealthTypeRoute: ""
    },
    {
        id: '5',
        wealthType: 2,
        name: "Motorcycles",
        acquisitionValue: 500,
        method: "Asset Weighting",
        status: "From last month",
        counter: 9,
        child: []
        , wealthTypeRoute: ""
    },
    {
        id: '6',
        wealthType: 2,
        name: "Buses",
        acquisitionValue: 900,
        method: "From Vehicles",
        status: "Evaluation",
        counter: 5,
        child: [],

        wealthTypeRoute: ""
    },
    {
        id: '7',
        wealthType: 2,
        name: "Trucks",
        acquisitionValue: 400,
        method: "From Vehicles",
        status: "Process Completed",
        counter: 9,
        child: [],
        wealthTypeRoute: ""
    },
    {
        id: '8',
        wealthType: 2,
        name: "Boats",
        acquisitionValue: 1200,
        method: "From Vehicles",
        status: "Process Completed",
        counter: 7,
        child: [],

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
        counter: 7,
        child: [],

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

        child: [] ,
        wealthTypeRoute: ""
    },
    // {
    //     id: '11',
    //     wealthType: 3,
    //     name: "Non-Trade Accounts Receivable",
    //     acquisitionValue: 100,
    //     method:"From Vehicles",
    //     status: "Evaluation ",
    //     counter:5
    //     counter:5,
    // wealthTypeRoute:""
    // },
    // {
    //     id: '12',
    //     wealthType: 3,
    //     name: "Accrued Accounts Receivable",
    //     acquisitionValue: 1400,
    //     method: "Asset Weighting",
    //     status: " Process Completed",
    //     counter: 9,

    //     child: [] ,
    //     counter: 9
    //     ,
    //     wealthTypeRoute: ""
    // },

    // Marketable securities
    {
        id: '13',
        wealthType: 4,
        name: "Certificates of Deposit ",
        acquisitionValue: 800,
        method: "Tasks",
        status: " From yesterday",
        counter: 19,
        child: [],
        wealthTypeRoute:''
    },
    {
        id: '14',
        wealthType: 4,
        name: "Sukuk",
        acquisitionValue: 200,
        method: "Open",
        status: " Completed",
        counter: 19,
        child: [],
        wealthTypeRoute:''
    },
    {
        id: '15',
        wealthType: 4,
        name: "Exchange-Traded Funds - ETFs",
        acquisitionValue: 700,
        method: "Tasks",
        status: " From yesterday",
        counter: 19,
        child: [],
        wealthTypeRoute:''
    },
    {
        id: '16',
        wealthType: 4,
        name: "Stocks",
        acquisitionValue: 600,
        method: "Proposals",
        status: " Closed today",
        counter: 8,
        child: [],
        wealthTypeRoute:''
    },

    ///////////////
    // {
    //     id: '17',
    //     wealthType: 1,
    //     name: "Special Purpose Real Estate",
    //     acquisitionValue: 400,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 5,

    //     child: []
    // },

    // {
    //     id: '18',
    //     wealthType: 1,
    //     name: "Raw Land",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     child: []
    // },
    // {
    //     id: '19',
    //     wealthType: 4,
    //     name: "Bonds",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     child: []
    // },

    // {
    //     id: '14',
    //     wealthType: 4,
    //     name: "Sukuk",
    //     acquisitionValue: 200,
    //     method: "Open",
    //     status: " Completed",
    //     counter: 19,
    //     wealthTypeRoute: ""

    // },
    // {
    //     id: '15',
    //     wealthType: 4,
    //     name: "Exchange-Traded Funds - ETFs",
    //     acquisitionValue: 700,
    //     method: "Tasks",
    //     status: " From yesterday",
    //     counter: 19,
    //     wealthTypeRoute: ""

    // },
    // {
    //     id: '16',
    //     wealthType: 4,
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
    //     wealthType: 1,
    //     name: "Special Purpose Real Estate",
    //     acquisitionValue: 400,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 5,

    //     wealthTypeRoute: ""
    // },

    // {
    //     id: '18',
    //     wealthType: 1,
    //     name: "Raw Land",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     wealthTypeRoute: ""
    // },
    // {
    //     id: '19',
    //     wealthType: 4,
    //     name: "Bonds",
    //     acquisitionValue: 600,
    //     method: "From Real Estate",
    //     status: "Evaluation",
    //     counter: 9,

    //     wealthTypeRoute: ""
    // },

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


