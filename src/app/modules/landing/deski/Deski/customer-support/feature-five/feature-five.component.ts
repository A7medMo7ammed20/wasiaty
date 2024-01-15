import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-five',
    templateUrl: './feature-five.component.html',
    styleUrls: ['./feature-five.component.css'],
})
export class FeatureFiveComponent implements OnInit {
    fancyFeatureData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/20.svg',
            title: 'Smart popups',
            subtitle:
                'Create customized popups and show the right message at the right time. lorem dummy.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/21.svg',
            title: 'Embeded Forms',
            subtitle:
                'Collect website leads with embedded forms and integrate easily.',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/22.svg',
            title: 'Autoresponder',
            subtitle: 'Send welcome email to your new subscribers with a code.',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
