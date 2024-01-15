import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-one',
    templateUrl: './feature-twenty-one.component.html',
    styleUrls: ['./feature-twenty-one.component.css'],
})
export class FeatureTwentyOneComponent implements OnInit {
    featureData = [
        {
            id: 1,
            color: '#FFEBDB',
            icon: 'assets/images/deski/icon/132.svg',
            title: 'Core PHP',
            subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
        },
        {
            id: 2,
            color: '#E0F8F8',
            icon: 'assets/images/deski/icon/133.svg',
            title: 'Easy Customizable',
            subtitle: 'quis nostrud exerct ullamo ea nisi ut aliqu dolor',
            delay: '100',
        },
        {
            id: 3,
            color: '#F7EDFF',
            icon: 'assets/images/deski/icon/134.svg',
            title: 'Fast Support',
            subtitle: 'Duis aute irure dolor reprehen derit in voluptat velit.',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
