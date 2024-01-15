import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'describe-price',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './describe-price.component.html',
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
export class DescribePriceComponent {
    Premium: number = 5000;
    insuranceTypes = [
        {
            title: 'Life Insurance',
            description:
                'Provides financial protection to your loved ones in the event of your death.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,19c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v14ZM5,10c0-.55,.45-1,1-1H15c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm0-4c0-.55,.45-1,1-1h6c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm14,8c0,.55-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1h12c.55,0,1,.45,1,1Zm-9,4c0,.55-.45,1-1,1h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z"/></svg>`,
        },
        {
            title: 'Health Insurance',
            description:
                'Covers medical expenses, including hospital stays, doctor visits, and prescription medications.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="m14,11v-6c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6c.553,0,1,.448,1,1s-.447,1-1,1h-6C2.243,24,0,21.757,0,19V5C0,2.243,2.243,0,5,0h6C13.757,0,16,2.243,16,5v6c0,.552-.447,1-1,1s-1-.448-1-1Zm-8,2h-1c-.553,0-1,.448-1,1s.447,1,1,1h1c.553,0,1-.448,1-1s-.447-1-1-1Zm5,0h-1c-.553,0-1,.448-1,1s.447,1,1,1h1c.553,0,1-.448,1-1s-.447-1-1-1Zm-5,4h-1c-.553,0-1,.448-1,1s.447,1,1,1h1c.553,0,1-.448,1-1s-.447-1-1-1Zm5,0h-1c-.553,0-1,.448-1,1s.447,1,1,1h1c.553,0,1-.448,1-1s-.447-1-1-1Zm-3-7c.553,0,1-.448,1-1v-1h1c.553,0,1-.448,1-1s-.447-1-1-1h-1v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1c-.553,0-1,.448-1,1s.447,1,1,1h1v1c0,.552.447,1,1,1Zm11,8c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm4.969,4.751c-.561-2.173-2.649-3.75-4.969-3.75s-4.41,1.578-4.969,3.751c-.138.535.185,1.08.72,1.218.084.021.167.032.25.032.445,0,.852-.3.968-.751.329-1.282,1.633-2.249,3.031-2.249s2.701.967,3.031,2.25c.138.535.69.856,1.218.719.535-.138.857-.683.72-1.218Z"/></svg>`,
        },
        {
            title: 'Auto Insurance',
            description:
                'Protects against financial loss in case of accidents, theft, or other incidents involving your vehicle.',
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M20.74,10.312l-4.3-6.171A5,5,0,0,0,12.336,2H8.5A5.024,5.024,0,0,0,3.825,5.228L1.753,10.692A4,4,0,0,0,0,14v1.5a2.505,2.505,0,0,0,2,2.45v.55a3.5,3.5,0,0,0,7,0V18h6v.5a3.5,3.5,0,0,0,7,0v-.55a2.505,2.505,0,0,0,2-2.45V15A5.011,5.011,0,0,0,20.74,10.312ZM14.8,5.284,18.084,10H11V4h1.336A3,3,0,0,1,14.8,5.284Zm-9.1.653A3.014,3.014,0,0,1,8.5,4H9v6H4.154ZM7,18.5a1.5,1.5,0,0,1-3,0V18H7ZM18.5,20A1.5,1.5,0,0,1,17,18.5V18h3v.5A1.5,1.5,0,0,1,18.5,20ZM22,15.5a.5.5,0,0,1-.5.5H2.5a.5.5,0,0,1-.5-.5V14a2,2,0,0,1,2-2H19a3,3,0,0,1,3,3Z"/></svg>`,
        },
        {
            title: 'Homeowners/Renters Insurance',
            description:
                'Offers coverage for damage to your home or personal belongings due to events like fire, theft, or natural disasters.',
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M22.849,7.681l-.849-.664V2h-2v3.451L13.849,.637c-1.089-.85-2.608-.851-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H9V12h6v12h9V10.043c0-.929-.42-1.79-1.151-2.362ZM7,22H2v-2H7v2Zm0-4H2v-2H7v2Zm0-4H2v-2H7v2ZM2.001,10c.012-.293,.15-.563,.383-.745L11.384,2.213c.362-.285,.87-.284,1.232,0l9,7.044c.233,.182,.37,.451,.383,.744H2.001Zm19.999,12h-5v-2h5v2Zm0-4h-5v-2h5v2Zm0-4h-5v-2h5v2ZM13.5,6.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>`,
        },
        {
            title: 'Travel Insurance',
            description:
                'Provides coverage for unexpected events while traveling, such as trip cancellations, lost luggage, and medical emergencies.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M23.96,11.5A3.084,3.084,0,0,0,20.893,9h-3.3L13.446,1.563A3,3,0,0,0,10.812,0H7.069l3.038,9H6.985l-1.1-1.657A2.994,2.994,0,0,0,3.388,6H.027L2.24,12l-2.2,6H3.4a2.991,2.991,0,0,0,2.5-1.347L6.988,15h3.119L7.069,24h3.743a3,3,0,0,0,2.63-1.556L17.588,15H21a3,3,0,0,0,2.96-3.5Zm-2.2,1.144A1,1,0,0,1,21,13H16.412L11.69,21.479a1,1,0,0,1-.878.521H9.854l3.039-9H5.908L4.233,15.552A1,1,0,0,1,3.4,16H2.906l1.465-4L2.9,8h.492a1,1,0,0,1,.833.448L5.911,11h6.982L9.854,2h.958a1,1,0,0,1,.882.529L16.412,11h4.481a1.083,1.083,0,0,1,1.092.825A1,1,0,0,1,21.763,12.647Z"/></svg>`,
        },

        {
            title: 'Long-Term Care Insurance',
            description:
                'Helps cover the costs of long-term care services, such as nursing homes, assisted living, and in-home care.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="m12,15c3.309,0,6-2.691,6-6V3c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v6c0,3.309,2.691,6,6,6Zm0-2c-2.206,0-4-1.794-4-4v-1h8v1c0,2.206-1.794,4-4,4Zm4-10v3h-3v-1h1c.553,0,1-.447,1-1s-.447-1-1-1h-1v-1h2c.552,0,1,.448,1,1Zm-8,0c0-.552.448-1,1-1h2v1h-1c-.553,0-1,.447-1,1s.447,1,1,1h1v1h-3v-3Zm13,20c0,.553-.447,1-1,1s-1-.447-1-1c0-1.823-.769-3.817-1.869-4.849-.144-.134-.315-.159-.4-.144-.165.007-.322.082-.432.205l-3.518,4.411c-.189.237-.477.376-.781.376h0c-.305,0-.593-.14-.782-.378l-3.543-4.457c-.074-.082-.231-.156-.396-.164-.095-.01-.258.009-.401.143-1.105,1.032-1.877,3.029-1.877,4.856,0,.553-.447,1-1,1s-1-.447-1-1c0-2.413.986-4.893,2.32-6.317.503-.471,1.151-.718,1.86-.68.7.033,1.368.353,1.833.877l2.796,3.515,2.77-3.471c.501-.564,1.17-.883,1.87-.914.688-.037,1.354.211,1.858.683,1.519,1.424,2.501,3.9,2.501,6.308Z"/></svg>`,
        },
        {
            title: 'Business Insurance',
            description:
                'Protects a business against various risks, including liability, property damage, and loss of income.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M14,13h2v2h-2v-2Zm4,2h2v-2h-2v2Zm-4,4h2v-2h-2v2Zm4,0h2v-2h-2v2ZM14,7h2v-2h-2v2Zm4,0h2v-2h-2v2Zm-4,4h2v-2h-2v2Zm4,0h2v-2h-2v2ZM24,3V24H0V8.829c0-.801,.312-1.555,.879-2.122l2.707-2.707c1.289-1.29,3.539-1.29,4.828,0l1.586,1.586V3c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3Zm-14,5.829c0-.267-.104-.519-.293-.708l-2.707-2.707c-.526-.526-1.474-.526-2,0l-2.707,2.707c-.189,.189-.293,.44-.293,.708v13.171H10V8.829ZM22,3c0-.551-.449-1-1-1H13c-.551,0-1,.449-1,1V22h10V3ZM5,15h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0,8h2v-2h-2v2Z"/></svg>`,
        },
        {
            title: 'Critical Illness Insurance',
            description:
                'Provides a lump sum payment upon diagnosis of a critical illness, helping cover medical expenses and other costs.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="32" viewBox="0 0 24 24" width="32" data-name="Layer 1"><path d="m24 19v-15a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v15h11v2h-5v2h12v-2h-5v-2zm-22-15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13h-20zm12.965 5h5.035v2h-3.965l-2.659 3.988-3-6-1.341 2.012h-5.035v-2h3.965l2.659-3.988 3 6z"/></svg>`,
        },
        {
            title: 'Income Protection Insurance',
            description:
                "Replaces a portion of your income if you're unable to work due to illness or injury.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-6-5c0,1.654-1.346,3-3,3v1c0,.553-.447,1-1,1s-1-.447-1-1v-1h-.268c-1.067,0-2.063-.574-2.598-1.499-.277-.479-.113-1.09,.364-1.366,.479-.279,1.09-.113,1.366,.364,.179,.31,.511,.501,.867,.501h2.268c.552,0,1-.448,1-1,0-.378-.271-.698-.644-.76l-3.041-.507c-1.342-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-1c0-.552,.447-1,1-1s1,.448,1,1v1h.268c1.067,0,2.063,.575,2.598,1.5,.277,.478,.113,1.089-.364,1.366-.48,.277-1.091,.113-1.366-.365-.179-.309-.511-.5-.867-.5h-2.268c-.552,0-1,.449-1,1,0,.378,.271,.698,.644,.76l3.041,.507c1.342,.223,2.315,1.373,2.315,2.733Z"/></svg>`,
        },

        {
            title: 'Earthquake Insurance',
            description:
                'Provides coverage for damage to your property caused by earthquakes.',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="m7.688,7.827l-.529,1.27c-.173.414-.648.61-1.062.437l-.212-.088c-.463-.193-.642-.756-.376-1.181l.741-1.182c.211-.336.634-.471,1-.318.414.172.61.648.437,1.062Zm16.312,4.173c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-12,10v-1.804c0-.409-.278-.765-.675-.865l-.812-.203c-.336-.084-.642-.258-.887-.502l-1.067-1.067c-.358-.358-.559-.844-.559-1.35v-.291c0-.58.264-1.129.717-1.491l1.26-1.008c.339-.271.759-.418,1.193-.418h1.252c.377,0,.746.112,1.059.321l2.243,1.495c.18.12.392.184.608.184h.714c.291,0,.569.115.775.321l.909.909c.175.175.404.285.649.314l1.44.166c.228-.426.427-.87.592-1.329l-2.981-1.315v-.011c-.268-.071-.469-.304-.469-.593,0-.234.134-.43.324-.537v-.009s.782-.377.782-.377c0,0,.433-.183.433-.538,0-.413-.5-.5-.5-.5l-2.423-.808c-.345-.115-.577-.438-.577-.801,0-.492.399-.891.891-.891h1.263c.467,0,.846-.379.846-.846v-.308c0-.467-.379-.846-.846-.846h-.631c-.32,0-.613.181-.757.468l-.583,1.166c-.117.234-.323.413-.571.495l-.517.172s-.392.093-.479.295c-.086.202.082.495.082.495l.119.358-.004.002c.018.062.038.122.038.19,0,.386-.313.698-.698.698-.233,0-.526-.164-.653-.339l-.558-.558s-.135-.211-.404-.211-.428.289-.428.289l-.824,1.099s-.171.382-.773.382c-.487,0-1.268-.813-1.268-.813-.286-.428-.336-.972-.133-1.445l.935-2.181c.154-.36.441-.646.8-.8l2.701-1.106s.471-.135.471-.606-.548-.442-.548-.442l-2.471.394s-.433.115-.596-.24c-.164-.356.096-.76.096-.76l.994-1.987C6.214,2.277,2,6.656,2,12c0,5.514,4.486,10,10,10Z"/></svg>`,
        },
    ];

    // Constructor() {}
    constructor(private sanitizer: DomSanitizer) {}

    // public method
    getSanitizedIcon(icon: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(icon);
    }

    IncremntPremium() {
        this.Premium++;
    }
}
