import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pricing-five',
    templateUrl: './pricing-five.component.html',
    styleUrls: ['./pricing-five.component.css'],
})
export class PricingFiveComponent implements OnInit {
    pricingData = [
        {
            id: 1,
            title: 'Silver Plan',
            price: 97,
            info: 'Great for Individial Person',
            body_info: [
                {
                    id: 1,
                    text: 'Send documents for eSigning',
                    icon: 'assets/images/deski/icon/154.svg',
                },
                {
                    id: 2,
                    text: 'Multiple User',
                    icon: 'assets/images/deski/icon/154.svg',
                },
                {
                    id: 3,
                    text: 'Refund',
                    icon: 'assets/images/deski/icon/154.svg',
                },
                {
                    id: 4,
                    text: 'Bulk invite to sign',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 5,
                    text: 'Live Chat',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 6,
                    text: 'Send invite via Link',
                    icon: 'assets/images/deski/icon/155.svg',
                },
            ],
        },
        {
            id: 2,
            title: 'Gold Plan',
            price: 199,
            info: 'Great for Startup',
            body_info: [
                {
                    id: 1,
                    text: 'Send documents for eSigning',
                    icon: 'assets/images/deski/icon/154.svg',
                },
                {
                    id: 2,
                    text: 'Multiple User',
                    icon: 'assets/images/deski/icon/154.svg',
                },
                {
                    id: 3,
                    text: 'Refund',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 4,
                    text: 'Bulk invite to sign',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 5,
                    text: 'Live Chat',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 6,
                    text: 'Send invite via Link',
                    icon: 'assets/images/deski/icon/155.svg',
                },
            ],
        },
        {
            id: 3,
            title: 'Business Plan',
            price: 239,
            info: 'Great for Large Business',
            body_info: [
                {
                    id: 1,
                    text: 'Send documents for eSigning',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 2,
                    text: 'Multiple User',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 3,
                    text: 'Refund',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 4,
                    text: 'Bulk invite to sign',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 5,
                    text: 'Live Chat',
                    icon: 'assets/images/deski/icon/155.svg',
                },
                {
                    id: 6,
                    text: 'Send invite via Link',
                    icon: 'assets/images/deski/icon/155.svg',
                },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
