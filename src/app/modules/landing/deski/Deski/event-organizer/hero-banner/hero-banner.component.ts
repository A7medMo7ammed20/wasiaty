import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.css'],
})
export class HeroBannerComponent implements OnInit {
    fancyFeatureData = [
        {
            id: 1,
            img: 'assets/images/deski/icon/60.svg',
            title: 'Smart popups',
            subtitle:
                'Create customized popups and show the message at the lorem',
        },
        {
            id: 2,
            img: 'assets/images/deski/icon/61.svg',
            title: 'Embeded Forms',
            subtitle:
                'Collect website leads with embedded forms and integrate easily.',
            delay: 100,
        },
        {
            id: 3,
            img: 'assets/images/deski/icon/62.svg',
            title: 'Autoresponder',
            subtitle:
                'Send welcome email to your new subscribers  with a code.',
            delay: 200,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
