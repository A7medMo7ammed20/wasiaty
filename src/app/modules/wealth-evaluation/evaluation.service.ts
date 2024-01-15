import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Evaluation,
    Contact,
    Profile,
} from 'app/modules/wealth-evaluation/evaluation.types';
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

@Injectable({ providedIn: 'root' })
export class EvaluationService {
    private _Evaluation: BehaviorSubject<Evaluation> = new BehaviorSubject(
        null
    );
    private _Evaluations: BehaviorSubject<Evaluation[]> = new BehaviorSubject(
        null
    );
    private _contact: BehaviorSubject<Contact> = new BehaviorSubject(null);
    private _contacts: BehaviorSubject<Contact[]> = new BehaviorSubject(null);
    private _profile: BehaviorSubject<Profile> = new BehaviorSubject(null);
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    /**
     * Getter for Evaluation
     */
    get Evaluation$(): Observable<Evaluation> {
        return this._Evaluation.asObservable();
    }

    /**
     * Getter for Evaluations
     */
    get Evaluations$(): Observable<Evaluation[]> {
        return this._Evaluations.asObservable();
    }

    /**
     * Getter for contact
     */
    get contact$(): Observable<Contact> {
        return this._contact.asObservable();
    }

    /**
     * Getter for contacts
     */
    get contacts$(): Observable<Contact[]> {
        return this._contacts.asObservable();
    }

    /**
     * Getter for profile
     */
    get profile$(): Observable<Profile> {
        return this._profile.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any> {
        return this._httpClient.get('api/apps/wealth-evaluation/data').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    /**
     * Get Evaluations
     */
    getEvaluations(): Observable<any> {
        return this._httpClient
            .get<Evaluation[]>('api/apps/wealth-evaluation/Evaluations')
            .pipe(
                tap((response: Evaluation[]) => {
                    this._Evaluations.next(response);
                })
            );
    }

    /**
     * Get contact
     *
     * @param id
     */
    getContact(id: string): Observable<any> {
        return this._httpClient
            .get<Contact>('api/apps/wealth-evaluation/contacts', {
                params: { id },
            })
            .pipe(
                tap((response: Contact) => {
                    this._contact.next(response);
                })
            );
    }

    /**
     * Get contacts
     */
    getContacts(): Observable<any> {
        return this._httpClient
            .get<Contact[]>('api/apps/wealth-evaluation/contacts')
            .pipe(
                tap((response: Contact[]) => {
                    this._contacts.next(response);
                })
            );
    }
    


    /**
     * Get profile
     */
    getProfile(): Observable<any> {
        return this._httpClient
            .get<Profile>('api/apps/wealth-evaluation/profile')
            .pipe(
                tap((response: Profile) => {
                    this._profile.next(response);
                })
            );
    }

    /**
     * Get Evaluation
     *
     * @param id
     */
    getEvaluationById(id: string): Observable<any> {
        return this._httpClient
            .get<Evaluation>('api/apps/wealth-evaluation/Evaluation', {
                params: { id },
            })
            .pipe(
                map((Evaluation) => {
                    // Update the Evaluation
                    this._Evaluation.next(Evaluation);

                    // Return the Evaluation
                    return Evaluation;
                }),
                switchMap((Evaluation) => {
                    if (!Evaluation) {
                        return throwError(
                            'Could not found Evaluation with id of ' + id + '!'
                        );
                    }

                    return of(Evaluation);
                })
            );
    }

    /**
     * Update Evaluation
     *
     * @param id
     * @param Evaluation
     */
    updateEvaluation(
        id: string,
        Evaluation: Evaluation
    ): Observable<Evaluation> {
        return this.Evaluations$.pipe(
            take(1),
            switchMap((Evaluations) =>
                this._httpClient
                    .patch<Evaluation>(
                        'api/apps/wealth-evaluation/Evaluation',
                        {
                            id,
                            Evaluation,
                        }
                    )
                    .pipe(
                        map((updatedEvaluation) => {
                            // Find the index of the updated Evaluation
                            const index = Evaluations.findIndex(
                                (item) => item.id === id
                            );

                            // Update the Evaluation
                            Evaluations[index] = updatedEvaluation;

                            // Update the Evaluations
                            this._Evaluations.next(Evaluations);

                            // Return the updated contact
                            return updatedEvaluation;
                        }),
                        switchMap((updatedEvaluation) =>
                            this.Evaluation$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the Evaluation if it's selected
                                    this._Evaluation.next(updatedEvaluation);

                                    // Return the updated Evaluation
                                    return updatedEvaluation;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Reset the selected Evaluation
     */
    resetEvaluation(): void {
        this._Evaluation.next(null);
    }
}
