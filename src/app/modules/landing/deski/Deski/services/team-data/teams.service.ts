import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TeamsService {
    constructor() {}

    teamData() {
        return [
            {
                id: 1,
                img: 'assets/images/deski/media/img_98.png',
                title: 'UI Designer',
                name: 'George Cortez',
            },
            {
                id: 2,
                img: 'assets/images/deski/media/img_99.png',
                title: 'Product Manager',
                name: 'Florence Roberts',
                delay: '100',
            },
            {
                id: 3,
                img: 'assets/images/deski/media/img_100.png',
                title: 'Marketing Crew',
                name: 'Marc McCormick',
                delay: '200',
            },
            {
                id: 4,
                img: 'assets/images/deski/media/img_101.png',
                title: 'Developer',
                name: 'George Cortez',
            },
            {
                id: 5,
                img: 'assets/images/deski/media/img_102.png',
                title: 'Product Manager',
                name: 'Florence Roberts',
                delay: '100',
            },
            {
                id: 6,
                img: 'assets/images/deski/media/img_103.png',
                title: 'Marketing Crew',
                name: 'Marc McCormick',
                delay: '200',
            },

            //  about team member

            {
                id: 7,
                img: 'assets/images/deski/media/img_29.png',
                name: 'Jhon Du',
                title: 'Senior Product Designer',
            },
            {
                id: 8,
                img: 'assets/images/deski/media/img_30.png',
                name: 'Juan Barber',
                title: 'Co-Founder',
                delay: '100',
            },
            {
                id: 9,
                img: 'assets/images/deski/media/img_31.png',
                name: 'Maud Ellis',
                title: 'Customer management',
                delay: '200',
            },
            {
                id: 10,
                img: 'assets/images/deski/media/img_32.png',
                name: 'Maud Ellis',
                title: 'Customer management',
                delay: '50',
            },
            {
                id: 11,
                img: 'assets/images/deski/media/img_33.png',
                name: 'Jhon Du',
                title: 'Senior Product Designer',
                delay: '100',
            },
            {
                id: 12,
                img: 'assets/images/deski/media/img_34.png',
                name: 'Juan Barber',
                title: 'Co-Founder',
                delay: '200',
            },

            // about event team member
            {
                id: 13,
                img: 'assets/images/deski/media/img_66.png',
                name: 'Jhon Du',
                title: 'Senior Product Designer',
            },
            {
                id: 14,
                img: 'assets/images/deski/media/img_67.png',
                name: 'Maria Gomez',
                title: 'Support Manager',
                delay: '100',
            },
            {
                id: 15,
                img: 'assets/images/deski/media/img_68.png',
                name: 'Rashed Kabir',
                title: 'Senior Designer',
                delay: '200',
            },
            {
                id: 16,
                img: 'assets/images/deski/media/img_69.png',
                name: 'Jubayer Hasan',
                title: 'Developer',
                delay: '50',
            },
            {
                id: 17,
                img: 'assets/images/deski/media/img_70.png',
                name: 'Sumit Jadhav',
                title: 'Support Manager',
                delay: '100',
            },
            {
                id: 18,
                img: 'assets/images/deski/media/img_71.png',
                name: 'Faisal Rahman',
                title: 'Senior Designer',
                delay: '200',
            },

            // about team management

            {
                id: 19,
                img: 'assets/images/deski/media/img_07.png',
                name: 'Maurice Craig',
                title: 'Co-Founder',
                category: 'leadership',
            },
            {
                id: 20,
                img: 'assets/images/deski/media/img_08.png',
                name: 'Duane Cain',
                title: 'Senior Product Desogner',
                category: 'designer',
            },
            {
                id: 21,
                img: 'assets/images/deski/media/img_09.png',
                name: 'Viola George',
                title: 'Co-Founder',
                category: 'developer',
            },
            {
                id: 22,
                img: 'assets/images/deski/media/img_10.png',
                name: 'Maurice Craig',
                title: 'Co-Founder',
                category: 'marketing',
            },
            {
                id: 23,
                img: 'assets/images/deski/media/img_11.png',
                name: 'Nina Walters',
                title: 'Senior Product Desogner',
                category: 'marketing',
            },
            {
                id: 24,
                img: 'assets/images/deski/media/img_12.png',
                name: 'Nathaniel Burke',
                title: 'Co-Founder',
                category: 'developer',
            },
            {
                id: 25,
                img: 'assets/images/deski/media/img_13.png',
                name: 'Maurice Craig',
                title: 'Co-Founder',
                category: 'designer',
            },
            {
                id: 26,
                img: 'assets/images/deski/media/img_14.png',
                name: 'Viola George',
                title: 'Co-Founder',
                category: 'leadership',
            },
            {
                id: 27,
                img: 'assets/images/deski/media/img_15.png',
                name: 'Viola George',
                title: 'Co-Founder',
                category: 'developer',
            },
            {
                id: 28,
                img: 'assets/images/deski/media/img_16.png',
                name: 'Viola George',
                title: 'Co-Founder',
                category: 'leadership',
            },
            {
                id: 29,
                img: 'assets/images/deski/media/img_17.png',
                name: 'Viola George',
                title: 'Co-Founder',
                category: 'designer',
            },
            {
                id: 30,
                img: 'assets/images/deski/media/img_18.png',
                name: 'Viola George',
                title: 'Co-Founder',
                category: 'leadership',
            },
        ];
    }
}
