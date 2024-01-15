import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-sixteen',
    templateUrl: './feature-sixteen.component.html',
    styleUrls: ['./feature-sixteen.component.css'],
})
export class FeatureSixteenComponent implements OnInit {
    featureData = [
        {
            id: 1,
            order_first: 'order-lg-last',
            fade_first: 'fade-left',
            padd: 'ps-5',
            sm_text: 'SUPPORTED',
            title: 'Import & Export all format.',
            subtitle:
                'Go paperless. Back up important documents to all your devices, and keep the information not the clutter.',
            order_last: 'order-lg-first',
            img: 'assets/images/deski/media/img_82.png',
            fade_last: 'fade-right',
        },

        {
            id: 2,
            item_2: 'mt-170 md-mt-120',
            fade_first: 'fade-right',
            padd: 'pe-5',
            sm_text: 'SHARE CoNTENT',
            title: 'Share content all platform.',
            subtitle:
                'Upload, edit, and share files with a team in a single place. Secure, backed up, and cross-device - now, work can happen from anywhere.',
            img: 'assets/images/deski/media/img_83.png',
            fade_last: 'fade-left',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
