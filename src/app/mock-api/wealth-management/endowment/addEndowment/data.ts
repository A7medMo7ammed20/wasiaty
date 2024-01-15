/* eslint-disable */

import { Steps } from 'app/shared/types/step.types';

export const steps: Steps = {
    id: '1',
    title: 'It’s Easy To Mmake An Endowment Of Your Property',
    description: 'Earn money by renting out your extra space.',
    icon: '',
    haveIcon: false,
    currentStep: 0,
    steps: [
        {
            id: '1',
            title: 'Choose a Beneficiary',
            description:
                'Choose the type of endowment you would like to create - whether it is for education, healthcare, or any other purpose.',
            icon: 'assets/images/wasiaty/bfc0bc89-58cb-4525-a26e-7b23b750ee00.webp',
            haveIcon: true,
            currentStep: 0,
        },
        {
            id: '2',
            title: 'Choose what the endowment will be',
            description:
                'Share Some Basic Info, Like Where It Is and the Name of the Place You Will Endowment.',
            icon: 'assets/images/wasiaty/fund.png',
            haveIcon: true,
            currentStep: 0,
        },
        // {
        //     id: '3',
        //     title: 'Determine the Amount',
        //     description:
        //         'Decide on the amount you want to contribute to the endowment and set a target goal if desired.',
        //     icon: 'assets/images/wasiaty/perspective_matte-383-128x128.png',
        //     haveIcon: true,
        //     currentStep: 0,
        // },
        // {
        //     id: '4',
        //     title: 'Choose a Beneficiary',
        //     description:
        //         'Select the individual, organization, or cause that will benefit from your endowment.',
        //     icon: 'assets/images/wasiaty/growth.png',
        //     haveIcon: true,
        //     currentStep: 0,
        // },
        {
            id: '3',
            title: 'Review and Confirm',
            description:
                'Review all the details of your endowment before finalizing and confirming your commitment.',
            icon: 'assets/images/wasiaty/istockphoto-1215563941-1024x1024.jpg',
            haveIcon: true,
            currentStep: 0,
        },
    ],
};
export const typeInfo: Steps = {
    id: '1',
    title: 'Tell us about your endowment type',
    description:
        'In this step, we’ll ask you to select the type of endowment you would like to create.',
    icon: 'https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};

export const choosePlace: Steps = {
    id: '1',
    title: 'Choose what the endowment will be',
    description:
        'In this step, we’ll ask you to select the place of endowment you would like to create. Consider the cause or purpose that is close to your heart.',
    icon: 'https://media.istockphoto.com/id/150434138/video/birth-of-a-city.mp4?s=mp4-480x480-is&k=20&c=FTm9zChFcVYS7wvVbKSYSGzgkaodMw6In9qSyxrRdwc=    ',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};
export const reviewEndowment: Steps = {
    id: '2',
    title: 'Review and Confirm',
    description:
        'In this step, we’ll ask you to select the place of endowment you would like to create. Consider the cause or purpose that is close to your heart.',
    icon: 'https://media.istockphoto.com/id/150434138/video/birth-of-a-city.mp4?s=mp4-480x480-is&k=20&c=FTm9zChFcVYS7wvVbKSYSGzgkaodMw6In9qSyxrRdwc=    ',
    haveIcon: false,
    currentStep: 0,
    steps: [],
};
