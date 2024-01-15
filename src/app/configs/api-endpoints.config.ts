export type EndpointFunction = (id?: string | number) => string;
type LanguageEndpoints = {
    [key: string]: string | EndpointFunction;
};

type Langs = {
    [key: string]: LanguageEndpoints;
};

type Versions = {
    [key: string]: Langs;
};

const langs: Langs = {
    ar: {
        slide: 'slide',
        slider: () => '/slider',
        famousModels: () => '/famous-models',
        termsRegion: () => '/terms/region',
        numbersById: (id?: string | number) => `/numbers/${id}`,
        registeredNumbersByTid: (tid?: string | number) =>
            `/registered-numbers/${tid}`,

        // other endpoints
    },
    en: {
        slider: '/slider',
        numbers: '/numbers',
        // other endpoints
    },
};

const versions: Versions = {
    v1: langs,
    v2: langs, // Assuming v2 has the same structure for the sake of example
};

export const ApiEndpointsConfig = versions;
