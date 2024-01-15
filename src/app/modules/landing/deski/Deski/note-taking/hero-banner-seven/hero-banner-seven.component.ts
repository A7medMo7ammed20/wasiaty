import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
    selector: 'app-hero-banner-seven',
    templateUrl: './hero-banner-seven.component.html',
    styleUrls: ['./hero-banner-seven.component.css'],
})
export class HeroBannerSevenComponent implements OnInit {
    getFormData(data: NgForm) {
        console.log(data);
    }

    logoSliderData = [
        {
            id: 1,
            img: 'assets/images/deski/logo/logo-21.png',
        },
        {
            id: 2,
            img: 'assets/images/deski/logo/logo-22.png',
        },
        {
            id: 3,
            img: 'assets/images/deski/logo/logo-23.png',
        },
        {
            id: 4,
            img: 'assets/images/deski/logo/logo-24.png',
        },
        {
            id: 5,
            img: 'assets/images/deski/logo/logo-25.png',
        },
        {
            id: 6,
            img: 'assets/images/deski/logo/logo-21.png',
        },
        {
            id: 7,
            img: 'assets/images/deski/logo/logo-24.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
