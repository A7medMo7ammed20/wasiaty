import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-thirteen',
    templateUrl: './feature-thirteen.component.html',
    styleUrls: ['./feature-thirteen.component.css'],
})
export class FeatureThirteenComponent implements OnInit {
    featureData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/94.svg',
            title: 'Web Clipper',
            desc: 'Deski Web offers a complete lineup of features from any major browser.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/95.svg',
            title: 'All Platform',
            desc: "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/96.svg',
            title: 'Character Finding',
            desc: 'Creation timelines for the standard lorem ipsum passage vary, with qius some citing.',
            delay: '200',
        },
        {
            id: 4,
            icon: 'assets/images/deski/icon/97.svg',
            title: 'App Integrations',
            desc: "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
        },
        {
            id: 5,
            icon: 'assets/images/deski/icon/98.svg',
            title: 'Web Application',
            desc: "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
            delay: '100',
        },
        {
            id: 6,
            icon: 'assets/images/deski/icon/99.svg',
            title: 'Notes & Docs',
            desc: "Letraset's dry-transfer sheets later entered the digital world via Aldus PageMaker.",
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
