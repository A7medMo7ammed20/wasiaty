/* eslint-disable */

import { Steps } from 'app/shared/types/step.types';
// import { InsuranceData } from 'app/modules/assets-management/insurances/insurances.types';
import { InsuranceData } from "app/modules/assets-management/insurances/insurance.types";

export const steps: Steps = {
    id: '1',
    title: 'It’s easy to get started on Wasiaty.',
    description: 'Earn money by renting out your extra space.',
    icon: '',
    haveIcon: false,
    currentStep: 0,
    steps: [
        {
            id: '1',
            title: 'Choose the name of the insurance company',
            description:
                'Choose the type of insurance you want to create – whether it is health, or any other purpose.',
            icon: 'assets/images/wasiaty/bfc0bc89-58cb-4525-a26e-7b23b750ee00.webp',
            haveIcon: true,
            currentStep: 0,
        },
        {
            id: '2',
            title: 'Make it stand out',
            description:
                'Add 5 or more photos plus a title and description—we’ll help you out.',
            icon: 'assets/images/wasiaty/c0634c73-9109-4710-8968-3e927df1191c.webp',
            haveIcon: true,
            currentStep: 0,
        },
        {
            id: '3',
            title: 'Finish up and publish',
            description:
                'Choose if you would like to start with an experienced guest, set a starting price, and publish your listing.',
            icon: 'assets/images/wasiaty/da2e1a40-a92b-449e-8575-d8208cc5d409.webp',
            haveIcon: true,
            currentStep: 0,
        },
    ],
};
export const typeInfo: Steps = {
    id: '1',
    title: 'Tell us the name of the insurance company',
    description:
        'In this step, you will choose the name of the company that you previously insured with.',
    icon: 'https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};

export const stepTwo: Steps = {
    id: '1',
    title: 'In this step, we will collect basic insurance information',
    description:
        '',
    icon: 'https://qic.online/ar/main/media/two-minutes.ddc27117.mp4',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};

export const insuranceData: InsuranceData[] = [
    {
      id: 1,
      policyNumber: "A123",
      companyName: "Tawuniya",
      insuranceType: "Car",
      premiumAmount: "500",
      policyStartDate: new Date("2023-01-01"),
      policyEndDate: new Date("2024-01-01"),
      coverageAmount: "10000",
      statusInsurance: "Active"
    },
    {
      id: 2,
      policyNumber: "B456",
      companyName: "Saudi French Insurance",
      insuranceType: "Home",
      premiumAmount: "700",
      policyStartDate: new Date("2023-02-01"),
      policyEndDate: new Date("2024-02-01"),
      coverageAmount: "200000",
      statusInsurance: "Expired"
    },
    {
      id: 3,
      policyNumber: "C789",
      companyName: "Al-Oula Insurance",
      insuranceType: "Health",
      premiumAmount:" 300",
      policyStartDate: new Date("2023-03-01"),
      policyEndDate: new Date("2024-03-01"),
      coverageAmount: "5000",
      statusInsurance: "Active"
    },
    {
      id: 4,
      policyNumber: "D012",
      companyName: "Arabian Shield Insurance",
      insuranceType: "Travel",
      premiumAmount:" 200",
      policyStartDate: new Date("2023-04-01"),
      policyEndDate: new Date("2024-04-01"),
      coverageAmount: "100000",
      statusInsurance: "Active"
    },
    {
      id: 5,
      policyNumber: "E345",
      companyName: "Al-Ahlia Insurance",
      insuranceType: "Life",
      premiumAmount:" 1000",
      policyStartDate: new Date("2023-05-01"),
      policyEndDate: new Date("2024-05-01"),
      coverageAmount: "500000",
      statusInsurance: "Active"
    },
    {
      id: 6,
      policyNumber: "F678",
      companyName: "Middle East Cooperative Insurance",
      insuranceType: "Pet",
      premiumAmount:" 100",
      policyStartDate: new Date("2023-06-01"),
      policyEndDate: new Date("2024-06-01"),
      coverageAmount: "1000",
      statusInsurance: "Cancelled"
    }
  ];
