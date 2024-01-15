import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ServicesService {
    constructor() {}

    servicesData() {
        return [
            {
                id: 1,
                img: 'assets/images/deski/icon/20.svg',
                title: 'Smart popups',
                subtitle:
                    'Create customized popups and show the right message at the right time. lorem dummy.',
            },
            {
                id: 2,
                img: 'assets/images/deski/icon/21.svg',
                title: 'Embeded Forms',
                subtitle:
                    'Collect website leads with embedded forms and integrate easily.',
                delay: '100',
            },
            {
                id: 3,
                img: 'assets/images/deski/icon/22.svg',
                title: 'Autoresponder',
                subtitle:
                    'Send welcome email to your new subscribers  with a code.',
                delay: '200',
            },
            {
                id: 4,
                img: 'assets/images/deski/icon/174.svg',
                title: 'Online Marketing',
                subtitle:
                    'Create customized popups and show the right message at the right time. lorem dummy.',
            },
            {
                id: 5,
                img: 'assets/images/deski/icon/176.svg',
                title: 'Web Design',
                subtitle:
                    'Collect website leads with embedded forms and integrate easily.',
                delay: '100',
            },
            {
                id: 6,
                img: 'assets/images/deski/icon/175.svg',
                title: 'Mobile Notification',
                subtitle:
                    'Send welcome email to your new subscribers  with a code.',
                delay: '200',
            },

            // services v2
            {
                id: 7,
                bg_color: '#F7EDFF',
                img: 'assets/images/deski/icon/178.svg',
                title: 'UI/UX Design',
                subtitle:
                    'Wooked up one of the more cuatin words popenaissan printer took a galley of type and scram Cicero are also reproduced.',
            },
            {
                id: 8,
                bg_color: '#D8FFF1',
                img: 'assets/images/deski/icon/179.svg',
                title: 'Online Marketing',
                subtitle:
                    'Build an online store that rank higher & sell more and integrates easily ooCommerce, to enhance the quality',
                delay: '100',
            },
            {
                id: 9,
                bg_color: '#E6FBFF',
                img: 'assets/images/deski/icon/180.svg',
                title: 'WordPress dev.',
                subtitle:
                    'It saves the client cards on file securely for an effortless checkout experience using our advanced, secure payments system.',
            },
            {
                id: 10,
                bg_color: '#FFEDFE',
                img: 'assets/images/deski/icon/181.svg',
                title: 'App Development',
                subtitle:
                    'Our Scheduling Platform is Simple yet Powerful that you need to grow and manage your business in single user interface.',
                delay: '100',
            },

            // services v-3
            {
                id: 11,
                bg_color: '#F7EDFF',
                img: 'assets/images/deski/icon/181.svg',
                title: 'Mobile App',
                subtitle:
                    'Duis aute irure dolor reprehen derit in voluptat velit.',
                delay: '100',
            },
            {
                id: 12,
                bg_color: '#FFF8E0',
                img: 'assets/images/deski/icon/183.svg',
                title: 'Figma Design',
                subtitle:
                    'Duis aute irure dolor reprehen derit in voluptat velit.',
                delay: '200',
            },
            {
                id: 13,
                bg_color: '#FFEBDB',
                img: 'assets/images/deski/icon/132.svg',
                title: 'Wp Development',
                subtitle:
                    'Duis aute irure dolor reprehen derit in voluptat velit.',
            },
            {
                id: 14,
                bg_color: '#E0F8F8',
                img: 'assets/images/deski/icon/133.svg',
                title: 'Easy Customizable',
                subtitle:
                    'Duis aute irure dolor reprehen derit in voluptat velit.',
                delay: '100',
            },
            {
                id: 15,
                bg_color: '#ECF1FF',
                img: 'assets/images/deski/icon/184.svg',
                title: 'Marketing',
                subtitle:
                    'Duis aute irure dolor reprehen derit in voluptat velit.',
                delay: '200',
            },

            // services v-4
            {
                id: 16,
                img: 'assets/images/deski/gallery/img_36.jpg',
                title: 'Friendly dashboard & <br> Cool Interface.',
                subtitle:
                    'Duis aute irure dolor reprehen derit in voluptat velit.',
            },
            {
                id: 17,
                img: 'assets/images/deski/gallery/img_37.jpg',
                title: 'Interface Design <br> with UX.',
                subtitle:
                    'Collect website leads with embedded forms and integrate easily.',
            },
            {
                id: 18,
                img: 'assets/images/deski/gallery/img_38.jpg',
                title: 'Social Media & Online <br> Marketing.',
                subtitle:
                    'Send welcome email to your new subscribers  with a code.',
            },
            {
                id: 19,
                img: 'assets/images/deski/gallery/img_39.jpg',
                title: 'Mobile Application <br> Design & Dev.',
                subtitle:
                    'Create customized popups and show the right message at the right time. lorem dummy.',
            },
            {
                id: 20,
                img: 'assets/images/deski/gallery/img_40.jpg',
                title: 'Keyword Research & <br> Article writing.',
                subtitle:
                    'Wooked up one of the more cuatin words popenaissan printer took a galley of type and scram Cicero are also reproduced.',
            },
            {
                id: 21,
                img: 'assets/images/deski/gallery/img_41.jpg',
                title: 'HTML & WordPress <br> Development.',
                subtitle:
                    'It saves the client cards on file securely for an effortless checkout experience using our advanced, secure payments system.',
            },
        ];
    }
}
