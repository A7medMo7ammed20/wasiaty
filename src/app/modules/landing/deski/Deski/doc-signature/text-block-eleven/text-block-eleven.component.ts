import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-text-block-eleven',
    templateUrl: './text-block-eleven.component.html',
    styleUrls: ['./text-block-eleven.component.css'],
})
export class TextBlockElevenComponent implements OnInit {
    textBlockData = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/149.svg',
            title: 'Sign Doc Anywhere',
            subtitle:
                'Deski Web offers a complete lineup of features from any major browser.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/150.svg',
            title: 'Simple to use',
            subtitle:
                "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/151.svg',
            title: 'Save time & Effort',
            subtitle:
                'Creation timelines for the standard lorem ipsum passage vary, with qius some citing.',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
