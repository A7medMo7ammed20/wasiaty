import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Individual,
    Country,
    Tag,
} from 'app/modules/stakeholders/stakeholders.types';
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
export class IndividualService {
    // Private
    private _individual: BehaviorSubject<Individual | null> =
        new BehaviorSubject(null);
    private _individuals: BehaviorSubject<Individual[] | null> =
        new BehaviorSubject(null);
    private _countries: BehaviorSubject<Country[] | null> = new BehaviorSubject(
        null
    );
    private _tags: BehaviorSubject<Tag[] | null> = new BehaviorSubject(null);

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
    get individual$(): Observable<Individual> {
        return this._individual.asObservable();
    }

    /**
     * Getter for individuals
     */
    get individuals$(): Observable<Individual[]> {
        return this._individuals.asObservable();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get individuals
     */
    getIndividuals(): Observable<Individual[]> {
        return this._httpClient.get<Individual[]>('api/individuals/all').pipe(
            tap((individuals) => {
                this._individuals.next(individuals);
            })
        );
    }

    /**
     * Search individuals with given query
     *
     * @param query
     */
    searchIndividuals(query: string): Observable<Individual[]> {
        return this._httpClient
            .get<Individual[]>('api/individuals/search', {
                params: { query },
            })
            .pipe(
                tap((individuals) => {
                    this._individuals.next(individuals);
                })
            );
    }

    /**
     * Get individual by id
     */
    getIndividualById(id: string): Observable<Individual> {
        return this._individuals.pipe(
            take(1),
            map((individuals) => {
                // Find the individual
                const individual =
                    individuals.find((item) => item.id === id) || null;

                // Update the individual
                this._individual.next(individual);

                // Return the individual
                return individual;
            }),
            switchMap((individual) => {
                if (!individual) {
                    return throwError(
                        'Could not found individual with id of ' + id + '!'
                    );
                }

                return of(individual);
            })
        );
    }

    /**
     * Create individual
     */
    createIndividual(): Observable<Individual> {
        console.log(this.individuals$);
        return this.individuals$.pipe(
            take(1),
            switchMap((individuals) =>
                this._httpClient
                    .post<Individual>('api/individuals/individual', {})
                    .pipe(
                        map((newIndividual) => {
                            // Update the individuals with the new individual
                            console.log(individuals);
                            this._individuals.next([
                                newIndividual,
                                ...individuals,
                            ]);

                            // Return the new individual
                            return newIndividual;
                        })
                    )
            )
        );
    }

    /**
     * Update individual
     *
     * @param id
     * @param individual
     */
    updateIndividual(
        id: string,
        individual: Individual
    ): Observable<Individual> {
        return this.individuals$.pipe(
            take(1),
            switchMap((individuals) =>
                this._httpClient
                    .patch<Individual>('api/individuals/individual', {
                        id,
                        individual,
                    })
                    .pipe(
                        map((updatedIndividual) => {
                            // Find the index of the updated individual
                            const index = individuals.findIndex(
                                (item) => item.id === id
                            );

                            // Update the individual
                            individuals[index] = updatedIndividual;

                            // Update the individuals
                            this._individuals.next(individuals);

                            // Return the updated individual
                            return updatedIndividual;
                        }),
                        switchMap((updatedIndividual) =>
                            this.individual$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the individual if it's selected
                                    this._individual.next(updatedIndividual);

                                    // Return the updated individual
                                    return updatedIndividual;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Delete the individual
     *
     * @param id
     */
    deleteIndividual(id: string): Observable<boolean> {
        return this.individuals$.pipe(
            take(1),
            switchMap((individuals) =>
                this._httpClient
                    .delete('api/individuals/individual', {
                        params: { id },
                    })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted individual
                            const index = individuals.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the individual
                            individuals.splice(index, 1);

                            // Update the individuals
                            this._individuals.next(individuals);

                            // Return the deleted status
                            return isDeleted;
                        })
                    )
            )
        );
    }

    /**
     * Get countries
     */
    getCountries(): Observable<Country[]> {
        return this._httpClient
            .get<Country[]>('api/individuals/countries')
            .pipe(
                tap((countries) => {
                    this._countries.next(countries);
                })
            );
    }

    /**
     * Get tags
     */
    getTags(): Observable<Tag[]> {
        return this._httpClient.get<Tag[]>('api/individuals/tags').pipe(
            tap((tags) => {
                this._tags.next(tags);
            })
        );
    }

    /**
     * Create tag
     *
     * @param tag
     */
    createTag(tag: Tag): Observable<Tag> {
        return this.tags$.pipe(
            take(1),
            switchMap((tags) =>
                this._httpClient.post<Tag>('api/individuals/tag', { tag }).pipe(
                    map((newTag) => {
                        // Update the tags with the new tag
                        this._tags.next([...tags, newTag]);

                        // Return new tag from observable
                        return newTag;
                    })
                )
            )
        );
    }

    /**
     * Update the tag
     *
     * @param id
     * @param tag
     */
    updateTag(id: string, tag: Tag): Observable<Tag> {
        return this.tags$.pipe(
            take(1),
            switchMap((tags) =>
                this._httpClient
                    .patch<Tag>('api/individuals/tag', {
                        id,
                        tag,
                    })
                    .pipe(
                        map((updatedTag) => {
                            // Find the index of the updated tag
                            const index = tags.findIndex(
                                (item) => item.id === id
                            );

                            // Update the tag
                            tags[index] = updatedTag;

                            // Update the tags
                            this._tags.next(tags);

                            // Return the updated tag
                            return updatedTag;
                        })
                    )
            )
        );
    }

    /**
     * Delete the tag
     *
     * @param id
     */
    deleteTag(id: string): Observable<boolean> {
        return this.tags$.pipe(
            take(1),
            switchMap((tags) =>
                this._httpClient
                    .delete('api/individuals/tag', { params: { id } })
                    .pipe(
                        map((isDeleted: boolean) => {
                            // Find the index of the deleted tag
                            const index = tags.findIndex(
                                (item) => item.id === id
                            );

                            // Delete the tag
                            tags.splice(index, 1);

                            // Update the tags
                            this._tags.next(tags);

                            // Return the deleted status
                            return isDeleted;
                        }),
                        filter((isDeleted) => isDeleted),
                        switchMap((isDeleted) =>
                            this.individuals$.pipe(
                                take(1),
                                map((individuals) => {
                                    // Iterate through the individuals
                                    individuals.forEach((individual) => {
                                        const tagIndex =
                                            individual.tags.findIndex(
                                                (tag) => tag === id
                                            );

                                        // If the individual has the tag, remove it
                                        if (tagIndex > -1) {
                                            individual.tags.splice(tagIndex, 1);
                                        }
                                    });

                                    // Return the deleted status
                                    return isDeleted;
                                })
                            )
                        )
                    )
            )
        );
    }

    /**
     * Update the avatar of the given individual
     *
     * @param id
     * @param avatar
     */
    uploadAvatar(id: string, avatar: File): Observable<Individual> {
        return this.individuals$.pipe(
            take(1),
            switchMap((individuals) =>
                this._httpClient
                    .post<Individual>(
                        'api/individuals/avatar',
                        {
                            id,
                            avatar,
                        },
                        {
                            headers: {
                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                'Content-Type': avatar.type,
                            },
                        }
                    )
                    .pipe(
                        map((updatedIndividual) => {
                            // Find the index of the updated individual
                            const index = individuals.findIndex(
                                (item) => item.id === id
                            );

                            // Update the individual
                            individuals[index] = updatedIndividual;

                            // Update the individuals
                            this._individuals.next(individuals);

                            // Return the updated individual
                            return updatedIndividual;
                        }),
                        switchMap((updatedIndividual) =>
                            this.individual$.pipe(
                                take(1),
                                filter((item) => item && item.id === id),
                                tap(() => {
                                    // Update the individual if it's selected
                                    this._individual.next(updatedIndividual);

                                    // Return the updated individual
                                    return updatedIndividual;
                                })
                            )
                        )
                    )
            )
        );
    }
}
