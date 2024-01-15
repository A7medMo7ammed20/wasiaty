import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-fourteen',
    templateUrl: './feature-fourteen.component.html',
    styleUrls: ['./feature-fourteen.component.css'],
})
export class FeatureFourteenComponent implements OnInit {
    tabButtons = [
        {
            id: 1,
            icon_1: 'assets/images/deski/icon/105.svg',
            icon_2: 'assets/images/deski/icon/105-c.svg',
            href: '#ft1',
            active: true,
        },
        {
            id: 2,
            icon_1: 'assets/images/deski/icon/106.svg',
            icon_2: 'assets/images/deski/icon/106-c.svg',
            href: '#ft2',
        },
        {
            id: 3,
            icon_1: 'assets/images/deski/icon/107.svg',
            icon_2: 'assets/images/deski/icon/107-c.svg',
            href: '#ft3',
        },
        {
            id: 4,
            icon_1: 'assets/images/deski/icon/108.svg',
            icon_2: 'assets/images/deski/icon/108-c.svg',
            href: '#ft4',
        },
        {
            id: 5,
            icon_1: 'assets/images/deski/icon/109.svg',
            icon_2: 'assets/images/deski/icon/109-c.svg',
            href: '#ft5',
        },
        {
            id: 6,
            icon_1: 'assets/images/deski/icon/110.svg',
            icon_2: 'assets/images/deski/icon/110-c.svg',
            href: '#ft6',
        },
        {
            id: 7,
            icon_1: 'assets/images/deski/icon/111.svg',
            icon_2: 'assets/images/deski/icon/111-c.svg',
            href: '#ft7',
        },
    ];

    tabItems = [
        {
            id: 1,
            tab_id: 'ft1',
            img: 'assets/images/deski/media/img_81.png',
            ripple_text: 'Track Human faces',
            title: 'Motation Tracking',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
            active: true,
        },
        {
            id: 2,
            tab_id: 'ft2',
            img: 'assets/images/deski/media/img_92.png',
            ripple_text: 'keyframing experience',
            title: 'Keyframing',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
            id: 3,
            tab_id: 'ft3',
            img: 'assets/images/deski/media/img_93.png',
            ripple_text: 'Audio track down',
            title: 'Audio Ducking',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
            id: 4,
            tab_id: 'ft4',
            img: 'assets/images/deski/media/img_94.png',
            ripple_text: 'Take the color',
            title: 'Color Matching',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
            id: 5,
            tab_id: 'ft5',
            img: 'assets/images/deski/media/img_95.png',
            ripple_text: 'Edit videos at up to 4K',
            title: '4K Editing Support',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
            id: 6,
            tab_id: 'ft6',
            img: 'assets/images/deski/media/img_96.png',
            ripple_text: 'Remove unwanted noise',
            title: 'Noise Removal',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
            id: 7,
            tab_id: 'ft7',
            img: 'assets/images/deski/media/img_97.png',
            ripple_text: 'Layer multiple video clips',
            title: 'Picture in Picture (PIP)',
            desc: 'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
