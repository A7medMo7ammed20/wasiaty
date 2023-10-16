/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export interface Family {
    id?: string;
    fullName?: string;
    father?: string;
    mother?: string;
    childrenMale?: string[];
    childrenFemale?: string[];
}
export interface FamiliesMembers {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    dateBirth: Date;
    placeBirth?: string;
    gender?: string;
    dateDeath: Date;
    placeDeath?: string;
    maritalStatus?: string;
    description?: string;
}

export interface Individual {
    id: string;
    avatar?: string | null;
    background?: string | null;
    name: string;
    emails?: {
        email: string;
        label: string;
    }[];
    phoneNumbers?: {
        country: string;
        phoneNumber: string;
        label: string;
    }[];
    title?: string;
    company?: string;
    birthday?: string | null;
    address?: string | null;
    notes?: string | null;
    tags: string[];
}

export interface Country {
    id: string;
    iso: string;
    name: string;
    code: string;
    flagImagePos: string;
}

export interface Tag {
    id?: string;
    title?: string;
}
