import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-three',
    templateUrl: './feature-twenty-three.component.html',
    styleUrls: ['./feature-twenty-three.component.css'],
})
export class FeatureTwentyThreeComponent implements OnInit {
    featureData = [
        {
            id: 1,
            fade: 'fade-right',
            bg_color: '#E8FBFF',
            color: '#8BBDC8',
            border_color: '#C0E9F2',
            title: 'Deski eSignature',
            subtitle:
                'Join 1,000,000 customers & hundreds of millions of signers',
            shape_1: 'assets/images/deski/shape/222.jpg',
            shape_2: 'assets/images/deski/shape/223.jpg',
        },
        {
            id: 2,
            fade: 'fade-left',
            bg_color: '#FFEFE7',
            color: '#DCAC91',
            border_color: '#F5D1BD',
            title: 'Agreement Cloud',
            subtitle: 'Connect and automate your entire agreement process.',
            shape_1: 'assets/images/deski/shape/224.jpg',
            shape_2: 'assets/images/deski/shape/225.jpg',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
