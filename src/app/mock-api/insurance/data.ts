/* eslint-disable */

import { Steps } from 'app/modules/assets-management/insurances/insurance.types';

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
            title: 'Tell us about your place',
            description:
                'Share some basic info, like where it is and how many guests can stay.',
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
    title: 'Tell us about your type',
    description:
        'In this step, we’ll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.',
    icon: 'https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};
