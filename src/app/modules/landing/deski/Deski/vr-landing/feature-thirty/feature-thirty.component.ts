import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
    selector: 'app-feature-thirty',
    templateUrl: './feature-thirty.component.html',
    styleUrls: ['./feature-thirty.component.css'],
})
export class FeatureThirtyComponent implements OnInit {
    products_slider = [
        {
            id: 1,
            img: 'assets/images/deski/media/img_115.png',
            price: 72.0,
            title: 'Oculus Quest',
            ratings: [
                { rating: 1 },
                { rating: 2 },
                { rating: 3 },
                { rating: 4 },
                { rating: 5 },
            ],
        },
        {
            id: 2,
            img: 'assets/images/deski/media/img_116.png',
            price: 27.0,
            title: 'VR Controller',
            ratings: [
                { rating: 1 },
                { rating: 2 },
                { rating: 3 },
                { rating: 4 },
                { rating: 5 },
            ],
        },
        {
            id: 3,
            img: 'assets/images/deski/media/img_117.png',
            price: 382.0,
            title: 'Play Station 2',
            ratings: [
                { rating: 1 },
                { rating: 2 },
                { rating: 3 },
                { rating: 4 },
                { rating: 5 },
            ],
        },
        {
            id: 4,
            img: 'assets/images/deski/media/img_116.png',
            price: 27.0,
            title: 'VR Controller',
            ratings: [
                { rating: 1 },
                { rating: 2 },
                { rating: 3 },
                { rating: 4 },
                { rating: 5 },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
