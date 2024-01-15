import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-eight',
    templateUrl: './feature-twenty-eight.component.html',
    styleUrls: ['./feature-twenty-eight.component.css'],
})
export class FeatureTwentyEightComponent implements OnInit {
    featureData = [
        {
            id: 1,
            bg_color: '#F7EDFF',
            icon: 'assets/images/deski/icon/166.svg',
            title: 'Chat & Messaging',
            subtitle:
                'Chat section is as significant as other sections on your website and it works best for your customers.',
        },
        {
            id: 2,
            bg_color: '#D8FFF1',
            icon: 'assets/images/deski/icon/167.svg',
            title: 'eCommerce',
            subtitle:
                'Build an online store that rank higher & sell more and integrates easily ooCommerce, to enhance the quality',
            delay: '100',
        },
        {
            id: 3,
            bg_color: '#E6FBFF',
            icon: 'assets/images/deski/icon/168.svg',
            title: 'Payment Gatway',
            subtitle:
                'It saves the client cards on file securely for an effortless checkout experience using our advanced, secure payments system.',
        },
        {
            id: 4,
            bg_color: '#FFEBDB',
            icon: 'assets/images/deski/icon/169.svg',
            title: 'Appointments',
            subtitle:
                'Our Scheduling Platform is Simple yet Powerful that you need to grow and manage your business in single user interface.',
            delay: '100',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
