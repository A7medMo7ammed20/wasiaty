import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-screen-two',
    templateUrl: './app-screen-two.component.html',
    styleUrls: ['./app-screen-two.component.css'],
})
export class AppScreenTwoComponent implements OnInit {
    appScreenData = [
        { id: 1, img: 'assets/images/deski/assets/screen_25.png' },
        { id: 2, img: 'assets/images/deski/assets/screen_26.png' },
        { id: 3, img: 'assets/images/deski/assets/screen_27.png' },
        { id: 4, img: 'assets/images/deski/assets/screen_28.png' },
        { id: 5, img: 'assets/images/deski/assets/screen_27.png' },
        { id: 6, img: 'assets/images/deski/assets/screen_25.png' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
