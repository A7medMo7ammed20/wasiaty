import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonial-six',
    templateUrl: './testimonial-six.component.html',
    styleUrls: ['./testimonial-six.component.css'],
})
export class TestimonialSixComponent implements OnInit {
    testimonialData = [
        {
            id: 1,
            user: 'assets/images/deski/media/img_78.png',
            name: 'Martin Jonas,',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
        {
            id: 2,
            user: 'assets/images/deski/media/img_79.png',
            name: 'Elias Brett,',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
        {
            id: 3,
            user: 'assets/images/deski/media/img_80.png',
            name: 'Rashed Ka,',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
        {
            id: 4,
            user: 'assets/images/deski/media/img_78.png',
            name: 'Martin Jonas,',
            country: 'USA',
            desc: 'Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
