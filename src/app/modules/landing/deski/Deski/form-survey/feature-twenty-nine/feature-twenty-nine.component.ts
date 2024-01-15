import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-nine',
    templateUrl: './feature-twenty-nine.component.html',
    styleUrls: ['./feature-twenty-nine.component.css'],
})
export class FeatureTwentyNineComponent implements OnInit {
    featureData = [
        {
            id: 1,
            bg_color: '#F0F0FF',
            icon: 'assets/images/deski/icon/190.svg',
            title: 'Choose',
            subtitle: 'Simplify the process to create proposals.',
        },
        {
            id: 2,
            bg_color: '#FCF2DA',
            icon: 'assets/images/deski/icon/191.svg',
            title: 'Create',
            subtitle: 'Create interactive, error-free quotes.',
            delay: '100',
        },
        {
            id: 3,
            bg_color: '#EBFBED',
            icon: 'assets/images/deski/icon/192.svg',
            title: 'Check',
            subtitle: 'Create interactive, error-free quotes.',
            delay: '200',
        },
        {
            id: 4,
            bg_color: '#FFEEEE',
            icon: 'assets/images/deski/icon/193.svg',
            title: 'Final',
            subtitle: 'Create interactive, error-free quotes.',
            delay: '300',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
