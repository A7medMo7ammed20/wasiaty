import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Tag } from 'app/modules/stakeholders/stakeholders.types';
import {
    BehaviorSubject,
    map,
    Observable,
    of,
    switchMap,
    take,
    tap,
    throwError,
} from 'rxjs';
import { Endowment, VMEndowment } from './endowment.types';

import { CheckboxItem } from 'app/shared/types/checkboxes/checkboxes.types';
import { Steps, Step } from 'app/shared/types/step.types';


@Injectable({ providedIn: 'root' })
export class EndowmentsService {
    // Private
    private _endowment: BehaviorSubject<Endowment | null> = new BehaviorSubject(
        null
    );
    private _endowments: BehaviorSubject<Endowment[] | null> =
        new BehaviorSubject(null);
    private _countries: BehaviorSubject<Country[] | null> = new BehaviorSubject(
        null
    );
    private _tags: BehaviorSubject<Tag[] | null> = new BehaviorSubject(null);

    // VMEndowment
    private _vmendowment: BehaviorSubject<VMEndowment | null> =
        new BehaviorSubject(null);
    private _vmendowments: BehaviorSubject<VMEndowment[] | null> =
        new BehaviorSubject(null);

        // get Chekbox
        private _checkbox: BehaviorSubject<CheckboxItem | null> = new BehaviorSubject(
            null
        );
        private _checkboxes: BehaviorSubject<CheckboxItem [] | null> =
            new BehaviorSubject(null);
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for individual
     */
    get endowment$(): Observable<Endowment> {
        return this._endowment.asObservable();
    }

    /**
     * Getter for individuals
     */
    get individuals$(): Observable<Endowment[]> {
        return this._endowments.asObservable();
    }

    /**
     * Getter for countries
     */
    get countries$(): Observable<Country[]> {
        return this._countries.asObservable();
    }

    /**
     * Getter for tags
     */
    get tags$(): Observable<Tag[]> {
        return this._tags.asObservable();
    }

    // Getter for VMEndowment

    get vmendowment$(): Observable<VMEndowment> {
        return this._vmendowment.asObservable();
    }
    get vmendowments$(): Observable<VMEndowment[]> {
        return this._vmendowments.asObservable();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get individuals
     */
    getEndowments(): Observable<Endowment[]> {
        return this._httpClient.get<Endowment[]>('api/endowments/all').pipe(
            tap((endowments: any) => {
                this._endowments.next(endowments);
                console.log('endowment in seveice ', endowments);
            })
        );
    }

    /**
     * Search individuals with given query
     *
     * @param query
     */
    searchIndividuals(query: string): Observable<Endowment[]> {
        return this._httpClient
            .get<Endowment[]>('api/individuals/search', {
                params: { query },
            })
            .pipe(
                tap((endowment) => {
                    this._endowments.next(endowment);
                })
            );
    }

    /**
     * Get Endowment by id
     */
    getEndowmentlById(id: string): Observable<Endowment> {
        return this._endowments.pipe(
            take(1),
            map((endowments) => {
                //  ;
                // Find the individual
                const endowment =
                    endowments.find((item) => item.id === id) || null;

                // Update the individual
                this._endowment.next(endowment);

                // Return the individual
                return endowment;
            }),
            switchMap((endowment) => {
                if (!endowment) {
                    return throwError(
                        'Could not found individual with id of ' + id + '!'
                    );
                }

                return of(endowment);
            })
        );
    }

    /**
     * Delete the individual
     *
     * @param id
     */
    deleteEndowment(id: string): Observable<boolean> {
        return this.individuals$.pipe(
            take(1),
            switchMap((endowments) =>
                this._httpClient
                    .delete('api/endowments/endowment', {
                        params: { id },
                    })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted individual
                            const index = endowments.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the individual
                            endowments.splice(index, 1);

                            // Update the individuals
                            this._endowments.next(endowments);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }

    private _step: BehaviorSubject<Steps | null> = new BehaviorSubject(null);

    /**
     * Get step
     */
    getSteps(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step-endowment/all').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }

    /**
     * Get step
     */
    GetTypeInfo(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step-endowment/getType').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }
    /**
     * Get step
     */
    getInitSteps(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step-endowment/all').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }

    /**
     * Get step by id
     */
    getStepById(id: string): Observable<Step> {
        return this._step.pipe(
            take(1),
            map((step) => {
                // Find the step
                // const steps = step.find((item) => item.id === id) || null;

                // Update the step
                this._step.next(step);

                // Return the step
                return step;
            }),
            switchMap((step) => {
                if (!step) {
                    return throwError(
                        'Could not found step with id of ' + id + '!'
                    );
                }

                return of(step);
            })
        );
    }

    // Get Choose Place

    getChoosePlace(): Observable<Steps> {
        return this._httpClient
            .get<Steps>('api/stepTwo-endowment/getType')
            .pipe(
                tap((step) => {
                    this._step.next(step);
                })
            );
    }
    getreviewEndowment(): Observable<Steps> {
        return this._httpClient
            .get<Steps>('api/stepThree-endowment/getType')
            .pipe(
                tap((step) => {
                    this._step.next(step);
                })
            );
    }



    get checkbox$(): Observable<CheckboxItem> {
        return this._checkbox.asObservable();
    }

    /**
     * Getter for individuals
     */
    get checkboxes$(): Observable<CheckboxItem[]> {
        return this._checkboxes.asObservable();
    }


    // -----------------------------------------------------------------------------------------------------
// @ Public methods
// -----------------------------------------------------------------------------------------------------

/**
 * Get checkboxes
 */
getCheckboxes(): Observable<CheckboxItem[]> {
    return this._httpClient.get<CheckboxItem[]>('api/endowment/create-type/checkboxes/all').pipe(
        tap((checkboxes: any) => {
            this._checkboxes.next(checkboxes);
            console.log('checkboxes in seveice ', checkboxes);
        })
    );
}


}
