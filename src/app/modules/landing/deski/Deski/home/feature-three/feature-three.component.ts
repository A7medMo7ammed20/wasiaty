import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-three',
    templateUrl: './feature-three.component.html',
    styleUrls: ['./feature-three.component.css'],
})
export class FeatureThreeComponent implements OnInit {
    featureData = [
        {
            id: 1,
            img: 'assets/images/deski/media/img_02.png',
            title: 'Rena Singleton',
            subtitle: 'Former Assistant Jamuna Group.',
            desc: 'it’s a great exprience to work with deski. They’r vey humble and expert & the service has been excellent & super.',
        },
        {
            id: 2,
            img: 'assets/images/deski/media/img_03.png',
            title: 'Rashed Ka.',
            subtitle: 'UI designer Baper Inc.',
            desc: 'it’s a great exprience to work with deski. They’r vey humble and expert & the service has been excellent & super.',
        },
        {
            id: 3,
            img: 'assets/images/deski/media/img_04.png',
            title: 'Zubayer Hasan',
            subtitle: 'Front-end coder HeloShape.',
            desc: 'it’s a great exprience to work with deski. They’r vey humble and expert & the service has been excellent & super.',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
