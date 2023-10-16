import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Family } from 'app/modules/stakeholders/family-tree/family-tree.types';
import {
    BehaviorSubject,
    map,
    Observable,
    Subject,
    switchMap,
    tap,
    takeUntil,
    take,
    throwError,
    of,
    filter,
} from 'rxjs';
import { FamiliesMembers } from './family-tree.types';

@Injectable({ providedIn: 'root' })
export class FamilyTreeService {
    // private Family relationships
    private _family: BehaviorSubject<Family | null> = new BehaviorSubject(null);

    private _families: BehaviorSubject<Family[] | null> = new BehaviorSubject(
        null
    );
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    // private Family Members

    private _familyMembers: BehaviorSubject<FamiliesMembers | null> =
        new BehaviorSubject(null);
    private _familiesMembers: BehaviorSubject<FamiliesMembers[] | null> =
        new BehaviorSubject(null);
    private _unsubscribeAllMembers: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */

    constructor(private _httpClient: HttpClient) {}
    get family$(): Observable<Family> {
        return this._family.asObservable();
    }

    /**
     * Getter for Family
     */
    get families$(): Observable<Family[]> {
        return this._families.asObservable();
    }

    getFamily(): Observable<any> {
        return this._httpClient.get('api/family-tree/familys').pipe(
            tap((response: any) => {
                console.log(response);
                this._families.next(response);
            })
        );
    }

    createRelationship(type: string): Observable<Family> {
        this.getFamily()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data: any) => {
                console.log('test');
                // Store the data
                console.log(data);
                this._families.next([...data]);
            });
        return this.families$.pipe(
            take(1),
            switchMap((bequests) =>
                this._httpClient
                    .post<Family>('api/family-tree/family', { type })
                    .pipe(
                        map((newBequest) => {
                            // Update the bequests with the new bequest
                            console.log('newfamilies', newBequest);
                            this._families.next([newBequest, ...bequests]);

                            // Return the new bequest
                            return newBequest;
                        })
                    )
            )
        );
    }

    /**
     * Get Family by id
     */
    getFamilyById(id: string): Observable<Family> {
        return this._families.pipe(
            take(1),
            map((bequests) => {
                // Find the bequest
                const bequest = bequests.find((item) => item.id === id) || null;

                // Update the bequest
                this._family.next(bequest);

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
    /*
      //////////////  * Family Members///////////
    */
    get familyMembers$(): Observable<FamiliesMembers> {
        return this._familyMembers.asObservable();
    }

    /**
     * Getter for Family Members
     */
    get familiesMembers$(): Observable<FamiliesMembers[]> {
        return this._familiesMembers.asObservable();
    }

    getFamilyMembers(): Observable<any> {
        return this._httpClient.get('api/family-tree/familys-members').pipe(
            tap((response: any) => {
                console.log(response);
                this._familiesMembers.next(response);
            })
        );
    }

    createMember(type: string): Observable<Family> {
        this.getFamilyMembers()
            .pipe(takeUntil(this._unsubscribeAllMembers))
            .subscribe((data: any) => {
                console.log('test');
                // Store the data
                // console.log(data);
                this._familiesMembers.next([...data]);
            });
        return this.familiesMembers$.pipe(
            take(1),
            switchMap((Members) =>
                this._httpClient
                    .post<FamiliesMembers>('api/family-tree/family-members', {
                        type,
                    })
                    .pipe(
                        map((newMember) => {
                            // Update the Family Members with the new Family Members
                            console.log('newfamiliesMembers', newMember);
                            this._familiesMembers.next([newMember, ...Members]);

                            // Return the new bequest
                            return newMember;
                        })
                    )
            )
        );
    }

    /**
     * Get Family by id
     */
    getFamilyMembersById(id: string): Observable<FamiliesMembers> {
        return this._familiesMembers.pipe(
            take(1),
            map((members) => {
                // Find the bequest
                const member = members.find((item) => item.id === id) || null;
                console.log('idddddd', members, this._familiesMembers);
                // Update the Members
                this._familyMembers.next(member);

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
     * Update bequest
     *
     * @param id
     * @param bequest
     */
    updateFamilyMembers(
        id: string,
        familyMember: FamiliesMembers
    ): Observable<FamiliesMembers> {
        return this.familiesMembers$.pipe(
            take(1),
            switchMap((familyMembers) =>
                this._httpClient
                    .patch<FamiliesMembers>('api/family-tree/family-members', {
                        id,
                        familyMember,
                    })
                    .pipe(
                        map((updateFamilyMember) => {
                            // Find the index of the updated Family Member
                            const index = familyMembers.findIndex(
                                (item) => item.id === id
                            );

                            // Update the Family Member
                            familyMembers[index] = updateFamilyMember;

                            // Update the Family Members
                            this._familiesMembers.next(familyMembers);

                            // Return the updated Family Member
                            return updateFamilyMember;
                        }),
                        switchMap((updateFamilyMember) =>
                            this.familyMembers$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the bequest if it's selected
                                    this._familyMembers.next(
                                        updateFamilyMember
                                    );

                                    // Return the updated bequest
                                    return updateFamilyMember;
                                })
                            )
                        )
                    )
            )
        );
    }
}
