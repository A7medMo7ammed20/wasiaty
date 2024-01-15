import { Component, HostListener, OnInit } from '@angular/core';
import { ServicesService } from '../services/service-data/services.service';

@Component({
    selector: 'app-services-v4',
    templateUrl: './services-v4.component.html',
    styleUrls: ['./services-v4.component.css'],
})
export class ServicesV4Component implements OnInit {
    headerSticky: boolean = false;
    menuActive: boolean = false;
    // sticky nav
    @HostListener('window:scroll', ['$event']) onscroll() {
        if (window.scrollY > 80) {
            this.headerSticky = true;
        } else {
            this.headerSticky = false;
        }
    }

    // handleNavToggle
    handleNavToggle() {
        this.menuActive = !this.menuActive;
    }

    // counter data
    counterData = [
        {
            id: 1,
            color: 'counter-box-one color-one',
            value: 15,
            title: 'Projects',
        },
        {
            id: 2,
            color: 'counter-box-one color-two',
            value: 3,
            title: 'Workers',
        },
        {
            id: 3,
            color: 'counter-box-one color-three',
            value: 123,
            title: 'Offices',
        },
    ];

    // feature data
    feature_data = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/186.svg',
            title: 'Daily Updates',
            subtitle:
                'Elit esse cillum dolore eu fugiat nulla pariatur lom elit',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/187.svg',
            title: 'Easu Cutomization',
            subtitle:
                'Nulla vitae elit libero, haretra augue. Donec id elit non m.',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/188.svg',
            title: 'Fast Support',
            subtitle:
                'Nulla vitae elit libero, a phare augue. Donec id elit non mi porta.',
            delay: '200',
        },
    ];

    servicesItems: any;

    constructor(private services: ServicesService) {
        this.servicesItems = this.services.servicesData().slice(15, 21);
    }

    ngOnInit(): void {}
}
