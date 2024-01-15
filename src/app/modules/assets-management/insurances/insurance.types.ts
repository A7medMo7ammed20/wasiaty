import { DateTime } from 'luxon';

const now = DateTime.now();
export interface InsuranceData {
    id: number;
    policyNumber: string;
    companyName: string;
    insuranceType: string;
    premiumAmount: string;
    policyStartDate: Date;
    policyEndDate: Date;
    coverageAmount: string;
    statusInsurance: string; // e.g., "Active", "Expired", "Cancelled"
    // Additional properties as needed
  }
