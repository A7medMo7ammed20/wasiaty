import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    Subject,
    filter,
    map,
    of,
    switchMap,
    take,
    takeUntil,
    tap,
    throwError,
} from 'rxjs';
import { Bequest } from './bequest-management.types';
import { Step, Steps } from 'app/shared/types/step.types';
import { CheckboxItem } from 'app/shared/types/checkboxes/checkboxes.types';
import { APIUrlEndpoint } from 'app/configs/api-url.interface';
import { MockAPIConfig } from 'app/configs/mock-endpoints.config';
import { ApiService } from 'app/mock-api/api.service';
import { environment } from 'environment/environment.development';

@Injectable({ providedIn: 'root' })
export class BequestManagementService {
    // Private
    private _bequest: BehaviorSubject<Bequest | null> = new BehaviorSubject(
        null
    );

    private _bequests: BehaviorSubject<Bequest[] | null> = new BehaviorSubject(
        null
    );
    private _data: BehaviorSubject<any | null> = new BehaviorSubject(null);
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _step: BehaviorSubject<Steps | null> = new BehaviorSubject(null);

    // get Chekbox
    private _checkbox: BehaviorSubject<CheckboxItem | null> =
        new BehaviorSubject(null);
    private _checkboxes: BehaviorSubject<CheckboxItem[] | null> =
        new BehaviorSubject(null);

    private endpoint: APIUrlEndpoint = {
        endpoint: 'user',
        mockEndpoint: MockAPIConfig.endpoints.v1.ar.region,
    };

    language:string=environment.defaultLanguage;
    version:string
    _endpoint: string = '';
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _apiService: ApiService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for bequest
     */
    get bequest$(): Observable<Bequest> {
        return this._bequest.asObservable();
    }

    /**
     * Getter for bequests
     */
    get bequests$(): Observable<Bequest[]> {
        return this._bequests.asObservable();
    }
    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }
    /**
     * Getter for step
     */
    get step$(): Observable<Steps> {
        return this._step.asObservable();
    }
    // get data$(): Observable<Bequest[]> {
    //     return this._data.asObservable();
    // }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any> {
        return this._httpClient.get('api/bequest-management/bequests').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    getBequests(): Observable<any> {
        return this._httpClient.get('api/bequest-management').pipe(
            tap((response: any) => {
                console.log(response);
                this._bequests.next(response);
            })
        );
    }

    /**
     * Get bequest by id
     */

    getbequestById(id: string): Observable<Bequest> {
        return this._data.pipe(
            take(1),
            map((members) => {
                // Find the bequest

                console.log('idddddd', members, this._data);
                const member = members.find((item) => item?.id === id) || null;
                // Update the Members
                this._bequest.next(member);

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

    getApiEndpoint(
        env: 'base' | 'mock' = 'mock',
        endpoint: APIUrlEndpoint
    ): string {
        //
        switch (true) {
            case environment.production:
            case env === 'base':
                this._endpoint = endpoint.endpoint;
                break;
            case env === 'mock':
                this._endpoint = endpoint.mockEndpoint;
                break;
            default:
                this._endpoint = endpoint.mockEndpoint;
        }

        const apiUrl = this._apiService.getApiUrl(this._endpoint, env);
        return apiUrl;
    }

    /**
     * Create bequest
     *
     * @param type
     */
    createBequest(type: string): Observable<Bequest> {
        this.getBequests()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data: any) => {
                // Store the data
                this._bequests.next([...data]);
            });
        return this.bequests$.pipe(
            take(1),
            switchMap((bequests) =>
                this._httpClient
                    .post<Bequest>('api/bequest-management/bequest', { type })
                    .pipe(
                        map((newBequest) => {
                            // Update the bequests with the new bequest

                            this._bequests.next([newBequest, ...bequests]);

                            // Return the new bequest
                            return newBequest;
                        })
                    )
            )
        );
    }
    /**
     * Update bequest
     *
     * @param id
     * @param bequest
     */
    updateBequest(id: string, bequest: Bequest): Observable<Bequest> {
        return this.bequests$.pipe(
            take(1),
            switchMap((bequests) =>
                this._httpClient
                    .patch<Bequest>('api/bequest-management/bequest', {
                        id,
                        bequest,
                    })
                    .pipe(
                        map((updatedBequest) => {
                            // Find the index of the updated bequest
                            const index = bequests.findIndex(
                                (item) => item.id === id
                            );

                            // Update the bequest
                            bequests[index] = updatedBequest;

                            // Update the bequests
                            this._bequests.next(bequests);

                            // Return the updated bequest
                            return updatedBequest;
                        }),
                        switchMap((updatedBequest) =>
                            this.bequest$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the bequest if it's selected
                                    this._bequest.next(updatedBequest);

                                    // Return the updated bequest
                                    return updatedBequest;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Delete the bequest
     *
     * @param id
     */
    deleteBequest(id: string): Observable<boolean> {
        return this.bequests$.pipe(
            take(1),
            switchMap((bequests) =>
                this._httpClient
                    .delete('api/bequest-management/bequest', {
                        params: { id },
                    })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted bequest
                            const index = bequests.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the bequest
                            bequests.splice(index, 1);

                            // Update the bequests
                            this._bequests.next(bequests);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }

    getSteps(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step-bequest/all').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }
    /**
     * Get step
     */
    GetTypeInfo(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step-bequest/getType').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }

    getChoosePlace(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/stepTwo-bequest/getType').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }
    /**
     * Get step
     */
    getInitSteps(): Observable<Steps> {
        return this._httpClient.get<Steps>('api/step-bequest/all').pipe(
            tap((step) => {
                this._step.next(step);
            })
        );
    }
    getreviewEndowment(): Observable<Steps> {
        return this._httpClient
            .get<Steps>('api/stepThree-bequest/getType')
            .pipe(
                tap((step) => {
                    this._step.next(step);
                })
            );
    }
    //
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
     * Get checkboxes
     */
    getCheckboxes(): Observable<CheckboxItem[]> {
        return this._httpClient
            .get<CheckboxItem[]>('api/bequest/create-type/checkboxes/all')
            .pipe(
                tap((checkboxes: any) => {
                    this._checkboxes.next(checkboxes);
                    console.log('checkboxes in seveice ', checkboxes);
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
