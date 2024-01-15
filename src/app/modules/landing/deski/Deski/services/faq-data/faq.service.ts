import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FaqService {
    constructor() {}

    faqData() {
        return [
            {
                id: 1,
                img: 'assets/images/deski/media/img_43.png',
                title: 'How to set up two-factor authentication (2FA)',
                info: 'Written by <span>Jonny White</span> <br>12 jun, 2022',
            },
            {
                id: 2,
                img: 'assets/images/deski/media/img_44.png',
                title: 'Can I sell raffle tickets using Deski?',
                info: 'Written by <span>Jonny White</span> <br>12 apr, 2021',
            },
            {
                id: 3,
                img: 'assets/images/deski/media/img_45.png',
                title: 'How do I send tickets as a PDF?',
                info: 'Written by <span>Jonny White</span> <br>15 apr, 2021',
            },
            {
                id: 4,
                img: 'assets/images/deski/media/img_46.png',
                title: 'How do I send invoices to my ticket buyers?',
                info: 'Written by <span>Jonny White</span> <br>16 apr, 2021',
            },
            {
                id: 5,
                img: 'assets/images/deski/media/img_47.png',
                title: 'How do I edit the ticket types?',
                info: 'Written by <span>Jonny White</span> <br>18 apr, 2021',
            },
            {
                id: 6,
                img: 'assets/images/deski/media/img_48.png',
                title: 'How do I edit the currency for my event?',
                info: 'Written by <span>Jonny White</span> <br>19 apr, 2021',
            },
            {
                id: 7,
                img: 'assets/images/deski/media/img_49.png',
                title: 'How can I schedule my event to go live at a future date?',
                info: 'Written by <span>Jonny White</span> <br>20 apr, 2021',
            },
            {
                id: 8,
                img: 'assets/images/deski/media/img_50.png',
                title: 'Can I include a seating plan?',
                info: 'Written by <span>Jonny White</span> <br>21 apr, 2021',
            },
            {
                id: 9,
                img: 'assets/images/deski/media/img_51.png',
                title: 'Can I use other ticket selling agencies at the same time?',
                info: 'Written by <span>Jonny White</span> <br>20 apr, 2021',
            },
        ];
    }
}
