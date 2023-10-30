
import { DateTime } from 'luxon';

const now = DateTime.now();

export interface Endowment
{
    id: string;
    endowmentName: string;
    amount: number;
    donationDate: Date;
    beneficiaryId: string  | null;
    beneficiary: string | null; //TODO  الجهة المستفيدة
    wealthId:string |null;
}
export interface VMEndowment extends Endowment
{
    beneficiaryName:string;
    wealthName:string;

}
