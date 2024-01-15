import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty',
    templateUrl: './feature-twenty.component.html',
    styleUrls: ['./feature-twenty.component.css'],
})
export class FeatureTwentyComponent implements OnInit {
    featureData = [
        {
            id: 1,
            color: '#3FE193',
            icon: 'assets/images/deski/icon/124.svg',
            title: 'Sports & Fitness',
            subtitle:
                'Personal trainers, Gyms Fitness classes, Yoga classes Golf classes, Sport items renting',
        },
        {
            id: 2,
            color: '#FF4F86',
            icon: 'assets/images/deski/icon/125.svg',
            title: 'Beauty and Wellness',
            subtitle:
                'Eyelash extensions , Hair salons, Spa salons Beauty salons, Nail salons',
            delay: '100',
        },
        {
            id: 3,
            color: '#FFCF39',
            icon: 'assets/images/deski/icon/126.svg',
            title: 'Events & entertainment',
            subtitle:
                'Art classes, Escape rooms Photographers, Equipment Rental & more.',
        },
        {
            id: 4,
            color: '#6D64FF',
            icon: 'assets/images/deski/icon/127.svg',
            title: 'Officials & Financial',
            subtitle:
                'Embassies and consulates, City councils, Call centers Financial services, Interview scheduling.',
            delay: '100',
        },
        {
            id: 5,
            color: '#E752FF',
            icon: 'assets/images/deski/icon/128.svg',
            title: 'Personal meetings',
            subtitle:
                'Counselling ,Coaching, Business, Advisory, Spiritual services & more.',
        },
        {
            id: 6,
            color: '#29EEFB',
            icon: 'assets/images/deski/icon/129.svg',
            title: 'Driving Lessons',
            subtitle: 'Driving Schools, Driving Instructors.',
            delay: '100',
        },
        {
            id: 7,
            color: '#32B5FF',
            icon: 'assets/images/deski/icon/130.svg',
            title: 'Education System',
            subtitle:
                'Universities, Colleges, Schools, Libraries, Parent meetings, Tutoring lessons.',
        },
        {
            id: 8,
            color: '#FFA361',
            icon: 'assets/images/deski/icon/131.svg',
            title: 'Medical services',
            subtitle:
                'Massage & Body Treatments, Dental Clinics, Medical Clinics & more.',
            delay: '100',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
