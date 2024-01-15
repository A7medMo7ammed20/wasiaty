import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-four',
    templateUrl: './feature-twenty-four.component.html',
    styleUrls: ['./feature-twenty-four.component.css'],
})
export class FeatureTwentyFourComponent implements OnInit {
    featureData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/144.svg',
            title: 'Contracts',
            subtitle: 'Simplify the process to create proposals.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/145.svg',
            title: 'Proposal',
            subtitle: 'Create interactive, error-free quotes.',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/146.svg',
            title: 'eSignature',
            subtitle: 'Create interactive, error-free quotes.',
            delay: '200',
        },
        {
            id: 4,
            icon: 'assets/images/deski/icon/147.svg',
            title: 'Collect Doc',
            subtitle: 'Create interactive, error-free quotes.',
            delay: '300',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
