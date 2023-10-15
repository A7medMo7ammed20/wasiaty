import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Category,
    Course,
} from 'app/modules/assets-management/assets-management.types';
import {
    BehaviorSubject,
    map,
    Observable,
    of,
    switchMap,
    tap,
    throwError,
} from 'rxjs';
// import {  WealthType } from '../../wealth-management.types';
import { CommercialRealEstate, WealthType } from './tangible-wealthes.types';

@Injectable({ providedIn: 'root' })
export class TangibleWealthService {
    // Private
    //    private _tangibleWealthes :BehaviorSubject<TangableWealthes[] | null > = new BehaviorSubject(null);
    //    private _tangableWealth :BehaviorSubject<TangableWealthes | null > = new BehaviorSubject(null);
    private _tangibleWealthes: BehaviorSubject<CommercialRealEstate[] | null> =
        new BehaviorSubject(null);
    private _tangibleTypes: BehaviorSubject<WealthType[] | null> =
        new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}
    get tangableWealthes$(): Observable<CommercialRealEstate[]> {
        return this._tangibleWealthes.asObservable();
    }

    getTangableWealth(): Observable<any> {
        return this._httpClient
            .get<CommercialRealEstate[]>(
                'api/wealth-managements/commercial-real-estate/all'
            )
            .pipe(
                tap((tangable) => {
                    console.log('test commercial', tangable);

                    this._tangibleWealthes.next(tangable);
                })
            );
    }

    // Tangible Type

    get tangibleTypes$(): Observable<WealthType[]> {
        return this._tangibleTypes.asObservable();
    }

    getTangibleTypes(): Observable<any> {
        return this._httpClient
            .get<WealthType[]>(
                'api/wealth-managements/commercial-real-estate/tangible-types'
            )
            .pipe(
                tap((tangableType) => {
                    //
                    // console.log('test' , tangable) ;

                    this._tangibleTypes.next(tangableType);
                })
            );
    }
}
