import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-useable-tools',
    templateUrl: './useable-tools.component.html',
    styleUrls: ['./useable-tools.component.css'],
})
export class UseableToolsComponent implements OnInit {
    @Input() about_m!: boolean;

    tools_data = [
        {
            id: 1,
            col: 'col-lg-3 col-md-4 col-6',
            box: 'bx-a',
            img: 'assets/images/deski/logo/p-1.png',
        },
        {
            id: 2,
            col: 'col-lg-2 col-md-4 col-6',
            box: 'bx-b',
            img: 'assets/images/deski/logo/p-2.png',
            delay: '50',
        },
        {
            id: 3,
            col: 'col-lg-3 col-md-4 col-6',
            box: 'bx-c',
            img: 'assets/images/deski/logo/p-3.png',
            delay: '150',
        },
        {
            id: 4,
            col: 'col-xl-2 col-lg-3 col-md-4 col-6',
            box: 'bx-d',
            img: 'assets/images/deski/logo/p-4.png',
            delay: '200',
        },
        {
            id: 5,
            col: 'col-xl-2 col-lg-3 col-md-4 col-6',
            box: 'bx-e',
            img: 'assets/images/deski/logo/p-5.png',
            delay: '250',
        },
        {
            id: 6,
            col: 'col-xl-4 col-lg-2 col-md-4 col-6',
            box: 'bx-f',
            img: 'assets/images/deski/logo/p-6.png',
            delay: '50',
        },
        {
            id: 7,
            col: 'col-xl-2 col-lg-3 col-md-4 col-6',
            box: 'bx-g',
            img: 'assets/images/deski/logo/p-7.png',
            delay: '100',
        },
        {
            id: 8,
            col: 'col-xl-3 col-lg-3 col-md-4 col-6',
            box: 'bx-h',
            img: 'assets/images/deski/logo/p-8.png',
            delay: '150',
        },
        {
            id: 9,
            col: 'col-xl-3 col-lg-11 col-md-4 col-6',
            box: 'bx-i',
            img: 'assets/images/deski/logo/p-9.png',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
