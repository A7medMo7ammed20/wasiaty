import {
    ChangeDetectionStrategy,
  Component ,
    ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';


// import { InsurancesDetailComponent } from './insurances-detail/insurances-detail.component';



@Component({
    selector: 'app-insurances',
    standalone: true,

    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './insurances.component.html',

    imports: [
   RouterOutlet
    ],
})
export class InsurancesComponent {



    constructor()
    {

    }
    ngOnInit(): void {

    }

    }
