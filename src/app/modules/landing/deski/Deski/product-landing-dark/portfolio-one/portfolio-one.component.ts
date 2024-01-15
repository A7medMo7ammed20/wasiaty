import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
    selector: 'app-portfolio-one',
    templateUrl: './portfolio-one.component.html',
    styleUrls: ['./portfolio-one.component.css'],
})
export class PortfolioOneComponent implements OnInit {
    portfolioData = [
        {
            id: 1,
            img: 'assets/images/deski/media/img_73.png',
        },
        {
            id: 2,
            img: 'assets/images/deski/media/img_74.png',
        },
        {
            id: 3,
            img: 'assets/images/deski/media/img_75.png',
        },
        {
            id: 4,
            img: 'assets/images/deski/media/img_76.png',
        },
        {
            id: 5,
            img: 'assets/images/deski/media/img_75.png',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
