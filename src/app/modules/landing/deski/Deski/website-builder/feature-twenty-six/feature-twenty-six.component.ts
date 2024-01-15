import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-six',
    templateUrl: './feature-twenty-six.component.html',
    styleUrls: ['./feature-twenty-six.component.css'],
})
export class FeatureTwentySixComponent implements OnInit {


    featureData = [
        {
            id: 1,
             icon: 'assets/images/deski/icon/94.svg',
            title: 'Intuitive Will Creation',
            subtitle:
                'Craft your will effortlessly with eWasya\'s intuitive editor, saving you time in the estate planning process.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/95.svg',
            title: 'Device-Friendly Editing',
            subtitle:
                "Edit your will seamlessly on any device, ensuring convenience and accessibility for your legacy planning.",
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/96.svg',
            title: 'An Unprecedented Vision',
            subtitle:
                'An electronic bequest offers a cutting-edge approach to estate and wealth management, giving you unprecedented insight and control over your financial situation.',
            delay: '200',
        },
        {
            id: 4,
            icon: 'assets/images/deski/icon/97.svg',
            title: 'Sharia Compliance',
            subtitle:
                "At eWasya, aligning with Islamic inheritance laws is not just a priority, it's the foundation of our platform. We have partnered with esteemed Sharia scholars to ensure that every aspect of eWasya.",
        },
        {
            id: 5,
            icon: 'assets/images/deski/icon/98.svg',
            title: 'Wealth Management',
            subtitle:
                'An electronic will offers a cutting-edge approach to estate and wealth management, giving you unprecedented insight and control over your financial situation. ',
            delay: '100',
        },
        {
            id: 6,
            icon: 'assets/images/deski/icon/99.svg',
            title: 'Effortless Content Import',
            subtitle:
                "Import your estate details effortlessly, ensuring a smooth transition from traditional methods to eWasya's digital platform.",
            delay: '200',
        },
    ];


    constructor() {}

    ngOnInit(): void {}
}
