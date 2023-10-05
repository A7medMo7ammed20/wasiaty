/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export interface Family
{
    id?: string;
    fullName?: string;
    father?: string;
    mother?: string;
    childrenMale?: string;
    childrenFemale?: string;
    spouse?: string;
    grandpa?: string;
    uncle?: string;
}
export interface FamiliesMembers {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    dateBirth: Date;
    placeBirth?: string;
    gender?: string;
    dateDeath: Date ;
    placeDeath?: string;
    maritalStatus?: string;
    description?: string;
}
