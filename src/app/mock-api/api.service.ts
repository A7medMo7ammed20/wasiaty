// import { MockEndpointsConfig } from 'src/app/configs/mock-endpoints.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrlEndpoint } from 'app/configs/api-url.interface';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environment/environment.development';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    baseUrl = '';
    constructor(private http: HttpClient  ,  private _authService: AuthService ) {}

    // version: string,
    // language: string,
    /***
     * @param env
     * @param language
     * @param version
     * @param endpoint
     */
    getApiUrl(
        endpoint: string,
        env: 'mock' | 'base' = 'mock',
        ...params: any[]
    ): string {
        switch (true) {
            case environment.production:
            case env === 'base':
                this.baseUrl = environment.apiBase;
                break;
            case env === 'mock':
                this.baseUrl = environment.mockBase;
                break;
            default:
                this.baseUrl = environment.mockBase;
        }

        // const basePath = `${this.baseUrl}/${version}/${language}${endpoint}`;
        const basePath = `${this.baseUrl}`;

        return basePath;
    }

    getApiEndpoint(
        env: 'base' | 'mock' = 'mock',
        endpoint: APIUrlEndpoint
    ): string {
        //
        switch (true) {
            case environment.production:
            case env === 'base':
                return endpoint.endpoint;
                break;
            case env === 'mock':
                return endpoint.mockEndpoint;

            default:
                return endpoint.mockEndpoint;
        }

        // const apiUrl = this.api.getApiUrl(this.endpoint, env);
        // return apiUrl;
    }
    getUrl(env: 'base' | 'mock' = 'mock',
    Endpoint: APIUrlEndpoint)
    {
        const endpoint = this.getApiEndpoint(env, Endpoint);
        const apiUrl = this.getApiUrl(endpoint , env);
        const Url = `${apiUrl}/${env === 'mock' ? 'mock' : 'api'}/${endpoint}`;

        return Url
    }
    private getHeaders(): HttpHeaders {
        const authToken = this._authService.accessToken;

        // Set the Authorization header with the token
        return new HttpHeaders({ 'Authorization': `Bearer ${authToken}` });
      }

    get<T>(url: string): Observable<T> {
        const headers =  this.getHeaders()


        console.log('get ')
        return this.http.get<T>(url );
    }
    patch<T>(url: string, data: any): Observable<T> {
        return this.http.patch<T>(url, data);
    }
    post<T>(url: string, data: any): Observable<T> {
        const headers = this.getHeaders()
        return this.http.post<T>(url, data );
    }

    fetch<T>(url: string): Observable<T> {
        const headers = this.getHeaders()
        return this.http.get<T>(url , {headers});
    }

}
