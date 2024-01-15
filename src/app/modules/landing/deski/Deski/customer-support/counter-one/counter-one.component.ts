import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-counter-one',
    templateUrl: './counter-one.component.html',
    styleUrls: ['./counter-one.component.css'],
})
export class CounterOneComponent implements OnInit {
    @Input() pricing!: boolean;
    @Input() ser_page!: boolean;
    @Input() feature_cs!: boolean;

    counterData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/23.svg',
            icon_2: 'assets/images/deski/icon/31.svg',
            value: 13,
            title: 'Ticket Sold',
            text: 'm',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/24.svg',
            icon_2: 'assets/images/deski/icon/32.svg',
            value: 30000,
            title: 'Event organisers',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/25.svg',
            icon_2: 'assets/images/deski/icon/33.svg',
            value: 123,
            title: 'Countries',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
