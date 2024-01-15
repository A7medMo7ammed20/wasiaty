import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, EffectFade } from 'swiper';

SwiperCore.use([Navigation, EffectFade]);

@Component({
    selector: 'app-testimonial-ten',
    templateUrl: './testimonial-ten.component.html',
    styleUrls: ['./testimonial-ten.component.css'],
})
export class TestimonialTenComponent implements OnInit {
    slider_data = [
        {
            id: 1,
            tag: 'Client Feedback',
            desc: 'Form builders are as old as the web, but Typeform elevates the medium substantially.',
            name: 'Sara Harsa',
            position: 'Head of Content Marketing',
            img: 'assets/images/deski/media/img_113.jpg',
        },
        {
            id: 2,
            tag: 'Client Feedback',
            desc: 'Whether you’re promoting your business, showcasing your work or opening your store.',
            name: 'Hasan Masud',
            position: 'Head of Content Marketing',
            img: 'assets/images/deski/media/img_114.jpg',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
