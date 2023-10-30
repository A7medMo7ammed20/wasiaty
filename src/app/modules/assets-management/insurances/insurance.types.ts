export interface RouteList {
    id: string;
    route: string;
    progress: number;
    currentStep: number;
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
