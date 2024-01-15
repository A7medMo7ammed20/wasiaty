import { BEQUEST_ENDPOINTS } from 'app/modules/bequest-managment/bequest.endpoint';
import { shareEndpoints } from './routes.endpoints';
export class MockAPIConfig {
    private static v1Endpoints = {
        region: '/kingdom-number/region',
        ...BEQUEST_ENDPOINTS,
        ...shareEndpoints,
    };
    private static v2Endpoints = {
        region: '/kingdom-number/region',
    };
    static endpoints = {
        v1: {
            ar: { ...this.v1Endpoints },
            en: { ...this.v1Endpoints },
        },
        v2: {
            ar: { ...this.v2Endpoints },
            en: { ...this.v2Endpoints },
        },
    };

    static getEndpointWithParams(endpoint: string, id: string | number) {
        return `/${endpoint}/${id}`;
    }
}
