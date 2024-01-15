import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { typeBequest as checkboxesData } from 'app/mock-api/type-bequest/data';
import { assign, cloneDeep } from 'lodash-es';
import { Observable, from, map } from 'rxjs';
import { ApiService } from '../api.service';
import { environment } from 'environment/environment.development';
import { APIUrlEndpoint } from 'app/configs/api-url.interface';
import { User } from 'app/core/user/user.types';
import { BEQUEST_ENDPOINTS } from 'app/modules/bequest-managment/bequest.endpoint';
import { REGISTER_ENDPOINTS } from './registeration.endpoint';

@Injectable({ providedIn: 'root' })
export class RegisterServiceAPI {
    // endpoint: string = 'Country';
    baseUrl = environment.apiBase;
    private _checkbxes: any[] = checkboxesData;
    private readonly userEndpointConfig: APIUrlEndpoint = BEQUEST_ENDPOINTS.find(config => config.mockEndpoint === 'user');
    private readonly registerEndpointConfig: APIUrlEndpoint = REGISTER_ENDPOINTS.find(config => config.mockEndpoint === 'country');

    /**
     * Constructor
     */
    constructor(
        private _fuseMockApiService: FuseMockApiService,
        private _apiService: ApiService
    ) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    // GetCountries(endpoint: 'mock' | 'base'): any {
    //     const url = `${this.baseUrl}/${this.endpoint}`
    //     this.api.get<any>(url);
    // }

    GetCountries(env: 'base' | 'mock' = 'mock'): Observable<string[]> {
        const Url = this._apiService.getUrl(env , this.registerEndpointConfig  )
        return this._apiService.get<string[]>(Url);
    }

    getRegions(env: 'base' | 'mock' = 'mock'): Observable<string[]> {

        const Url = this._apiService.getUrl(env , this.userEndpointConfig  )
        return this._apiService.get<string[]>(Url);
      }




      postRegions(env: 'base' | 'mock' = 'mock', data:any): Observable<User> {
        const Url = this._apiService.getUrl(env , this.userEndpointConfig  )
        return this._apiService.post<User>(Url, data)
      }

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/bequest/create-type/checkboxes/all')
            .reply(() => {
                // Clone the checkboxes
                const checkboxes = cloneDeep(this._checkbxes);

                // Sort the checkboxes by the name field by default
                // checkboxes.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, checkboxes];
            });
    }
}
