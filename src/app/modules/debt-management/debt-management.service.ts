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
import { Debt } from './debt-management.types';

@Injectable({ providedIn: 'root' })
export class debtManagementService {
    // Private
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);
    private _debtTable: BehaviorSubject<any> = new BehaviorSubject(null);

    private _debt: BehaviorSubject<Debt | null> = new BehaviorSubject(null);

    private _debts: BehaviorSubject<Debt[] | null> = new BehaviorSubject(null);
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for debt
     */
    get debt$(): Observable<Debt> {
        return this._debt.asObservable();
    }

    /**
     * Getter for debts
     */
    get debts$(): Observable<Debt[]> {
        return this._debts.asObservable();
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
    /**
     * Getter for _debtTable
     */
    get debtTable$(): Observable<any> {
        return this._debtTable.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any> {
        return this._httpClient.get('api/debt-management').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }
    getdebts(): Observable<any> {
        return this._httpClient.get('api/debt-management/debts').pipe(
            tap((response: any) => {
                console.log(response);
                this._debts.next(response);
            })
        );
    }
    getdebtsTable(): Observable<any> {
        return this._httpClient.get('api/debt-management/data').pipe(
            tap((response: any) => {
                console.log(response);
                this._debtTable.next(response.Detials);
            })
        );
    }

    /**
     * Create debt
     *
     * @param type
     */
    createdebt(type: string): Observable<Debt> {
        this.getdebts()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data: any) => {
                // Store the data

                console.log('data  ', data);
                this._debts.next(data);
            });

        return this.debts$.pipe(
            take(1),
            switchMap((debts) =>
                this._httpClient
                    .post<Debt>('api/debt-management/debt', { type })
                    .pipe(
                        map((newdebt) => {
                            // Update the debts with the new debt
                            console.log('newdebt ', newdebt);
                            this._debts.next([newdebt]);

                            // Return the new debt
                            return newdebt;
                        })
                    )
            )
        );
    }
    /**
     * Update debt
     *
     * @param id
     * @param debt
     */
    updatedebt(id: string, debt: Debt): Observable<Debt> {
        return this.debts$.pipe(
            take(1),
            switchMap((debts) =>
                this._httpClient
                    .patch<Debt>('api/debt-management/debt', {
                        id,
                        debt,
                    })
                    .pipe(
                        map((updateddebt) => {
                            // Find the index of the updated debt
                            const index = debts.findIndex(
                                (item) => item.id === id
                            );

                            // Update the debt
                            debts[index] = updateddebt;

                            // Update the debts
                            this._debts.next(debts);

                            // Return the updated debt
                            return updateddebt;
                        }),
                        switchMap((updateddebt) =>
                            this.debt$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the debt if it's selected
                                    this._debt.next(updateddebt);

                                    // Return the updated debt
                                    return updateddebt;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Delete the debt
     *
     * @param id
     */
    deletedebt(id: string): Observable<boolean> {
        return this.debts$.pipe(
            take(1),
            switchMap((debts) =>
                this._httpClient
                    .delete('api/debt-management/debt', { params: { id } })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted debt
                            const index = debts.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the debt
                            debts.splice(index, 1);

                            // Update the debts
                            this._debts.next(debts);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }

    /**
     * Get debt by id
     */
    getdebtById(id: string): Observable<Debt> {
        return this._debts.pipe(
            take(1),
            map((debts) => {

                // Find the debt
                const debt = debts.find((item) => item.id === id) || null;

                // Update the debt
                this._debt.next(debt);

                // Return the debt
                return debt;
            }),
            switchMap((debt) => {
                if (!debt) {
                    return throwError(
                        'Could not found debt with id of ' + id + '!'
                    );
                }

                return of(debt);
            })
        );
    }
}
