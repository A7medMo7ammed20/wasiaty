import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
    selector: 'app-testimonial-two',
    templateUrl: './testimonial-two.component.html',
    styleUrls: ['./testimonial-two.component.css'],
})
export class TestimonialTwoComponent implements OnInit {
    testimonialData = [
        {
            id: 1,
            img: 'assets/images/deski/logo/logo-8.png',
            name: 'Rashed Ka..',
            title: 'Founder CreativeGigs',
            desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.',
        },
        {
            id: 2,
            img: 'assets/images/deski/logo/logo-9.png',
            name: 'Zubayer Hasan.',
            title: 'CEO & Founder Heloshape',
            desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.',
        },
        {
            id: 3,
            img: 'assets/images/deski/logo/logo-10.png',
            name: 'Eh Jewel',
            title: 'Senior Developer',
            desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.',
        },
        {
            id: 4,
            img: 'assets/images/deski/logo/logo-9.png',
            name: 'Zubayer Hasan.',
            title: 'CEO & Founder Heloshape',
            desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.',
        },
        {
            id: 5,
            img: 'assets/images/deski/logo/logo-10.png',
            name: 'Eh Jewel',
            title: 'Senior Developer',
            desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
