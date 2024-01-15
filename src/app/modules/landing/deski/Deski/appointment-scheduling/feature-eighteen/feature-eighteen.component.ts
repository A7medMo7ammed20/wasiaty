import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-eighteen',
    templateUrl: './feature-eighteen.component.html',
    styleUrls: ['./feature-eighteen.component.css'],
})
export class FeatureEighteenComponent implements OnInit {
    featureData = [
        {
            id: 1,
            color: '#FF4A8B',
            icon: 'assets/images/deski/icon/121.svg',
            title: 'Appoinments',
            desc: 'Online video meetings image Online Video Meetings SimplyBook',
        },
        {
            id: 2,
            color: '#6D49FF',
            icon: 'assets/images/deski/icon/122.svg',
            title: 'Class Booking',
            desc: 'Add video meeting links to your appointments with the Zoom Ror Teleport integrations.',
            delay: '100',
        },
        {
            id: 3,
            color: '#FFB951',
            icon: 'assets/images/deski/icon/123.svg',
            title: 'Fast Support',
            desc: 'Customize your virtual office with personalized page URLs, logos, colors and more.',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
