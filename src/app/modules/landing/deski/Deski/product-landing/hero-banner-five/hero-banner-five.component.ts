import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-banner-five',
    templateUrl: './hero-banner-five.component.html',
    styleUrls: ['./hero-banner-five.component.css'],
})
export class HeroBannerFiveComponent implements OnInit {
    logoSliderData = [
        {
            id: 1,
            img: 'assets/images/deski/logo/logo-12.png',
        },
        {
            id: 2,
            img: 'assets/images/deski/logo/logo-13.png',
        },
        {
            id: 3,
            img: 'assets/images/deski/logo/logo-14.png',
        },
        {
            id: 4,
            img: 'assets/images/deski/logo/logo-15.png',
        },
        {
            id: 5,
            img: 'assets/images/deski/logo/logo-16.png',
        },
        {
            id: 6,
            img: 'assets/images/deski/logo/logo-14.png',
        },
        {
            id: 7,
            img: 'assets/images/deski/logo/logo-13.png',
        },
        {
            id: 8,
            img: 'assets/images/deski/logo/logo-12.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
