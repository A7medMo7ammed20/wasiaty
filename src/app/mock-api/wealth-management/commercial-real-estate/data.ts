// import { TangibleWealthes, WealthType } from "app/modules/assets-management/wealth-management.types"
import { CommercialRealEstate , WealthType} from "app/modules/assets-management/long-term-assets/tangable-assets/tangible-wealthes.types"

export const CommercialRealEstates:CommercialRealEstate[] = [
    {
        //
// Real Estate Properties
        id: '1',
        wealthType: 1,
        name: "Executive Office",
        acquisitionValue: 1500,
        method:"Asset Weighting",
        status: "Process Completed",
        counter:13

    },

    {
        id: '2',
        wealthType: 1,
        name: "Co-working Space",
        acquisitionValue: 300,
        method:"From Real Estate",
        status: "Evaluation",
        counter:5

    },
    {
        id: '3',
        wealthType: 1,
        name: "Business Center",
        acquisitionValue: 800,
        method:"Asset Weighting",
        status: "From last month",
        counter:9

    },
    ////////////////////Retail

    {
        id: '4',
        wealthType: 2,
        name: "Retail Store",
        acquisitionValue: 100,
        method:"From Vehicles",
        status: "Process Completed",
        counter:13

    },
    {
        id: '5',
        wealthType: 2,
        name: "Shopping Mall",
        acquisitionValue: 500,
        method:"Asset Weighting",
        status: "From last month",
        counter:9

    },
    {
        id: '6',
        wealthType: 2,
        name: "Local Shop",
        acquisitionValue: 900,
        method:"From Vehicles",
        status: "Evaluation",
        counter:5

    },



// Industrial Buildings
    {
        id: '7',
        wealthType: 3,
        name: "Warehouse",
        acquisitionValue: 100,
        method:"From Vehicles",
        status: "Process Completed",
        counter:7

    },
    {
        id: '8',
        wealthType: 3,
        name: "Workshop",
        acquisitionValue: 100,
        method:"Asset Weighting",
        status: " From last month",
        counter:9

    },
    {
        id: '9',
        wealthType: 3,
        name: "Manufacturing Facility",
        acquisitionValue: 100,
        method:"From Vehicles",
        status: "Evaluation ",
        counter:5

    },


// Hospitality
{
    id: '10',
    wealthType: 4,
    name: "Hotel",
    acquisitionValue: 800,
    method:"Tasks",
    status: " From yesterday" ,
    counter:19

},
{
    id: '11',
    wealthType: 4,
    name: "Resort",
    acquisitionValue: 200,
    method:"Open",
    status: " Completed" ,
    counter:19

},
{
    id: '12',
    wealthType: 4,
    name: "Short-term Accommodation",
    acquisitionValue: 700,
    method:"Tasks",
    status: " From yesterday" ,
    counter:19

},


///////////////

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


