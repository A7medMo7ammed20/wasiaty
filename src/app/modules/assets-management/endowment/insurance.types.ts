export interface RouteList {
    id: string;
    route: string;
}

export interface Step {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    haveIcon: boolean;
    currentStep?: number;
}
export interface Steps extends Step {
    steps: Step[] | null;
}
