import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mega-menu',
    templateUrl: './mega-menu.component.html',
    styleUrls: ['./mega-menu.component.css'],
})
export class MegaMenuComponent implements OnInit {
    homes_data = [
        {
            id: 1,
            url: '/event-organizer',
            img: 'assets/images/deski/menu/home01.png',
            title: 'Event Organizer',
        },
        {
            id: 2,
            url: '/doc-landing',
            img: 'assets/images/deski/menu/home02.png',
            title: 'Doc landing',
        },
        {
            id: 3,
            url: '/',
            img: 'assets/images/deski/menu/home03.png',
            title: 'Project Management',
        },
        {
            id: 4,
            url: '/customer-support',
            img: 'assets/images/deski/menu/home04.png',
            title: 'Customer Support',
        },
        {
            id: 5,
            url: '/product-landing',
            img: 'assets/images/deski/menu/home05.png',
            title: 'Product Landing',
        },
        {
            id: 6,
            url: '/product-landing-dark',
            img: 'assets/images/deski/menu/home06.png',
            title: 'Product Landing Dark',
        },
        {
            id: 7,
            url: '/note-taking',
            img: 'assets/images/deski/menu/home07.png',
            title: 'Note Taking App landing',
        },
        {
            id: 8,
            url: '/video-editor',
            img: 'assets/images/deski/menu/home08.png',
            title: 'Video Editor Landing',
        },
        {
            id: 9,
            url: '/appointment-scheduling',
            img: 'assets/images/deski/menu/home10.png',
            title: 'Appointment Schedule',
        },
        {
            id: 10,
            url: '/mobile-app',
            img: 'assets/images/deski/menu/home11.png',
            title: 'Mobile App Landing',
        },
        {
            id: 11,
            url: '/doc-signature',
            img: 'assets/images/deski/menu/home12.png',
            title: 'Doc Signature Landing',
        },
        {
            id: 12,
            url: '/website-builder',
            img: 'assets/images/deski/menu/home13.png',
            title: 'Website Builder',
        },
        {
            id: 13,
            url: '/form-survey',
            img: 'assets/images/deski/menu/home14.png',
            title: 'Form & Survey',
        },
        {
            id: 14,
            url: '/vr-landing',
            img: 'assets/images/deski/menu/home16.png',
            title: 'VR Landing',
        },
        {
            id: 15,
            url: '/coming-soon',
            img: 'assets/images/deski/menu/home09.png',
            title: 'Coming Soon',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
