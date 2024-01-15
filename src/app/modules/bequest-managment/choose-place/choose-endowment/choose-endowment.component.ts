import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-describe-type',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './choose-endowment.component.html',

    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('1s', style({ opacity: 1 })),
            ]),
            transition(':leave', [animate('1s', style({ opacity: 0 }))]),
        ]),
    ],
})
export class ChooseEndowmentComponent {
    insuranceTypes = [
        {
            title: 'House',
            description:
                ' Support educational initiatives and scholarships to empower future generations',
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M23.045,8.035l-2.045-1.607V2h-1v3.641L13.545,.567c-.91-.715-2.182-.715-3.09,0L.955,8.035c-.607,.477-.955,1.193-.955,1.965v14H8V14.5c0-.827,.673-1.5,1.5-1.5h5c.827,0,1.5,.673,1.5,1.5v9.5h8V10c0-.772-.348-1.489-.955-1.965Zm-.045,14.965h-6V14.5c0-1.378-1.121-2.5-2.5-2.5h-5c-1.379,0-2.5,1.122-2.5,2.5v8.5H1V10c0-.463,.209-.893,.572-1.179L11.072,1.353c.547-.429,1.309-.429,1.855,0l9.5,7.468c.363,.286,.572,.716,.572,1.179v13Z"/></svg>`,
        },
        {
            title: 'Hotel',
            description:
                'Provide resources for medical research, healthcare facilities, and community health programs.',
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M18.5,0H5.5c-1.378,0-2.5,1.122-2.5,2.5V24h7v-7h4v7h7V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23h-5v-6h2v-1H7v1h2v6H4V2.5c0-.827,.673-1.5,1.5-1.5h13c.827,0,1.5,.673,1.5,1.5V23ZM7,12h2v1h-2v-1Zm8,0h2v1h-2v-1ZM7,4h2v1h-2v-1Zm8,0h2v1h-2v-1ZM7,8h2v1h-2v-1Zm8,0h2v1h-2v-1Zm-4,4h2v1h-2v-1Zm0-8h2v1h-2v-1Zm0,4h2v1h-2v-1Z"/></svg>`,
        },
        {
            title: 'hospital',
            description:
                'Provide resources for medical research, healthcare facilities, and community health programs.',
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="m21.5,6h-1.5v-3.5c0-1.378-1.121-2.5-2.5-2.5H6.5c-1.379,0-2.5,1.122-2.5,2.5v3.5h-1.5c-1.379,0-2.5,1.122-2.5,2.5v15.5h24v-15.5c0-1.378-1.121-2.5-2.5-2.5ZM1,23v-14.5c0-.827.673-1.5,1.5-1.5h1.5v16H1Zm18,0H5V2.5c0-.827.673-1.5,1.5-1.5h11c.827,0,1.5.673,1.5,1.5v20.5Zm4,0h-3V7h1.5c.827,0,1.5.673,1.5,1.5v14.5Zm-15-9h3v1h-3v-1Zm5,0h3v1h-3v-1Zm-5,4h3v1h-3v-1Zm5,0h3v1h-3v-1Zm-.5-10.5v2.5h-1v-2.5h-2.5v-1h2.5v-2.5h1v2.5h2.5v1h-2.5Z"/></svg>`,
        },
        {
            title: 'Factory ',
            description:
                'Support organizations and initiatives that promote the well-being of animals.',
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m23.204,6.196c-.499-.277-1.087-.261-1.605.066l-5.599,4.233v-2.948c0-.57-.298-1.075-.796-1.352-.499-.276-1.086-.262-1.594.057l-5.61,3.988V1h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H.5C.224,0,0,.224,0,.5s.224.5.5.5h.5v18.5c0,2.481,2.019,4.5,4.5,4.5h14c2.481,0,4.5-2.019,4.5-4.5V7.547c0-.57-.298-1.075-.796-1.352Zm-.204,13.304c0,1.93-1.57,3.5-3.5,3.5H5.5c-1.93,0-3.5-1.57-3.5-3.5V1h5v18.5c0,.276.224.5.5.5s.5-.224.5-.5v-8.031l6.165-4.384c.246-.154.469-.062.554-.014.085.047.281.187.281.477v3.953c0,.19.107.363.277.448.168.084.372.065.524-.049l6.363-4.814c.246-.154.469-.062.554-.014.085.047.281.187.281.477v11.953Zm-9.5-3.5h-1c-.827,0-1.5.673-1.5,1.5v1c0,.827.673,1.5,1.5,1.5h1c.827,0,1.5-.673,1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5Zm.5,2.5c0,.276-.225.5-.5.5h-1c-.275,0-.5-.224-.5-.5v-1c0-.276.225-.5.5-.5h1c.275,0,.5.224.5.5v1Zm5.5-2.5h-1c-.827,0-1.5.673-1.5,1.5v1c0,.827.673,1.5,1.5,1.5h1c.827,0,1.5-.673,1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5Zm.5,2.5c0,.276-.225.5-.5.5h-1c-.275,0-.5-.224-.5-.5v-1c0-.276.225-.5.5-.5h1c.275,0,.5.224.5.5v1Z"/>
</svg>`,
        },
        {
            title: 'Resturant',
            description:
                'Enhance the quality of life for seniors through specialized care and support services.',
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m11,0h1v9.5c0,1.379-1.121,2.5-2.5,2.5h-1.5v12h-1v-12h-1.5c-1.379,0-2.5-1.121-2.5-2.5V0h1v9.5c0,.827.673,1.5,1.5,1.5h1.5V0h1v11h1.5c.827,0,1.5-.673,1.5-1.5V0Zm10,8.767c0,4.717-4.145,9.307-5,10.203v5.03h-1V1.501c0-.658.402-1.217,1.026-1.424.623-.207,1.286.002,1.682.534,1.502,2.014,3.292,5.064,3.292,8.155Zm-5,8.695c1.393-1.652,4-5.211,4-8.695,0-2.816-1.683-5.665-3.095-7.559-.124-.168-.277-.208-.396-.208-.076,0-.138.017-.17.027-.079.026-.34.139-.34.474v15.961Z"/>
          </svg>`,
        },
        {
            title: 'Shops',
            description:
                'Provide relief and assistance to those in need during emergencies and crises.',
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M16,4.5c0-.28,.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-6c-.28,0-.5-.22-.5-.5Zm7.56,1.9c-.26-.05-.53,.12-.59,.39l-.88,4.39c-.33,1.63-1.77,2.81-3.43,2.81H5.88l-1.25-9H13.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H4.49l-.26-1.84C4.06,.93,3,0,1.76,0H.5C.22,0,0,.22,0,.5s.22,.5,.5,.5H1.76c.75,0,1.38,.56,1.49,1.29l1.78,12.83c.31,2.21,2.22,3.88,4.46,3.88h10.02c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H9.48c-1.73,0-3.22-1.29-3.46-3h12.64c2.14,0,3.99-1.52,4.41-3.62l.88-4.39c.05-.27-.12-.53-.39-.59Zm-14.56,15.6c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm-1,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm11,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm-1,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Z"/></svg>`,
        },




    ];

    constructor(private sanitizer: DomSanitizer) {}

    getSanitizedIcon(icon: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
}

