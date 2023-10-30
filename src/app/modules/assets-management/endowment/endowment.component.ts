import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {  RouterOutlet } from '@angular/router';
// import { Country, Individual } from '../stakeholders.types';


@Component({
    selector: 'app-endowments',
    standalone: true,

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './endowment.component.html',
    // styleUrls: ['./endowment.component.scss'],

    imports: [
        RouterOutlet,
    ],
})
export class EndowmentsComponent {

    constructor()
    {

    }

    ngOnInit(): void {


    }


}
