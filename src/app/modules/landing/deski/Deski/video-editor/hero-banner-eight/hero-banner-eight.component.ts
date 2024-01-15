import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
    selector: 'app-hero-banner-eight',
    templateUrl: './hero-banner-eight.component.html',
    styleUrls: ['./hero-banner-eight.component.css'],
})
export class HeroBannerEightComponent implements OnInit {
    logoSliderData = [
        {
            id: 1,
            img: 'assets/images/deski/logo/logo-1.png',
        },
        {
            id: 2,
            img: 'assets/images/deski/logo/logo-2.png',
        },
        {
            id: 3,
            img: 'assets/images/deski/logo/logo-3.png',
        },
        {
            id: 4,
            img: 'assets/images/deski/logo/logo-4.png',
        },
        {
            id: 5,
            img: 'assets/images/deski/logo/logo-6.png',
        },
        {
            id: 6,
            img: 'assets/images/deski/logo/logo-3.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
