import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonial-eleven',
    templateUrl: './testimonial-eleven.component.html',
    styleUrls: ['./testimonial-eleven.component.css'],
})
export class TestimonialElevenComponent implements OnInit {
    testimonialData = [
        {
            id: 1,
            user: 'assets/images/deski/media/img_46.png',
            name: 'Martin Jonas,',
            country: 'USA',
            desc: 'Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.',
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
            user: 'assets/images/deski/media/img_47.png',
            name: 'Elias Brett,',
            country: 'New york',
            desc: 'Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.',
            ratings: [
                { rating: 1 },
                { rating: 2 },
                { rating: 3 },
                { rating: 4 },
            ],
        },
        {
            id: 3,
            user: 'assets/images/deski/media/img_48.png',
            name: 'Rashed Ka,',
            country: 'California',
            desc: 'Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.',
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
            user: 'assets/images/deski/media/img_48.png',
            name: 'Martin Jonas,',
            country: 'London',
            desc: 'Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.',
            ratings: [
                { rating: 1 },
                { rating: 2 },
                { rating: 3 },
                { rating: 4 },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
