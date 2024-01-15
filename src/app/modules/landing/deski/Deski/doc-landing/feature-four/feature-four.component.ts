import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-four',
    templateUrl: './feature-four.component.html',
    styleUrls: ['./feature-four.component.css'],
})
export class FeatureFourComponent implements OnInit {
    fancyFeatureData = [
        {
            id: 1,
            img: 'assets/images/deski/icon/55.svg',
            category: 'Personal',
            title: 'With deski docs, you can write, edit, and collaborate wherever you are. For Free.',
        },
        {
            id: 2,
            img: 'assets/images/deski/icon/57.svg',
            category: 'Business',
            title: 'The deski Docs you love with added security and control for teams.',
            delay: '100',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
