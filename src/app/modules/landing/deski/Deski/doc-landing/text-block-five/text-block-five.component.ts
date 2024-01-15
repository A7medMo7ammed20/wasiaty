import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-text-block-five',
    templateUrl: './text-block-five.component.html',
    styleUrls: ['./text-block-five.component.css'],
})
export class TextBlockFiveComponent implements OnInit {
    block_style_data = [
        {
            id: 1,
            img: 'assets/images/deski/assets/ils_10.svg',
            order_first: 'order-lg-last',
            order_last: 'order-lg-first',
            fade_first: 'fade-left',
            fade_last: 'fade-right',
            m: 'ms-auto',
            sm_text: 'Documentation',
            title: 'A home for your team, best-practices & thoughts.',
            subtitle:
                'With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.',
        },
        {
            id: 2,
            img: 'assets/images/deski/assets/ils_11.svg',
            fade_first: 'fade-right',
            fade_last: 'fade-left',
            m: 'me-auto',
            sm_text: 'User Guides',
            title: 'Docs for your APIs, products, FAQs and user guides,',
            subtitle:
                'With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.',
        },
        {
            id: 3,
            img: 'assets/images/deski/assets/ils_12.svg',
            order_first: 'order-lg-last',
            order_last: 'order-lg-first',
            fade_first: 'fade-left',
            fade_last: 'fade-right',
            m: 'ms-auto',
            sm_text: 'Combine Idea',
            title: 'A place to think and track ideas for you & your team',
            subtitle:
                'With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
