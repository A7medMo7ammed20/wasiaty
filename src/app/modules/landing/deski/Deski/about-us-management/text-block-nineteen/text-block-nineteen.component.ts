import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-text-block-nineteen',
    templateUrl: './text-block-nineteen.component.html',
    styleUrls: ['./text-block-nineteen.component.css'],
})
export class TextBlockNineteenComponent implements OnInit {
    text_block_data = [
        {
            id: 1,
            bg: 'light-bg',
            title: 'Individual',
            subtitle:
                'Wzprenr Investor Network is a global community that extends the reach of leading',
            featureItems: [
                {
                    delay: '100',
                    icon: 'assets/images/deski/icon/07.svg',
                    list_title: 'Time well spent',
                    list_subtitle:
                        'Facilitates access to capital entrepreneurs through road show preparation.',
                },
                {
                    delay: '200',
                    icon: 'assets/images/deski/icon/08.svg',
                    list_title: 'Quietly powerful',
                    list_subtitle:
                        'We break down barriers so teams can focus on what matters working together to create products their customers love.',
                },
            ],
        },

        {
            id: 2,
            bg: 'dark-bg',
            title: 'Big Company',
            subtitle:
                'Wzprenr Investor Network is a global community that extends the reach of leading',
            featureItems: [
                {
                    delay: '100',
                    icon: 'assets/images/deski/icon/07.svg',
                    list_title: 'Make your work easy',
                    list_subtitle:
                        'Remove the fog. We don’t want to be another task to complete or a tool to decipher.',
                },
                {
                    delay: '200',
                    icon: 'assets/images/deski/icon/08.svg',
                    list_title: 'Build together',
                    list_subtitle:
                        'Software is made better together. From task completion to product launch, we celebrate team wins big and small.',
                },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
