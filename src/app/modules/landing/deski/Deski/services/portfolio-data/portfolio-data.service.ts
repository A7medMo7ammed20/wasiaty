import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PortfolioDataService {
    constructor() {}

    portfolioData() {
        return [
            //  v1
            {
                id: 1,
                img: 'assets/images/deski/gallery/img_01.jpg',
                title: 'The Gang Blue',
                tag: 'Development, Design',
                category: 'dev',
            },
            {
                id: 2,
                img: 'assets/images/deski/gallery/img_02.jpg',
                title: 'Core WordPress',
                tag: 'Development, Plugin',
                video: true,
                category: 'plugin',
            },
            {
                id: 3,
                img: 'assets/images/deski/gallery/img_03.jpg',
                title: 'Platform Audit',
                tag: 'Development, Branding',
                category: 'design',
            },
            {
                id: 4,
                img: 'assets/images/deski/gallery/img_04.jpg',
                title: 'Medieval origins',
                tag: 'Development, Design',
                video: true,
                category: 'branding',
            },
            {
                id: 5,
                img: 'assets/images/deski/gallery/img_05.jpg',
                title: 'Designer’s Checklist',
                tag: 'Development, Plugin',
                large_size: true,
                category: 'dev',
            },
            {
                id: 6,
                img: 'assets/images/deski/gallery/img_06.jpg',
                title: 'Motivation defining Moment',
                tag: 'Development, Design',
                category: 'plugin',
            },
            {
                id: 7,
                img: 'assets/images/deski/gallery/img_07.jpg',
                title: 'Our experience WordCamp',
                tag: 'Development, Branding',
                video: true,
                category: 'design',
            },
            {
                id: 8,
                img: 'assets/images/deski/gallery/img_08.jpg',
                title: 'Lets catch up amd',
                tag: 'Development, Design',
                category: 'plugin',
            },
            //  v-2
            {
                id: 9,
                img: 'assets/images/deski/gallery/img_09.jpg',
                title: 'The Gang Blue',
                tag: 'Development, Design',
                category: 'dev-2',
            },
            {
                id: 10,
                img: 'assets/images/deski/gallery/img_10.jpg',
                title: 'Core WordPress',
                tag: 'Development, Plugin',
                video: true,
                category: 'plugin-2',
            },
            {
                id: 11,
                img: 'assets/images/deski/gallery/img_11.jpg',
                title: 'Platform Audit',
                tag: 'Development, Branding',
                category: 'design-2',
            },
            {
                id: 12,
                img: 'assets/images/deski/gallery/img_12.jpg',
                title: 'Medieval origins',
                tag: 'Development, Design',
                video: true,
                category: 'branding-2',
            },
            {
                id: 13,
                img: 'assets/images/deski/gallery/img_13.jpg',
                title: 'Designer’s Checklist',
                tag: 'Development, Plugin',
                category: 'dev-2',
            },
            {
                id: 14,
                img: 'assets/images/deski/gallery/img_14.jpg',
                title: 'Motivation defining Moment',
                tag: 'Development, Design',
                category: 'design-2',
            },
            // v-3

            {
                id: 15,
                img: 'assets/images/deski/gallery/img_15.jpg',
                title: 'The Gang Blue',
                tag: 'Development, Design',
                category: 'dev-3',
            },
            {
                id: 16,
                img: 'assets/images/deski/gallery/img_16.jpg',
                title: 'Core WordPress',
                tag: 'Development, Plugin',
                video: true,
                category: 'plugin-3',
            },
            {
                id: 17,
                img: 'assets/images/deski/gallery/img_17.jpg',
                title: 'Platform Audit',
                tag: 'Development, Branding',
                category: 'design-3',
            },
            {
                id: 18,
                img: 'assets/images/deski/gallery/img_18.jpg',
                title: 'Medieval origins',
                tag: 'Development, Design',
                video: true,
                category: 'branding-3',
            },
            {
                id: 19,
                img: 'assets/images/deski/gallery/img_19.jpg',
                title: 'Designer’s Checklist',
                tag: 'Development, Plugin',
                category: 'dev-3',
            },
            {
                id: 20,
                img: 'assets/images/deski/gallery/img_20.jpg',
                title: 'Motivation defining Moment',
                tag: 'Development, Design',
                category: 'plugin-3',
            },
            {
                id: 21,
                img: 'assets/images/deski/gallery/img_21.jpg',
                title: 'Our experience WordCamp',
                tag: 'Development, Branding',
                video: true,
                category: 'design-3',
            },
            {
                id: 22,
                img: 'assets/images/deski/gallery/img_22.jpg',
                title: 'Lets catch up amd',
                tag: 'Development, Design',
                category: 'plugin-3',
            },
            {
                id: 23,
                img: 'assets/images/deski/gallery/img_23.jpg',
                title: 'Experience WordCamp',
                tag: 'Development, Branding',
                category: 'dev-3',
            },

            // portfolio slider
            {
                id: 24,
                img: 'assets/images/deski/gallery/img_24.jpg',
                title: 'User Interface',
                subtitle: 'Deski - Art & Illustrationp',
            },
            {
                id: 25,
                img: 'assets/images/deski/gallery/img_25.jpg',
                title: 'Web developemnt',
                subtitle: 'Deski - Art & Illustrationp',
            },
            {
                id: 26,
                img: 'assets/images/deski/gallery/img_26.jpg',
                title: 'Social Marketing',
                subtitle: 'Deski - Art & Illustrationp',
            },
            {
                id: 27,
                img: 'assets/images/deski/gallery/img_25.jpg',
                title: 'lead generation',
                subtitle: 'Deski - Art & Illustrationp',
            },

            // portfolio v5
            {
                id: 28,
                img: 'assets/images/deski/gallery/img_28.jpg',
                title: 'The Gang Blue',
                tag: 'Development, Design',
                category: 'creative-4',
            },
            {
                id: 29,
                img: 'assets/images/deski/gallery/img_29.jpg',
                title: 'Core WordPress',
                tag: 'Development, Plugin',
                video: true,
                category: 'plugin-4',
            },
            {
                id: 30,
                img: 'assets/images/deski/gallery/img_30.jpg',
                title: 'Platform Audit',
                tag: 'Development, Branding',
                category: 'design-4',
            },
            {
                id: 31,
                img: 'assets/images/deski/gallery/img_31.jpg',
                title: 'Medieval origins',
                tag: 'Development, Design',
                video: true,
                category: 'branding-4',
            },
            {
                id: 32,
                img: 'assets/images/deski/gallery/img_32.jpg',
                title: 'Designer’s Checklist',
                tag: 'Development, Plugin',
                large_size: true,
                category: 'dev-4',
            },
        ];
    }
}
