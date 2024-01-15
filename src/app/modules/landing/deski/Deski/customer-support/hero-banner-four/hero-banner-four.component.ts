import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
    selector: 'app-hero-banner-four',
    templateUrl: './hero-banner-four.component.html',
    styleUrls: ['./hero-banner-four.component.css'],
})
export class HeroBannerFourComponent implements OnInit {
    getFormData(data: NgForm) {
        console.log(data);
    }

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
            img: 'assets/images/deski/logo/logo-5.png',
        },
        {
            id: 6,
            img: 'assets/images/deski/logo/logo-6.png',
        },
        {
            id: 7,
            img: 'assets/images/deski/logo/logo-7.png',
        },
        {
            id: 8,
            img: 'assets/images/deski/logo/logo-3.png',
        },
        {
            id: 9,
            img: 'assets/images/deski/logo/logo-1.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
