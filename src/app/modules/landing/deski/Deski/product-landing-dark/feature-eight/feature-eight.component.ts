import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-eight',
    templateUrl: './feature-eight.component.html',
    styleUrls: ['./feature-eight.component.css'],
})
export class FeatureEightComponent implements OnInit {
    featureData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/78.svg',
            title: 'Easy Customizable',
            subtitle: 'Duis aute irure dolor reprehen derit in voluptat velit.',
            hover_text: 'Bring all team slit managment task quis togather.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/79.svg',
            title: 'Modern & Slick',
            subtitle: 'Duis aute irure dolor reprehen derit in voluptat velit.',
            hover_text: 'Bring all team slit managment task quis togather.',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/80.svg',
            title: 'Trusted & Secure',
            subtitle: 'Duis aute irure dolor reprehen derit in voluptat velit.',
            hover_text: 'Bring all team slit managment task quis togather.',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
