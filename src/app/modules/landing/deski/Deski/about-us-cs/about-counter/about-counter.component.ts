import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-counter',
    templateUrl: './about-counter.component.html',
    styleUrls: ['./about-counter.component.css'],
})
export class AboutCounterComponent implements OnInit {
    counterData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/31.svg',
            value: 13,
            title: 'Ticket Sold',
            text: 'm',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/32.svg',
            value: 30000,
            title: 'Event organizers',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/33.svg',
            value: 123,
            title: 'Countries',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
