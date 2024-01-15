import { Component, OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Scrollbar } from 'swiper';

SwiperCore.use([Keyboard, Scrollbar]);

@Component({
    selector: 'app-text-block-four',
    templateUrl: './text-block-four.component.html',
    styleUrls: ['./text-block-four.component.css'],
})
export class TextBlockFourComponent implements OnInit {
    sliderData = [
        {
            id: 1,
            img: 'assets/images/deski/assets/feature-img-12.png',
        },
        {
            id: 2,
            img: 'assets/images/deski/assets/feature-img-12.png',
        },
        {
            id: 3,
            img: 'assets/images/deski/assets/feature-img-12.png',
        },
    ];

    blockData = [
        {
            id: 1,
            title: 'Personal Notes',
            subtitle: 'A place to think and track ideas for you and your team',
        },
        {
            id: 2,
            title: 'Knowledge Base',
            subtitle: 'A home for your team, best practices and thoughts.',
        },
        {
            id: 3,
            title: 'Products Doc',
            subtitle:
                'Beautiful docs for your APIs, Products, FAQs, & User Guides,',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
