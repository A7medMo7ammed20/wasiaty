import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-thirty-four',
    templateUrl: './feature-thirty-four.component.html',
    styleUrls: ['./feature-thirty-four.component.css'],
})
export class FeatureThirtyFourComponent implements OnInit {
    feature_data = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/35.svg',
            title: 'Customer Value',
            subtitle: 'A place to think and track ideas for you and your team',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/36.svg',
            title: 'Trusted & Reliable',
            subtitle: 'A home for your team, best practices and thoughts.',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/37.svg',
            title: 'Fast Response',
            subtitle:
                'Beautiful docs for your APIs, Products, FAQs, & User Guides,',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
