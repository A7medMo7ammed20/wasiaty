import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonial-seven',
    templateUrl: './testimonial-seven.component.html',
    styleUrls: ['./testimonial-seven.component.css'],
})
export class TestimonialSevenComponent implements OnInit {
    testimonialData = [
        {
            id: 1,
            user: 'assets/images/deski/media/img_78.png',
            name: 'Martin Jonas,',
            color: '#FF47E2',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
        {
            id: 2,
            user: 'assets/images/deski/media/img_79.png',
            name: 'Elias Brett,',
            color: '#00E5F3',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
        {
            id: 3,
            user: 'assets/images/deski/media/img_80.png',
            name: 'Rashed Ka,',
            color: '#FFCF24',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
        {
            id: 4,
            user: 'assets/images/deski/media/img_78.png',
            name: 'Martin Jonas,',
            color: '#8F6BF6',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
