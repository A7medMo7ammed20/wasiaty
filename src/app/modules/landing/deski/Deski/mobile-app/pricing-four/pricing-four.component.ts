import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pricing-four',
    templateUrl: './pricing-four.component.html',
    styleUrls: ['./pricing-four.component.css'],
})
export class PricingFourComponent implements OnInit {
    pricingData = [
        {
            id: 1,
            title: 'Starter Plan',
            icon: 'assets/images/deski/icon/140.svg',
            price: 9.99,
            list: '<li>Unlimited Email</li>	<li>5gb Hosting & Domain</li> <li>Email & Live chat.</li>',
            user: 3,
        },
        {
            id: 2,
            title: 'Silver Plan',
            icon: 'assets/images/deski/icon/141.svg',
            price: 19.99,
            list: '<li>Unlimited Email</li>	<li>5gb Hosting & Domain</li> <li>Email & Live chat.</li> <li>Backling</li>',
            user: 5,
            active: true,
        },
        {
            id: 3,
            title: 'Gold Plan',
            icon: 'assets/images/deski/icon/142.svg',
            price: 29.99,
            list: '<li>Unlimited Email</li>	<li>5gb Hosting & Domain</li> <li>Email & Live chat.</li>',
            user: 7,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
