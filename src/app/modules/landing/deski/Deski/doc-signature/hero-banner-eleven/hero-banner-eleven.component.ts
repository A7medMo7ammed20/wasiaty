import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-hero-banner-eleven',
    templateUrl: './hero-banner-eleven.component.html',
    styleUrls: ['./hero-banner-eleven.component.css'],
})
export class HeroBannerElevenComponent implements OnInit {
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
            img: 'assets/images/deski/logo/logo-2.png',
        },
        {
            id: 7,
            img: 'assets/images/deski/logo/logo-4.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
