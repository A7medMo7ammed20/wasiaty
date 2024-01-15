import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-one',
    templateUrl: './feature-one.component.html',
    styleUrls: ['./feature-one.component.css'],
})
export class FeatureOneComponent implements OnInit {
    featureData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/01.svg',
            title: 'Create Project',
            desc: 'Don’t waste time on tedious manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/02.svg',
            title: 'Making Plan',
            desc: "Now it's more easy to make plan. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more.",
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/03.svg',
            title: 'Create Wireframe',
            desc: 'You are one step ahead to create wireframe. Let Automation do it for you. Simplify workflows.',
            textAlign: 'hover-content text-center',
        },
        {
            id: 4,
            icon: 'assets/images/deski/icon/04.svg',
            title: 'Final Output',
            desc: 'Checkout the final output. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more.',
            textAlign: 'hover-content text-end',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
