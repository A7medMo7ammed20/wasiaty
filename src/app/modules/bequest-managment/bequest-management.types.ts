export interface Category
{
    id?: string;
    title?: string;
    slug?: string;
}

export interface Bequest
{
    id: string;
    name: string;
    executor: string;
    description: string;
    Beneficiaries:number;
    dueDate: string | null;

}


