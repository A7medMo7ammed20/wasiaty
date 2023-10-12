import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Course } from 'app/modules/assets-management/assets-management.types';
import { BehaviorSubject, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { TangibleWealthes, WealthType } from './wealth-management.types';

@Injectable({providedIn: 'root'})
export class WealthManagementService
{
    // Private
//    private _tangibleWealthes :BehaviorSubject<TangableWealthes[] | null > = new BehaviorSubject(null);
//    private _tangableWealth :BehaviorSubject<TangableWealthes | null > = new BehaviorSubject(null);
   private _tangibleWealthes: BehaviorSubject<TangibleWealthes[] | null> = new BehaviorSubject(null);
   private _tangibleTypes: BehaviorSubject<WealthType[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {

    }
    get tangableWealthes$(): Observable<TangibleWealthes[]>
    {
        return this._tangibleWealthes.asObservable();
    }



    getTangableWealth():Observable<any> {
        return this._httpClient.get<TangibleWealthes[]>('api/wealth-managements/all').pipe(
            tap((tangable) =>
            {
                // debugger;
            // console.log('test' , tangable) ;

                this._tangibleWealthes.next(tangable);

            }),
        );
    }

    // Tangible Type

    get tangibleTypes$():Observable<WealthType[]>
    {
        return this._tangibleTypes.asObservable();
    }

    getTangibleTypes():Observable <any> {
        return this._httpClient.get<WealthType[]>('api/wealth-managements/tangible-types').pipe(
            tap((tangableType) =>
            {
                // debugger;
            // console.log('test' , tangable) ;

                this._tangibleTypes.next(tangableType);

            }),
        );
    }
}
