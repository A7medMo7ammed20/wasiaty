import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pricing-area-three',
    templateUrl: './pricing-area-three.component.html',
    styleUrls: ['./pricing-area-three.component.css'],
})
export class PricingAreaThreeComponent implements OnInit {
    pricing_data = [
        {
            id: 'month',
            active: true,
            pricing_items: [
                {
                    id: 1,
                    pac_name: 'Starter',
                    icon: 'assets/images/deski/icon/38.svg',
                    price: 8,
                    bill_cycle: 'Billed per agent',
                    list_items: [
                        { list: '60-day chat history' },
                        { list: 'Basic widget customization' },
                        { list: 'Ticketing system' },
                        { list: 'Data security' },
                    ],
                },
                {
                    id: 2,
                    pac_name: 'Team',
                    icon: 'assets/images/deski/icon/40.svg',
                    price: 19,
                    bill_cycle: 'Billed per agent',
                    list_items: [
                        { list: '60-day chat history' },
                        { list: 'Basic widget customization' },
                        { list: 'Ticketing system' },
                        { list: 'Data security' },
                    ],
                },
                {
                    id: 3,
                    pac_name: 'Business',
                    icon: 'assets/images/deski/icon/41.svg',
                    price: 35,
                    bill_cycle: 'Billed per agent',
                    list_items: [
                        { list: '60-day chat history' },
                        { list: 'Basic widget customization' },
                        { list: 'Ticketing system' },
                        { list: 'Data security' },
                    ],
                },
            ],
        },

        {
            id: 'year',
            pricing_items: [
                {
                    id: 1,
                    pac_name: 'Starter',
                    icon: 'assets/images/deski/icon/38.svg',
                    price: 18,
                    bill_cycle: 'Billed per agent',
                    list_items: [
                        { list: '60-day chat history' },
                        { list: 'Basic widget customization' },
                        { list: 'Ticketing system' },
                        { list: 'Data security' },
                    ],
                },
                {
                    id: 2,
                    pac_name: 'Team',
                    icon: 'assets/images/deski/icon/40.svg',
                    price: 129,
                    bill_cycle: 'Billed per agent',
                    list_items: [
                        { list: '60-day chat history' },
                        { list: 'Basic widget customization' },
                        { list: 'Ticketing system' },
                        { list: 'Data security' },
                    ],
                },
                {
                    id: 3,
                    pac_name: 'Business',
                    icon: 'assets/images/deski/icon/41.svg',
                    price: 29,
                    bill_cycle: 'Billed per agent',
                    list_items: [
                        { list: '60-day chat history' },
                        { list: 'Basic widget customization' },
                        { list: 'Ticketing system' },
                        { list: 'Data security' },
                    ],
                },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
