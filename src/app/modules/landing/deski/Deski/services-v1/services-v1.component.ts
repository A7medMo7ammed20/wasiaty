import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service-data/services.service';

@Component({
    selector: 'app-services-v1',
    templateUrl: './services-v1.component.html',
    styleUrls: ['./services-v1.component.css'],
})
export class ServicesV1Component implements OnInit {
    block_data = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/171.svg',
            title: 'Daily Updates',
            subtitle:
                'Elit esse cillum dolore eu fugiat nulla pariatur lorem elit',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/172.svg',
            title: 'Easu Cutomization',
            subtitle:
                'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/173.svg',
            title: 'Fast Support',
            subtitle:
                'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.',
        },
    ];

    servicesItems: any;

    constructor(private services: ServicesService) {
        this.servicesItems = this.services.servicesData().slice(0, 6);
    }

    ngOnInit(): void {}
}
