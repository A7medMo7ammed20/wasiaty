import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-screen',
    templateUrl: './app-screen.component.html',
    styleUrls: ['./app-screen.component.css'],
})
export class AppScreenComponent implements OnInit {
    appScreenData = [
        { id: 1, img: 'assets/images/deski/assets/screen_21.png' },
        { id: 2, img: 'assets/images/deski/assets/screen_22.png' },
        { id: 3, img: 'assets/images/deski/assets/screen_23.png' },
        { id: 4, img: 'assets/images/deski/assets/screen_22.png' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
