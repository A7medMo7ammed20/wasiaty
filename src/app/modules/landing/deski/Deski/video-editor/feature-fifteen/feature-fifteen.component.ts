import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-fifteen',
    templateUrl: './feature-fifteen.component.html',
    styleUrls: ['./feature-fifteen.component.css'],
})
export class FeatureFifteenComponent implements OnInit {
    featureData = [
        {
            id: 1,
            color: '#FFCE22',
            icon: 'assets/images/deski/icon/112.svg',
            title: 'Green Screen',
            desc: 'Change your background and create special effects using the Green Screen tool.',
        },
        {
            id: 2,
            color: '#8F6BF6',
            icon: 'assets/images/deski/icon/113.svg',
            title: 'Audio Mixer',
            desc: 'Adjust the audio of each individual track on your timeline lorem elit extract.',
            delay: '150',
        },
        {
            id: 3,
            color: '#FF5C5C',
            icon: 'assets/images/deski/icon/114.svg',
            title: 'Pan & Zoom',
            desc: 'Add panning and zooming movements to still footage.',
        },
        {
            id: 4,
            color: '#63EAA9',
            icon: 'assets/images/deski/icon/115.svg',
            title: 'Advanced Text Editing',
            desc: 'Edit the color, size, font, and even animation of your text and titles.',
            delay: '150',
        },
        {
            id: 5,
            color: '#5BE2FF',
            icon: 'assets/images/deski/icon/116.svg',
            title: 'Color Tuning',
            desc: 'Adjust the white balance and dynamic range of your clips & long videos.',
        },
        {
            id: 6,
            color: '#FF56EE',
            icon: 'assets/images/deski/icon/117.svg',
            title: '3D Lut',
            desc: 'Choose from a selection of color grading presets inspired by popular movies.',
            delay: '150',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
