import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter-four',
    templateUrl: './counter-four.component.html',
    styleUrls: ['./counter-four.component.css'],
})
export class CounterFourComponent implements OnInit {
    counterData = [
        {
            id: 1,
            value: 300,
            icon: 'assets/images/deski/icon/194.svg',
            title: 'Focal Adjustment',
        },
        {
            id: 2,
            value: 108,
            icon: 'assets/images/deski/icon/195.svg',
            title: 'Field of View',
            delay: '100',
        },
        {
            id: 3,
            value: 237,
            icon: 'assets/images/deski/icon/196.svg',
            title: 'Weight',
            delay: '200',
            text: 'g',
        },
        {
            id: 4,
            value: 32,
            icon: 'assets/images/deski/icon/197.svg',
            title: 'HD Lens Diameter',
            delay: '300',
            sm_text: 'mm',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
