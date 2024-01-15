import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { APIUrlEndpoint } from 'app/configs/api-url.interface';
import { ApiService } from 'app/mock-api/api.service';
import { WEALTH_ENDPOINTS } from 'app/modules/assets-management/wealth/wealth.endpoint';

import { assign, cloneDeep } from 'lodash-es';
import { Observable, from, map } from 'rxjs';
// import { CommercialRealEstates as CommercialRealEstate  , tangableWealthType} from 'app/mock-api/wealth-management/commercial-real-estate/data';
// import { TangibleWealthes } from 'app/modules/assets-management/wealth-management.types';
@Injectable({providedIn: 'root'})
export class WealthsMockApi
{
    private readonly wealthEndpointConfig: APIUrlEndpoint = WEALTH_ENDPOINTS.find(config => config.mockEndpoint === 'Asset');


    constructor(private _fuseMockApiService: FuseMockApiService , private _apiService: ApiService)
    {
        // Register Mock API handlers

    }
    getWealth(env: 'base' | 'mock' = 'mock'): Observable<string[]> {

        const Url = this._apiService.getUrl(env , this.wealthEndpointConfig  )
        return this._apiService.get<string[]>(Url);
      }
}
