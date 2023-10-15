import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';

import { Evaluation } from 'app/modules/wealth-evaluation/evaluation.types';

@Component({
    selector: 'Evaluation-contact-info',
    templateUrl: './contact-info.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        NgIf,
        NgFor,
        FormsModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgIf,
        MatIconModule,
        RouterLink,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        NgFor,
        MatRippleModule,
        MatCheckboxModule,
        NgClass,
        MatRadioModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        DatePipe,
        MatCardModule,
    ],
})
export class ContactInfoComponent {
    @Input() Evaluation: Evaluation;
    @Input() drawer: MatDrawer;

    /**
     * Constructor
     */
    constructor() {}
}
