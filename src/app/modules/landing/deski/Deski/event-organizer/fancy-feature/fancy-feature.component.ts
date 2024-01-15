import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fancy-feature',
    templateUrl: './fancy-feature.component.html',
    styleUrls: ['./fancy-feature.component.css'],
})
export class FancyFeatureComponent implements OnInit {
    fancyFeatureData = [
        {
            id: 1,
            img: 'assets/images/deski/assets/ils_15.svg',
            title: 'Join Our Platform',
            subtitle:
                'It only takes 5 minutes. Set up is smooth and simple fully lorem qui.',
        },
        {
            id: 2,
            img: 'assets/images/deski/assets/ils_16.svg',
            title: 'Manage you event',
            subtitle:
                'Choose a price package to suit you or pay per ticket. Sell on your website,',
            delay: 100,
        },
        {
            id: 3,
            img: 'assets/images/deski/assets/ils_17.svg',
            title: 'Start selling ticket',
            subtitle:
                'Get payments, detailed data on tickets sales & message guests lorem',
            delay: 200,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
