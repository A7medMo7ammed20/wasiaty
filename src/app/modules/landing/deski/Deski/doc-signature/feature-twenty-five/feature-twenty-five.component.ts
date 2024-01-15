import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-five',
    templateUrl: './feature-twenty-five.component.html',
    styleUrls: ['./feature-twenty-five.component.css'],
})
export class FeatureTwentyFiveComponent implements OnInit {
    featureData = [
        {
            id: 1,
            bg_color: '#623A75',
            logo: 'assets/images/deski/logo/logo-53.png',
            title: 'Seattle Opera Simplifies Performance Planning with deski eSignature.',
        },
        {
            id: 2,
            bg_color: '#314B7D',
            logo: 'assets/images/deski/logo/logo-54.png',
            title: 'How DocuSign CLM Helps Celonis Scale Its Global Business',
            delay: '100',
        },
        {
            id: 3,
            bg_color: '#2B4E56',
            logo: 'assets/images/deski/logo/logo-55.png',
            title: 'Sunrun makes solar contracts convenient with deski and Salesforce',
        },
        {
            id: 4,
            bg_color: '#7A4040',
            logo: 'assets/images/deski/logo/logo-56.png',
            title: 'McCloskey Motors builds a touchless car sale process with Design.',
            delay: '100',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
