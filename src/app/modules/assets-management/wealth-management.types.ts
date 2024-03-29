/* eslint-disable */
import { extend } from 'lodash';
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export interface TangibleWealthes
{
    id?: string;
    parentId:string;
    wealthType?: number;
    name?: string;
    acquisitionValue?:number;
    method?: string;
    status?: string;
    counter:number
    child:TangibleWealthes[] | null;

    wealthTypeRoute:string,

}
export interface VMTangableWealthes extends TangibleWealthes
{
    avg?: number;
    typeRoute?:string;


}
export interface WealtheStatus
{
    id?: number;
    status : string;


}
export interface WealthType
{
    id?: number;

    wealthType?: string;
    wealthTypeRoute?: string;

}

export interface AssetBranch {
    id?:string;
    name?:string;
    description?:string
}
