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
    take,
    tap,
    throwError,
} from 'rxjs';
// import {  WealthType } from '../../wealth-management.types';
import { CommercialRealEstate, WealthType } from './tangible-wealthes.types';
import { AssetBranch } from '../../wealth-management.types';

@Injectable({ providedIn: 'root' })
export class TangibleWealthService {
    // Private
    //    private _tangibleWealthes :BehaviorSubject<TangableWealthes[] | null > = new BehaviorSubject(null);
    //    private _tangableWealth :BehaviorSubject<TangableWealthes | null > = new BehaviorSubject(null);
    private _tangibleWealthes: BehaviorSubject<CommercialRealEstate[] | null> =
        new BehaviorSubject(null);
    private _tangibleTypes: BehaviorSubject<WealthType[] | null> =
        new BehaviorSubject(null);

        private _assetBranches: BehaviorSubject<AssetBranch[] | null> =
        new BehaviorSubject(null);
        private _assetBranch: BehaviorSubject<AssetBranch| null> =
        new BehaviorSubject(null);
    private _data: BehaviorSubject<any | null> = new BehaviorSubject(null);

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

    get assetBranches$():Observable<AssetBranch[]>
    {
        return this._assetBranches.asObservable() ;
    }
    get assetBranch$():Observable<AssetBranch>
    {
        return this._assetBranch.asObservable() ;
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

    addTangableWealth()
    {
        return this.assetBranches$.pipe(
            take(1),
            switchMap((assetBranches) =>
                this._httpClient
                    .post<AssetBranch>('api/apps/assetBranch/item', {})
                    .pipe(
                        map((newAssetBranch) => {
                            console.log(assetBranches);
                            debugger

                            // Update the assetBranch with the new contact
                            this._assetBranches.next([newAssetBranch]);

                            // Return the new contact
                            return newAssetBranch;
                        })
                    )
            )
        );
    }
    /**
     * Get item by id
     */
    getTangableAssetBranchById(id: string): Observable<AssetBranch> {
        return this._data.pipe(
            take(1),
            map((members) => {
                // Find the bequest

                // console.log('idddddd', members, this._data);
                debugger
                const member = members?.find((item) => item?.id === id) || null;
                // Update the Members
                this._assetBranch.next(member);
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
}
