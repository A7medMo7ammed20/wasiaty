import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
    selector: 'app-feature-slider',
    templateUrl: './feature-slider.component.html',
    styleUrls: ['./feature-slider.component.css'],
})
export class FeatureSliderComponent implements OnInit {
    feature_slider = [
        { id: 1, img: 'assets/images/deski/media/img_110.jpg' },
        { id: 2, img: 'assets/images/deski/media/img_111.jpg' },
        { id: 3, img: 'assets/images/deski/media/img_112.jpg' },
        { id: 4, img: 'assets/images/deski/media/img_111.jpg' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
