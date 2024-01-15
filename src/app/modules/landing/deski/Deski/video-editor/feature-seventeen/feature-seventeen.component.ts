import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-seventeen',
    templateUrl: './feature-seventeen.component.html',
    styleUrls: ['./feature-seventeen.component.css'],
})
export class FeatureSeventeenComponent implements OnInit {
    featureData = [
        {
            id: 1,
            title: 'Promoty <br> your Event',
            img: 'assets/images/deski/media/img_84.png',
        },
        {
            id: 2,
            title: 'Social Media <br> Promotion',
            img: 'assets/images/deski/media/img_85.png',
            delay: '50',
        },
        {
            id: 3,
            title: 'Youtube Creator <br>Intro',
            img: 'assets/images/deski/media/img_86.png',
            delay: '100',
        },
        {
            id: 4,
            title: 'Dancing <br>People adv',
            img: 'assets/images/deski/media/img_87.png',
            delay: '150',
        },
        {
            id: 5,
            title: 'Cartoon for <br>children',
            img: 'assets/images/deski/media/img_88.png',
            delay: '50',
        },
        {
            id: 6,
            title: 'Music <br>Learning',
            img: 'assets/images/deski/media/img_89.png',
            delay: '100',
        },
        {
            id: 7,
            title: 'Greeting <br>intro',
            img: 'assets/images/deski/media/img_90.png',
            delay: '150',
        },
        {
            id: 8,
            title: 'Work <br>From Home',
            img: 'assets/images/deski/media/img_91.png',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
