import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
    BehaviorSubject,
    filter,
    map,
    Observable,
    of,
    switchMap,
    take,
    tap,
    throwError,
} from 'rxjs';
// import { Steps, Step } from './insurance.types';

import { Steps, Step } from 'app/shared/types/step.types';
import { InsuranceData } from './insurance.types';
import { CheckboxItem } from 'app/shared/types/checkboxes/checkboxes.types';

@Injectable({ providedIn: 'root' })
export class InsurancesService {
    // Private
    private _step: BehaviorSubject<Steps | null> = new BehaviorSubject(null);

    private _insurances: BehaviorSubject<InsuranceData[] | null> =
        new BehaviorSubject(null);
    private _insurance: BehaviorSubject<InsuranceData | null> =
        new BehaviorSubject(null);
    // private _step: BehaviorSubject<Steps[] | null> = new BehaviorSubject(null);
    private _checkboxesinsurances: BehaviorSubject<CheckboxItem [] | null> =
    new BehaviorSubject(null);
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Getter for insurance
     */
    get insurance$(): Observable<InsuranceData> {
        return this._insurance.asObservable();
    }
    get insurances$(): Observable<InsuranceData[]> {
        return this._insurances.asObservable();
    }
    /**
     * Getter for step
     */
    get step$(): Observable<Steps> {
        return this._step.asObservable();
    }

    get checkboxesinsurances$(): Observable<CheckboxItem[]> {
        return this._checkboxesinsurances.asObservable();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get step
     */

    /**
     * Get data
     */
    getInsurancesData(): Observable<InsuranceData[]> {
        return this._httpClient.get('api/insurances/all').pipe(
            tap((response: any) => {
                //  ;
                this._insurances.next(response);
            })
        );
    }

    /*
      //////////////  * insurances///////////
    */

    getInsuranceById(id: string): Observable<InsuranceData> {
        return this._insurances.pipe(
            take(1),
            map((members) => {
                // Find the bequest

                const member = members.find((item) => item.id.toString() === id) || null;
                console.log('idddddd', members, this._insurances);
                // Update the Members
                this._insurance.next(member);

                // Return the Members
                return member;
            }),
            switchMap((member) => {
                if (!member) {
                    return throwError(
                        'Could not found Members with id of ' + id + '!'
                    );
                }

                return of(member);
            })
        );
    }

 /**
     * Update updateInsurance
     *
     * @param id
     * @param updateInsurance
     */
 updateInsurances(
    id: string,
    insurance: InsuranceData
): Observable<InsuranceData> {
    return this.insurances$.pipe(
        take(1),
        switchMap((insurances) =>
            this._httpClient
                .patch<InsuranceData>('api/insurance/update-insurance', {
                    id,
                    insurance,
                })
                .pipe(
                    map((updateInsurance) => {
                        // Find the index of the updated insurance
                        const index = insurances.findIndex(
                            (item) => item.id.toString() === id
                        );

                        // Update the insurance
                        insurances[index] = updateInsurance;

                        // Update the insurances
                        this._insurances.next(insurances);

                        // Return the updated insurance
                        return updateInsurance;
                    }),
                    switchMap((updateInsurance) =>
                        this.insurance$.pipe(
                            take(1),
                            filter((item) => item && item.id.toString() === id),
                            tap(() => {
                                // Update the bequest if it's selected
                                this._insurance.next(
                                    updateInsurance
                                );

                                // Return the updated bequest
                                return updateInsurance;
                            })
                        )
                    )
                )
        )
    );
}
getSteps(): Observable<Steps> {

    return this._httpClient.get<Steps>('api/step/all').pipe(
        tap((step) => {
            this._step.next(step);
        })
    );
}

/**
 * Get step
 */
getGetTypeInfo(): Observable<Steps> {
    return this._httpClient.get<Steps>('api/step/getType').pipe(
        tap((step) => {
            this._step.next(step);
        })
    );
}

getChoosePlace(): Observable<Steps> {
    return this._httpClient
        .get<Steps>('api/stepTwo-insurance/getType')
        .pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
}
    /**
     * Get step
     */
    getInitSteps(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step/all').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }


/**
 * Get checkboxes
 */
getCheckboxes(): Observable<CheckboxItem[]> {
    return this._httpClient.get<CheckboxItem[]>('api/insurance/create-name/checkboxes/all').pipe(
        tap((checkboxes: any) => {
            this._checkboxesinsurances.next(checkboxes);
            console.log('checkboxes in seveice ', checkboxes);
        })
    );
}

    /**
     * Search step with given query
     *
     * @param query
     */
    searchSteps(query: string): Observable<Steps> {
        return this._httpClient
            .get<Steps>('api/step/search', {
                params: { query },
            })
            .pipe(
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

    /**
     * Create step
     */
    createStep(): Observable<Steps> {
        console.log(this.step$);
        return this.step$.pipe(
            take(1),
            switchMap((step) =>
                this._httpClient.post<Steps>('api/step/step', {}).pipe(
                    map((newStep) => {
                        // Update the step with the new step
                        console.log(step);
                        // this._step.next([newStep, ...step]);

                        // Return the new step
                        return newStep;
                    })
                )
            )
        );
    }

    /**
     * Update step
     *
     * @param id
     * @param step
     */
    updateStep(id: string, step: Steps): Observable<Step> {
        return this.step$.pipe(
            take(1),
            switchMap((step) =>
                this._httpClient
                    .patch<Steps>('api/step/step', {
                        id,
                        step,
                    })
                    .pipe(
                        map((updatedStep) => {
                            // Find the index of the updated step
                            // const index = step.findIndex(
                            //     (item) => item.id === id
                            // );

                            // Update the step
                            // step[index] = updatedStep;

                            // Update the step
                            this._step.next(step);

                            // Return the updated step
                            return updatedStep;
                        }),
                        switchMap((updatedStep) =>
                            this.step$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the step if it's selected
                                    this._step.next(updatedStep);

                                    // Return the updated step
                                    return updatedStep;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Delete the step
     *
     * @param id
     */
    deleteStep(id: string): Observable<boolean> {
        return this.step$.pipe(
            take(1),
            switchMap((step) =>
                this._httpClient
                    .delete('api/step/step', {
                        params: { id },
                    })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted step
                            // const index = step.findIndex(
                            //     (item) => item.id === id
                            // );

                            // // Delete the step
                            // step.splice(index, 1);

                            // Update the step
                            this._step.next(step);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }
}
