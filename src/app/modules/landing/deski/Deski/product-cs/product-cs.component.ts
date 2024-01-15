import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-cs',
    templateUrl: './product-cs.component.html',
    styleUrls: ['./product-cs.component.css'],
})
export class ProductCsComponent implements OnInit {
    feature_data = [
        {
            id: 1,
            fade_1: 'fade-right',
            fade_2: 'fade-left',
            img: 'assets/images/deski/assets/ils_04.svg',
            sm_title: 'Create Event',
            title: 'Provide your support now simple and easy.',
            subtitle:
                'Set-up a simple, professional box-office page on your site (or standalone) in minutes. Then design and customise it as much (or as little) as you like with our user-friendly dashboard',
        },
        {
            id: 2,
            fade_1: 'fade-left',
            fade_2: 'fade-right',
            order_1: 'order-lg-last',
            order_2: 'order-lg-first',
            img: 'assets/images/deski/assets/ils_05.svg',
            sm_title: 'SELL TICKET',
            title: 'Sell tickets anywhere anytime online.',
            subtitle:
                'Run your box office as it’s own website, embed it into your website with a simple piece of HTML or widget, or put it on your Facebook page*. All with a reliable, mobile-friendly design.',
        },
        {
            id: 3,
            fade_1: 'fade-right',
            fade_2: 'fade-left',
            img: 'assets/images/deski/assets/ils_06.svg',
            sm_title: 'management',
            title: 'Manage client easily by a simple click.',
            subtitle:
                'Set-up a simple, professional box-office page on your site (or standalone) in minutes. Then design & customise it as much (or as little) as you like with our user-friendly dashboard.',
        },
        {
            id: 4,
            fade_1: 'fade-left',
            fade_2: 'fade-right',
            order_1: 'order-lg-last',
            order_2: 'order-lg-first',
            img: 'assets/images/deski/assets/ils_07.svg',
            sm_title: 'Dashboard',
            title: 'All the data & info for your need.',
            subtitle:
                'You decide what data you want from your guests – and it’s your data. We don’t see or touch it. Understand how and who you’re selling to, with ticket sale notifications, and easy-to-understand sales summaries and customer order.',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
