import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BlogsService {
    constructor() {}

    blogData() {
        return [
            {
                id: 1,
                img: 'assets/images/deski/blog/media_32.jpg',
                title: '7 reasons Deski is best deski...',
                author: 'Rashed kabir.',
                position: 'Designe Guru',
                date: '10 February, 2022',
            },
            {
                id: 2,
                img: 'assets/images/deski/blog/media_33.jpg',
                title: 'What’s the process of our selling ticket. ',
                author: 'Alison Ja.',
                position: 'CEO',
                delay: '100',
                date: '11 February, 2022',
            },
            {
                id: 3,
                img: 'assets/images/deski/blog/media_34.jpg',
                title: 'Managment & security process..',
                author: 'Hasan',
                position: 'Designe Guru',
                delay: '200',
                date: '12 February, 2022',
            },

            //  blog 2 style
            {
                id: 4,
                img: 'assets/images/deski/blog/media_01.png',
                tag: 'Technology',
                title: 'A Discount Cartridge Is Better Ever.',
                date: '13 March, 2022',
            },
            {
                id: 5,
                img: 'assets/images/deski/blog/media_02.png',
                tag: 'Software',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exea.',
                delay: '100',
                date: '14 March, 2022',
            },
            {
                id: 6,
                img: 'assets/images/deski/blog/media_03.png',
                tag: 'Blog',
                title: 'Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,',
                delay: '200',
                date: '15 March, 2022',
            },

            // blog-3
            {
                id: 7,
                img: 'assets/images/deski/blog/media_04.png',
                tag: 'Technology',
                title: 'A Discount Cartridge Is Better Ever.',
                date: '15 November, 2022',
            },
            {
                id: 8,
                img: 'assets/images/deski/blog/media_05.png',
                tag: 'Software',
                title: 'Quis Nostr Exercitation Ullamco Laboris..',
                delay: '100',
                ate: '16 November, 2022',
            },
            {
                id: 9,
                img: 'assets/images/deski/blog/media_06.png',
                tag: 'Blog',
                title: 'Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,',
                delay: '200',
                ate: '17 November, 2022',
            },

            // blog -v1 page
            {
                id: 10,
                img: 'assets/images/deski/blog/media_01.png',
                tag: 'Technology',
                title: 'A Discount Cartridge Is Better Ever.',
                date: '23 July, 2022',
            },
            {
                id: 11,
                img: 'assets/images/deski/blog/media_02.png',
                tag: 'Software',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exea.',
                delay: '50',
                date: '24 July, 2022',
            },
            {
                id: 12,
                img: 'assets/images/deski/blog/media_03.png',
                tag: 'Blog',
                title: 'Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,',
                delay: '100',
                date: '25 July, 2022',
            },
            {
                id: 13,
                img: 'assets/images/deski/blog/media_07.png',
                tag: 'Technology',
                title: 'A Discount Cartridge Is Better Ever.',
                delay: '50',
                date: '26 July, 2022',
            },
            {
                id: 14,
                img: 'assets/images/deski/blog/media_08.png',
                tag: 'Software',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exea.',
                delay: '100',
                date: '27 July, 2022',
            },
            {
                id: 15,
                img: 'assets/images/deski/blog/media_09.png',
                tag: 'Blog',
                title: 'Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,',
                delay: '150',
                date: '28 July, 2022',
            },
            {
                id: 16,
                img: 'assets/images/deski/blog/media_10.png',
                tag: 'Technology',
                title: 'A Discount Cartridge Is Better Ever.',
                delay: '50',
                date: '29 July, 2022',
            },
            {
                id: 17,
                img: 'assets/images/deski/blog/media_11.png',
                tag: 'Software',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exea.',
                delay: '100',
                date: '30 July, 2022',
            },
            {
                id: 18,
                img: 'assets/images/deski/blog/media_12.png',
                tag: 'Blog',
                title: 'Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,',
                delay: '150',
                date: '23 Jun, 2022',
            },
            {
                id: 19,
                img: 'assets/images/deski/blog/media_13.png',
                tag: 'Technology',
                title: 'A Discount Cartridge Is Better Ever.',
                delay: '50',
                date: '15 Jun, 2022',
            },
            {
                id: 20,
                img: 'assets/images/deski/blog/media_14.png',
                tag: 'Software',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exea.',
                delay: '100',
                date: '14 Jun, 2022',
            },
            {
                id: 21,
                img: 'assets/images/deski/blog/media_15.png',
                tag: 'Blog',
                title: 'Excepteur sint occaat cupidatat proidet nisi sunt in culpa ,',
                delay: '150',
                date: '11 Jun, 2022',
            },

            // blog -v2 page
            {
                id: 22,
                img: 'assets/images/deski/blog/media_16.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '11 May, 2022',
            },
            {
                id: 23,
                img: 'assets/images/deski/blog/media_17.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '12 May, 2022',
            },
            {
                id: 24,
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '13 May, 2022',
            },
            {
                id: 25,
                img: 'assets/images/deski/blog/media_18.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '15 May, 2022',
            },
            {
                id: 26,
                img: 'assets/images/deski/blog/media_19.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '17 May, 2022',
            },

            // blog -v3 page

            {
                id: 27,
                img: 'assets/images/deski/blog/media_20.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '17 June, 2022',
            },
            {
                id: 28,
                img: 'assets/images/deski/blog/media_21.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '18 June, 2022',
            },
            {
                id: 29,
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '19 June, 2022',
            },
            {
                id: 30,
                img: 'assets/images/deski/blog/media_22.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '20 June, 2022',
            },
            {
                id: 31,
                img: 'assets/images/deski/blog/media_23.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '22 June, 2022',
            },

            // blog -v4 page
            {
                id: 32,
                img: 'assets/images/deski/blog/media_24.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '12 April, 2022',
            },
            {
                id: 33,
                text_post: true,
                title: 'Replace The Negatives In your life with positives.',
                desc: 'One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation..',
                date: '13 April, 2022',
            },
            {
                id: 34,
                img: 'assets/images/deski/blog/media_25.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '14 April, 2022',
            },
            {
                id: 35,
                img: 'assets/images/deski/blog/media_26.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '16 April, 2022',
            },
            {
                id: 36,
                img: 'assets/images/deski/blog/media_27.png',
                title: 'Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal nothing.',
                desc: 'Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..',
                date: '18 April, 2022',
            },

            // form survey page
            {
                id: 37,
                img: 'assets/images/deski/blog/media_35.jpg',
                title: 'A Discount Cartridge dsu is Better Ever.',
                date: '5 January, 2022',
            },
            {
                id: 38,
                img: 'assets/images/deski/blog/media_36.jpg',
                title: 'Truck Side Advertising Isn It Time for action',
                delay: '100',
                date: '6 January, 2022',
            },
            {
                id: 39,
                img: 'assets/images/deski/blog/media_37.jpg',
                title: 'A discount cartridge dsu is better ever.',
                delay: '200',
                date: '7 January, 2022',
            },
            {
                id: 40,
                img: 'assets/images/deski/blog/media_35.jpg',
                title: 'Truck Side Advertising Isn It Time for action.',
                d_none: 'd-lg-none',
                date: '8 January, 2022',
            },
        ];
    }
}
