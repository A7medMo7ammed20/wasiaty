import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-six',
    templateUrl: './feature-six.component.html',
    styleUrls: ['./feature-six.component.css'],
})
export class FeatureSixComponent implements OnInit {
    fancyFeatureData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/68.svg',
            bg: '#FFEBDB',
            title: 'Secure & Trusted',
            subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
            delay: '',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/67.svg',
            bg: '#E0F8F8',
            title: 'Easy Customizable',
            subtitle: 'quis nostrud exerct ullamo ea nisi ut aliqui com dolor',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/70.svg',
            bg: '#F7EDFF',
            title: 'Fast Support',
            subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
