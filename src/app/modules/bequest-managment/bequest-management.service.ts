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

@Injectable({ providedIn: 'root' })
export class BequestManagementService {
    // Private
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private _bequest: BehaviorSubject<Bequest | null> = new BehaviorSubject(
        null
    );

    private _bequests: BehaviorSubject<Bequest[] | null> = new BehaviorSubject(
        null
    );
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

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

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any> {
        return this._httpClient.get('api/bequest-management').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getBequests(): Observable<any> {
        return this._httpClient.get('api/bequest-management/bequests').pipe(
            tap((response: any) => {
                console.log(response);
                this._bequests.next(response);
            })
        );
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

    /**
     * Get bequest by id
     */
    getbequestById(id: string): Observable<Bequest> {
        return this._bequests.pipe(
            take(1),
            map((bequests) => {
                // Find the bequest
                const bequest = bequests.find((item) => item.id === id) || null;

                // Update the bequest
                this._bequest.next(bequest);

                // Return the bequest
                return bequest;
            }),
            switchMap((bequest) => {
                if (!bequest) {
                    return throwError(
                        'Could not found bequest with id of ' + id + '!'
                    );
                }

                return of(bequest);
            })
        );
    }
}
