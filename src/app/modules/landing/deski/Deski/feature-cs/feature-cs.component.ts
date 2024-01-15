import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-cs',
    templateUrl: './feature-cs.component.html',
    styleUrls: ['./feature-cs.component.css'],
})
export class FeatureCsComponent implements OnInit {
    feature_data = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/20.svg',
            title: 'Smart popups',
            subtitle:
                'Create customized popups and show the right message at the right time.',
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
        },
        {
            id: 4,
            icon: 'assets/images/deski/icon/21.svg',
            title: 'Embeded Forms',
            subtitle:
                'Collect website leads with embedded forms and integrate easily.',
            delay: '100',
        },
        {
            id: 5,
            icon: 'assets/images/deski/icon/22.svg',
            title: 'Autoresponder',
            subtitle: 'Send welcome email to your new subscribers with a code.',
        },
        {
            id: 6,
            icon: 'assets/images/deski/icon/20.svg',
            title: 'Smart popups',
            subtitle:
                'Create customized popups and show the right message at the right time.',
            delay: '100',
        },
    ];

    text_block_data = [
        {
            id: 1,
            title: 'Single Sign on Reports',
            desc: 'Keep your clients informed at all times with fully editable, professional Client Reports',
        },
        {
            id: 2,
            title: 'Shared Shopping Cart',
            desc: 'Keep your clients informed at all times with fully editable, professional Client Reports',
            delay: '100',
        },
        {
            id: 3,
            title: 'Client',
            desc: 'Keep your clients informed at all times with fully editable, professional Client Reports',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
