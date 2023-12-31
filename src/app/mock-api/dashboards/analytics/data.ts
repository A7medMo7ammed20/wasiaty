/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const analytics = {
    visitors           : {
        series: {
            'this-year': [
                {
                    name: 'Activities',
                    data: [
                        {
                            x: now.minus({months: 12}).plus({day: 1}).toJSDate(),
                            y: 4884,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 4}).toJSDate(),
                            y: 5351,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 7}).toJSDate(),
                            y: 5293,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 10}).toJSDate(),
                            y: 4908,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 13}).toJSDate(),
                            y: 5027,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 16}).toJSDate(),
                            y: 4837,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 19}).toJSDate(),
                            y: 4484,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 22}).toJSDate(),
                            y: 4071,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 25}).toJSDate(),
                            y: 4124,
                        },
                        {
                            x: now.minus({months: 12}).plus({day: 28}).toJSDate(),
                            y: 4563,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 1}).toJSDate(),
                            y: 3820,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 4}).toJSDate(),
                            y: 3968,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 7}).toJSDate(),
                            y: 4102,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 10}).toJSDate(),
                            y: 3941,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 13}).toJSDate(),
                            y: 3566,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 16}).toJSDate(),
                            y: 3853,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 19}).toJSDate(),
                            y: 3853,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 22}).toJSDate(),
                            y: 4069,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 25}).toJSDate(),
                            y: 3879,
                        },
                        {
                            x: now.minus({months: 11}).plus({day: 28}).toJSDate(),
                            y: 4298,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 1}).toJSDate(),
                            y: 4355,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 4}).toJSDate(),
                            y: 4065,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 7}).toJSDate(),
                            y: 3650,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 10}).toJSDate(),
                            y: 3379,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 13}).toJSDate(),
                            y: 3191,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 16}).toJSDate(),
                            y: 2968,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 19}).toJSDate(),
                            y: 2957,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 22}).toJSDate(),
                            y: 3313,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 25}).toJSDate(),
                            y: 3708,
                        },
                        {
                            x: now.minus({months: 10}).plus({day: 28}).toJSDate(),
                            y: 3586,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 1}).toJSDate(),
                            y: 3965,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 4}).toJSDate(),
                            y: 3901,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 7}).toJSDate(),
                            y: 3410,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 10}).toJSDate(),
                            y: 3748,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 13}).toJSDate(),
                            y: 3929,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 16}).toJSDate(),
                            y: 3846,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 19}).toJSDate(),
                            y: 3771,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 22}).toJSDate(),
                            y: 4015,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 25}).toJSDate(),
                            y: 3589,
                        },
                        {
                            x: now.minus({months: 9}).plus({day: 28}).toJSDate(),
                            y: 3150,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 1}).toJSDate(),
                            y: 3050,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 4}).toJSDate(),
                            y: 2574,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 7}).toJSDate(),
                            y: 2823,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 10}).toJSDate(),
                            y: 2848,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 13}).toJSDate(),
                            y: 3000,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 16}).toJSDate(),
                            y: 3216,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 19}).toJSDate(),
                            y: 3299,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 22}).toJSDate(),
                            y: 3768,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 25}).toJSDate(),
                            y: 3524,
                        },
                        {
                            x: now.minus({months: 8}).plus({day: 28}).toJSDate(),
                            y: 3918,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 1}).toJSDate(),
                            y: 4145,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 4}).toJSDate(),
                            y: 4378,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 7}).toJSDate(),
                            y: 3941,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 10}).toJSDate(),
                            y: 3932,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 13}).toJSDate(),
                            y: 4380,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 16}).toJSDate(),
                            y: 4243,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 19}).toJSDate(),
                            y: 4367,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 22}).toJSDate(),
                            y: 3879,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 25}).toJSDate(),
                            y: 4357,
                        },
                        {
                            x: now.minus({months: 7}).plus({day: 28}).toJSDate(),
                            y: 4181,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 1}).toJSDate(),
                            y: 4619,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 4}).toJSDate(),
                            y: 4769,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 7}).toJSDate(),
                            y: 4901,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 10}).toJSDate(),
                            y: 4640,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 13}).toJSDate(),
                            y: 5128,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 16}).toJSDate(),
                            y: 5015,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 19}).toJSDate(),
                            y: 5360,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 22}).toJSDate(),
                            y: 5608,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 25}).toJSDate(),
                            y: 5272,
                        },
                        {
                            x: now.minus({months: 6}).plus({day: 28}).toJSDate(),
                            y: 5660,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 1}).toJSDate(),
                            y: 5836,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 4}).toJSDate(),
                            y: 5659,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 7}).toJSDate(),
                            y: 5575,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 10}).toJSDate(),
                            y: 5474,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 13}).toJSDate(),
                            y: 5427,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 16}).toJSDate(),
                            y: 5865,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 19}).toJSDate(),
                            y: 5700,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 22}).toJSDate(),
                            y: 6052,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 25}).toJSDate(),
                            y: 5760,
                        },
                        {
                            x: now.minus({months: 5}).plus({day: 28}).toJSDate(),
                            y: 5648,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 1}).toJSDate(),
                            y: 5435,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 4}).toJSDate(),
                            y: 5239,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 7}).toJSDate(),
                            y: 5452,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 10}).toJSDate(),
                            y: 5416,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 13}).toJSDate(),
                            y: 5195,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 16}).toJSDate(),
                            y: 5119,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 19}).toJSDate(),
                            y: 4635,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 22}).toJSDate(),
                            y: 4833,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 25}).toJSDate(),
                            y: 4584,
                        },
                        {
                            x: now.minus({months: 4}).plus({day: 28}).toJSDate(),
                            y: 4822,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 1}).toJSDate(),
                            y: 4582,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 4}).toJSDate(),
                            y: 4348,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 7}).toJSDate(),
                            y: 4132,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 10}).toJSDate(),
                            y: 4099,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 13}).toJSDate(),
                            y: 3849,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 16}).toJSDate(),
                            y: 4010,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 19}).toJSDate(),
                            y: 4486,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 22}).toJSDate(),
                            y: 4403,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 25}).toJSDate(),
                            y: 4141,
                        },
                        {
                            x: now.minus({months: 3}).plus({day: 28}).toJSDate(),
                            y: 3780,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 1}).toJSDate(),
                            y: 3524,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 4}).toJSDate(),
                            y: 3212,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 7}).toJSDate(),
                            y: 3568,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 10}).toJSDate(),
                            y: 3800,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 13}).toJSDate(),
                            y: 3796,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 16}).toJSDate(),
                            y: 3870,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 19}).toJSDate(),
                            y: 3745,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 22}).toJSDate(),
                            y: 3751,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 25}).toJSDate(),
                            y: 3310,
                        },
                        {
                            x: now.minus({months: 2}).plus({day: 28}).toJSDate(),
                            y: 3509,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 1}).toJSDate(),
                            y: 3187,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 4}).toJSDate(),
                            y: 2918,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 7}).toJSDate(),
                            y: 3191,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 10}).toJSDate(),
                            y: 3437,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 13}).toJSDate(),
                            y: 3291,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 16}).toJSDate(),
                            y: 3317,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 19}).toJSDate(),
                            y: 3716,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 22}).toJSDate(),
                            y: 3260,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 25}).toJSDate(),
                            y: 3694,
                        },
                        {
                            x: now.minus({months: 1}).plus({day: 28}).toJSDate(),
                            y: 3598,
                        },
                    ],
                },
            ],
            'last-year': [
                {
                    name: 'Activities',
                    data: [
                        {
                            x: now.minus({months: 24}).plus({day: 1}).toJSDate(),
                            y: 2021,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 4}).toJSDate(),
                            y: 1749,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 7}).toJSDate(),
                            y: 1654,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 10}).toJSDate(),
                            y: 1900,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 13}).toJSDate(),
                            y: 1647,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 16}).toJSDate(),
                            y: 1315,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 19}).toJSDate(),
                            y: 1807,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 22}).toJSDate(),
                            y: 1793,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 25}).toJSDate(),
                            y: 1892,
                        },
                        {
                            x: now.minus({months: 24}).plus({day: 28}).toJSDate(),
                            y: 1846,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 1}).toJSDate(),
                            y: 1804,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 4}).toJSDate(),
                            y: 1778,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 7}).toJSDate(),
                            y: 2015,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 10}).toJSDate(),
                            y: 1892,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 13}).toJSDate(),
                            y: 1708,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 16}).toJSDate(),
                            y: 1711,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 19}).toJSDate(),
                            y: 1570,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 22}).toJSDate(),
                            y: 1507,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 25}).toJSDate(),
                            y: 1451,
                        },
                        {
                            x: now.minus({months: 23}).plus({day: 28}).toJSDate(),
                            y: 1522,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 1}).toJSDate(),
                            y: 1977,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 4}).toJSDate(),
                            y: 2367,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 7}).toJSDate(),
                            y: 2798,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 10}).toJSDate(),
                            y: 3080,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 13}).toJSDate(),
                            y: 2856,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 16}).toJSDate(),
                            y: 2745,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 19}).toJSDate(),
                            y: 2750,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 22}).toJSDate(),
                            y: 2728,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 25}).toJSDate(),
                            y: 2436,
                        },
                        {
                            x: now.minus({months: 22}).plus({day: 28}).toJSDate(),
                            y: 2289,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 1}).toJSDate(),
                            y: 2804,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 4}).toJSDate(),
                            y: 2777,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 7}).toJSDate(),
                            y: 3024,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 10}).toJSDate(),
                            y: 2657,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 13}).toJSDate(),
                            y: 2218,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 16}).toJSDate(),
                            y: 1964,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 19}).toJSDate(),
                            y: 1674,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 22}).toJSDate(),
                            y: 1721,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 25}).toJSDate(),
                            y: 2005,
                        },
                        {
                            x: now.minus({months: 21}).plus({day: 28}).toJSDate(),
                            y: 1613,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 1}).toJSDate(),
                            y: 1071,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 4}).toJSDate(),
                            y: 1079,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 7}).toJSDate(),
                            y: 1133,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 10}).toJSDate(),
                            y: 1536,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 13}).toJSDate(),
                            y: 2016,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 16}).toJSDate(),
                            y: 2256,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 19}).toJSDate(),
                            y: 1934,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 22}).toJSDate(),
                            y: 1832,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 25}).toJSDate(),
                            y: 2075,
                        },
                        {
                            x: now.minus({months: 20}).plus({day: 28}).toJSDate(),
                            y: 1709,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 1}).toJSDate(),
                            y: 1831,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 4}).toJSDate(),
                            y: 1434,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 7}).toJSDate(),
                            y: 1293,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 10}).toJSDate(),
                            y: 1064,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 13}).toJSDate(),
                            y: 1080,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 16}).toJSDate(),
                            y: 1032,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 19}).toJSDate(),
                            y: 1280,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 22}).toJSDate(),
                            y: 1344,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 25}).toJSDate(),
                            y: 1835,
                        },
                        {
                            x: now.minus({months: 19}).plus({day: 28}).toJSDate(),
                            y: 2287,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 1}).toJSDate(),
                            y: 2692,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 4}).toJSDate(),
                            y: 2250,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 7}).toJSDate(),
                            y: 1814,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 10}).toJSDate(),
                            y: 1906,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 13}).toJSDate(),
                            y: 1973,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 16}).toJSDate(),
                            y: 1882,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 19}).toJSDate(),
                            y: 2333,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 22}).toJSDate(),
                            y: 2048,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 25}).toJSDate(),
                            y: 2547,
                        },
                        {
                            x: now.minus({months: 18}).plus({day: 28}).toJSDate(),
                            y: 2884,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 1}).toJSDate(),
                            y: 2771,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 4}).toJSDate(),
                            y: 2522,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 7}).toJSDate(),
                            y: 2543,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 10}).toJSDate(),
                            y: 2413,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 13}).toJSDate(),
                            y: 2002,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 16}).toJSDate(),
                            y: 1838,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 19}).toJSDate(),
                            y: 1830,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 22}).toJSDate(),
                            y: 1872,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 25}).toJSDate(),
                            y: 2246,
                        },
                        {
                            x: now.minus({months: 17}).plus({day: 28}).toJSDate(),
                            y: 2171,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 1}).toJSDate(),
                            y: 2988,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 4}).toJSDate(),
                            y: 2694,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 7}).toJSDate(),
                            y: 2806,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 10}).toJSDate(),
                            y: 3040,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 13}).toJSDate(),
                            y: 2898,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 16}).toJSDate(),
                            y: 3013,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 19}).toJSDate(),
                            y: 2760,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 22}).toJSDate(),
                            y: 3021,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 25}).toJSDate(),
                            y: 2688,
                        },
                        {
                            x: now.minus({months: 16}).plus({day: 28}).toJSDate(),
                            y: 2572,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 1}).toJSDate(),
                            y: 2789,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 4}).toJSDate(),
                            y: 3069,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 7}).toJSDate(),
                            y: 3142,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 10}).toJSDate(),
                            y: 3614,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 13}).toJSDate(),
                            y: 3202,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 16}).toJSDate(),
                            y: 2730,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 19}).toJSDate(),
                            y: 2951,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 22}).toJSDate(),
                            y: 3267,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 25}).toJSDate(),
                            y: 2882,
                        },
                        {
                            x: now.minus({months: 15}).plus({day: 28}).toJSDate(),
                            y: 2885,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 1}).toJSDate(),
                            y: 2915,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 4}).toJSDate(),
                            y: 2790,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 7}).toJSDate(),
                            y: 3071,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 10}).toJSDate(),
                            y: 2802,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 13}).toJSDate(),
                            y: 2382,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 16}).toJSDate(),
                            y: 1883,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 19}).toJSDate(),
                            y: 1448,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 22}).toJSDate(),
                            y: 1176,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 25}).toJSDate(),
                            y: 1275,
                        },
                        {
                            x: now.minus({months: 14}).plus({day: 28}).toJSDate(),
                            y: 1136,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 1}).toJSDate(),
                            y: 1160,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 4}).toJSDate(),
                            y: 1524,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 7}).toJSDate(),
                            y: 1305,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 10}).toJSDate(),
                            y: 1725,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 13}).toJSDate(),
                            y: 1850,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 16}).toJSDate(),
                            y: 2304,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 19}).toJSDate(),
                            y: 2187,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 22}).toJSDate(),
                            y: 2597,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 25}).toJSDate(),
                            y: 2246,
                        },
                        {
                            x: now.minus({months: 13}).plus({day: 28}).toJSDate(),
                            y: 1767,
                        },
                    ],
                },
            ],
        },
    },
    conversions        : {
        amount: 4123,
        labels: [
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Real estate',
                data: [4412, 4345, 4541, 4677, 4322, 4123],
            },
        ],
    },
    impressions        : {
        amount: 46085,
        labels: [
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Cash and Cash Equivalents',
                data: [11577, 11441, 11544, 11523],
            },
        ],
    },
    visits             : {
        amount: 62083,
        labels: [
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Corporate shares',
                data: [15521, 15519, 15522, 15521],
            },
        ],
    },
    visitorsVsPageViews: {
        overallScore  : 472,
        averageRatio  : 45,
        predictedRatio: 55,
        series        : [
            {
                name: 'Page Views',
                data: [
                    {
                        x: now.minus({days: 65}).toJSDate(),
                        y: 4769,
                    },
                    {
                        x: now.minus({days: 64}).toJSDate(),
                        y: 4901,
                    },
                    {
                        x: now.minus({days: 63}).toJSDate(),
                        y: 4640,
                    },
                    {
                        x: now.minus({days: 62}).toJSDate(),
                        y: 5128,
                    },
                    {
                        x: now.minus({days: 61}).toJSDate(),
                        y: 5015,
                    },
                    {
                        x: now.minus({days: 60}).toJSDate(),
                        y: 5360,
                    },
                    {
                        x: now.minus({days: 59}).toJSDate(),
                        y: 5608,
                    },
                    {
                        x: now.minus({days: 58}).toJSDate(),
                        y: 5272,
                    },
                    {
                        x: now.minus({days: 57}).toJSDate(),
                        y: 5660,
                    },
                    {
                        x: now.minus({days: 56}).toJSDate(),
                        y: 6026,
                    },
                    {
                        x: now.minus({days: 55}).toJSDate(),
                        y: 5836,
                    },
                    {
                        x: now.minus({days: 54}).toJSDate(),
                        y: 5659,
                    },
                    {
                        x: now.minus({days: 53}).toJSDate(),
                        y: 5575,
                    },
                    {
                        x: now.minus({days: 52}).toJSDate(),
                        y: 5474,
                    },
                    {
                        x: now.minus({days: 51}).toJSDate(),
                        y: 5427,
                    },
                    {
                        x: now.minus({days: 50}).toJSDate(),
                        y: 5865,
                    },
                    {
                        x: now.minus({days: 49}).toJSDate(),
                        y: 5700,
                    },
                    {
                        x: now.minus({days: 48}).toJSDate(),
                        y: 6052,
                    },
                    {
                        x: now.minus({days: 47}).toJSDate(),
                        y: 5760,
                    },
                    {
                        x: now.minus({days: 46}).toJSDate(),
                        y: 5648,
                    },
                    {
                        x: now.minus({days: 45}).toJSDate(),
                        y: 5510,
                    },
                    {
                        x: now.minus({days: 44}).toJSDate(),
                        y: 5435,
                    },
                    {
                        x: now.minus({days: 43}).toJSDate(),
                        y: 5239,
                    },
                    {
                        x: now.minus({days: 42}).toJSDate(),
                        y: 5452,
                    },
                    {
                        x: now.minus({days: 41}).toJSDate(),
                        y: 5416,
                    },
                    {
                        x: now.minus({days: 40}).toJSDate(),
                        y: 5195,
                    },
                    {
                        x: now.minus({days: 39}).toJSDate(),
                        y: 5119,
                    },
                    {
                        x: now.minus({days: 38}).toJSDate(),
                        y: 4635,
                    },
                    {
                        x: now.minus({days: 37}).toJSDate(),
                        y: 4833,
                    },
                    {
                        x: now.minus({days: 36}).toJSDate(),
                        y: 4584,
                    },
                    {
                        x: now.minus({days: 35}).toJSDate(),
                        y: 4822,
                    },
                    {
                        x: now.minus({days: 34}).toJSDate(),
                        y: 4330,
                    },
                    {
                        x: now.minus({days: 33}).toJSDate(),
                        y: 4582,
                    },
                    {
                        x: now.minus({days: 32}).toJSDate(),
                        y: 4348,
                    },
                    {
                        x: now.minus({days: 31}).toJSDate(),
                        y: 4132,
                    },
                    {
                        x: now.minus({days: 30}).toJSDate(),
                        y: 4099,
                    },
                    {
                        x: now.minus({days: 29}).toJSDate(),
                        y: 3849,
                    },
                    {
                        x: now.minus({days: 28}).toJSDate(),
                        y: 4010,
                    },
                    {
                        x: now.minus({days: 27}).toJSDate(),
                        y: 4486,
                    },
                    {
                        x: now.minus({days: 26}).toJSDate(),
                        y: 4403,
                    },
                    {
                        x: now.minus({days: 25}).toJSDate(),
                        y: 4141,
                    },
                    {
                        x: now.minus({days: 24}).toJSDate(),
                        y: 3780,
                    },
                    {
                        x: now.minus({days: 23}).toJSDate(),
                        y: 3929,
                    },
                    {
                        x: now.minus({days: 22}).toJSDate(),
                        y: 3524,
                    },
                    {
                        x: now.minus({days: 21}).toJSDate(),
                        y: 3212,
                    },
                    {
                        x: now.minus({days: 20}).toJSDate(),
                        y: 3568,
                    },
                    {
                        x: now.minus({days: 19}).toJSDate(),
                        y: 3800,
                    },
                    {
                        x: now.minus({days: 18}).toJSDate(),
                        y: 3796,
                    },
                    {
                        x: now.minus({days: 17}).toJSDate(),
                        y: 3870,
                    },
                    {
                        x: now.minus({days: 16}).toJSDate(),
                        y: 3745,
                    },
                    {
                        x: now.minus({days: 15}).toJSDate(),
                        y: 3751,
                    },
                    {
                        x: now.minus({days: 14}).toJSDate(),
                        y: 3310,
                    },
                    {
                        x: now.minus({days: 13}).toJSDate(),
                        y: 3509,
                    },
                    {
                        x: now.minus({days: 12}).toJSDate(),
                        y: 3311,
                    },
                    {
                        x: now.minus({days: 11}).toJSDate(),
                        y: 3187,
                    },
                    {
                        x: now.minus({days: 10}).toJSDate(),
                        y: 2918,
                    },
                    {
                        x: now.minus({days: 9}).toJSDate(),
                        y: 3191,
                    },
                    {
                        x: now.minus({days: 8}).toJSDate(),
                        y: 3437,
                    },
                    {
                        x: now.minus({days: 7}).toJSDate(),
                        y: 3291,
                    },
                    {
                        x: now.minus({days: 6}).toJSDate(),
                        y: 3317,
                    },
                    {
                        x: now.minus({days: 5}).toJSDate(),
                        y: 3716,
                    },
                    {
                        x: now.minus({days: 4}).toJSDate(),
                        y: 3260,
                    },
                    {
                        x: now.minus({days: 3}).toJSDate(),
                        y: 3694,
                    },
                    {
                        x: now.minus({days: 2}).toJSDate(),
                        y: 3598,
                    },
                    {
                        x: now.minus({days: 1}).toJSDate(),
                        y: 3812,
                    },
                ],
            },
            {
                name: 'Visitors',
                data: [
                    {
                        x: now.minus({days: 65}).toJSDate(),
                        y: 1654,
                    },
                    {
                        x: now.minus({days: 64}).toJSDate(),
                        y: 1900,
                    },
                    {
                        x: now.minus({days: 63}).toJSDate(),
                        y: 1647,
                    },
                    {
                        x: now.minus({days: 62}).toJSDate(),
                        y: 1315,
                    },
                    {
                        x: now.minus({days: 61}).toJSDate(),
                        y: 1807,
                    },
                    {
                        x: now.minus({days: 60}).toJSDate(),
                        y: 1793,
                    },
                    {
                        x: now.minus({days: 59}).toJSDate(),
                        y: 1892,
                    },
                    {
                        x: now.minus({days: 58}).toJSDate(),
                        y: 1846,
                    },
                    {
                        x: now.minus({days: 57}).toJSDate(),
                        y: 1966,
                    },
                    {
                        x: now.minus({days: 56}).toJSDate(),
                        y: 1804,
                    },
                    {
                        x: now.minus({days: 55}).toJSDate(),
                        y: 1778,
                    },
                    {
                        x: now.minus({days: 54}).toJSDate(),
                        y: 2015,
                    },
                    {
                        x: now.minus({days: 53}).toJSDate(),
                        y: 1892,
                    },
                    {
                        x: now.minus({days: 52}).toJSDate(),
                        y: 1708,
                    },
                    {
                        x: now.minus({days: 51}).toJSDate(),
                        y: 1711,
                    },
                    {
                        x: now.minus({days: 50}).toJSDate(),
                        y: 1570,
                    },
                    {
                        x: now.minus({days: 49}).toJSDate(),
                        y: 1507,
                    },
                    {
                        x: now.minus({days: 48}).toJSDate(),
                        y: 1451,
                    },
                    {
                        x: now.minus({days: 47}).toJSDate(),
                        y: 1522,
                    },
                    {
                        x: now.minus({days: 46}).toJSDate(),
                        y: 1801,
                    },
                    {
                        x: now.minus({days: 45}).toJSDate(),
                        y: 1977,
                    },
                    {
                        x: now.minus({days: 44}).toJSDate(),
                        y: 2367,
                    },
                    {
                        x: now.minus({days: 43}).toJSDate(),
                        y: 2798,
                    },
                    {
                        x: now.minus({days: 42}).toJSDate(),
                        y: 3080,
                    },
                    {
                        x: now.minus({days: 41}).toJSDate(),
                        y: 2856,
                    },
                    {
                        x: now.minus({days: 40}).toJSDate(),
                        y: 2745,
                    },
                    {
                        x: now.minus({days: 39}).toJSDate(),
                        y: 2750,
                    },
                    {
                        x: now.minus({days: 38}).toJSDate(),
                        y: 2728,
                    },
                    {
                        x: now.minus({days: 37}).toJSDate(),
                        y: 2436,
                    },
                    {
                        x: now.minus({days: 36}).toJSDate(),
                        y: 2289,
                    },
                    {
                        x: now.minus({days: 35}).toJSDate(),
                        y: 2657,
                    },
                    {
                        x: now.minus({days: 34}).toJSDate(),
                        y: 2804,
                    },
                    {
                        x: now.minus({days: 33}).toJSDate(),
                        y: 2777,
                    },
                    {
                        x: now.minus({days: 32}).toJSDate(),
                        y: 3024,
                    },
                    {
                        x: now.minus({days: 31}).toJSDate(),
                        y: 2657,
                    },
                    {
                        x: now.minus({days: 30}).toJSDate(),
                        y: 2218,
                    },
                    {
                        x: now.minus({days: 29}).toJSDate(),
                        y: 1964,
                    },
                    {
                        x: now.minus({days: 28}).toJSDate(),
                        y: 1674,
                    },
                    {
                        x: now.minus({days: 27}).toJSDate(),
                        y: 1721,
                    },
                    {
                        x: now.minus({days: 26}).toJSDate(),
                        y: 2005,
                    },
                    {
                        x: now.minus({days: 25}).toJSDate(),
                        y: 1613,
                    },
                    {
                        x: now.minus({days: 24}).toJSDate(),
                        y: 1295,
                    },
                    {
                        x: now.minus({days: 23}).toJSDate(),
                        y: 1071,
                    },
                    {
                        x: now.minus({days: 22}).toJSDate(),
                        y: 799,
                    },
                    {
                        x: now.minus({days: 21}).toJSDate(),
                        y: 1133,
                    },
                    {
                        x: now.minus({days: 20}).toJSDate(),
                        y: 1536,
                    },
                    {
                        x: now.minus({days: 19}).toJSDate(),
                        y: 2016,
                    },
                    {
                        x: now.minus({days: 18}).toJSDate(),
                        y: 2256,
                    },
                    {
                        x: now.minus({days: 17}).toJSDate(),
                        y: 1934,
                    },
                    {
                        x: now.minus({days: 16}).toJSDate(),
                        y: 1832,
                    },
                    {
                        x: now.minus({days: 15}).toJSDate(),
                        y: 2075,
                    },
                    {
                        x: now.minus({days: 14}).toJSDate(),
                        y: 1709,
                    },
                    {
                        x: now.minus({days: 13}).toJSDate(),
                        y: 1932,
                    },
                    {
                        x: now.minus({days: 12}).toJSDate(),
                        y: 1831,
                    },
                    {
                        x: now.minus({days: 11}).toJSDate(),
                        y: 1434,
                    },
                    {
                        x: now.minus({days: 10}).toJSDate(),
                        y: 993,
                    },
                    {
                        x: now.minus({days: 9}).toJSDate(),
                        y: 1064,
                    },
                    {
                        x: now.minus({days: 8}).toJSDate(),
                        y: 618,
                    },
                    {
                        x: now.minus({days: 7}).toJSDate(),
                        y: 1032,
                    },
                    {
                        x: now.minus({days: 6}).toJSDate(),
                        y: 1280,
                    },
                    {
                        x: now.minus({days: 5}).toJSDate(),
                        y: 1344,
                    },
                    {
                        x: now.minus({days: 4}).toJSDate(),
                        y: 1835,
                    },
                    {
                        x: now.minus({days: 3}).toJSDate(),
                        y: 2287,
                    },
                    {
                        x: now.minus({days: 2}).toJSDate(),
                        y: 2226,
                    },
                    {
                        x: now.minus({days: 1}).toJSDate(),
                        y: 2692,
                    },
                ],
            },
        ],
    },
    newVsReturning     : {
        uniqueVisitors: 46085,
        series        : [50, 20 ,30],
        labels        : [
            'Current Assets',
            'Long-term Assets',
            'tangable',
        ],
    },
    gender             : {
        uniqueVisitors: 46085,
        series        : [55, 45],
        labels        : [
            'Consumed',
            'Remaining',
        ],
    },
    age                : {
        uniqueVisitors: 46085,
        series        : [35, 65],
        labels        : [
            'Paid',
            'Remaining',
        ],
    },
    language           : {
        uniqueVisitors: 46085,
        series        : [25, 75],
        labels        : [
            'English',
            'Other',
        ],
    },
    teamMembers       : [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/avatars/female-10.jpg',
            name  : 'Nadia Mcknight',
            email : 'nadiamcknight@mail.com',
            phone : '+1-943-511-2203',
            title : 'Project Director',
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/avatars/male-19.jpg',
            name  : 'Best Blackburn',
            email : 'blackburn.best@beadzza.me',
            phone : '+1-814-498-3701',
            title : 'Senior Developer',
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/avatars/male-14.jpg',
            name  : 'Duncan Carver',
            email : 'duncancarver@mail.info',
            phone : '+1-968-547-2111',
            title : 'Senior Developer',
        },
        {
            id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
            avatar: 'assets/images/avatars/male-01.jpg',
            name  : 'Martin Richards',
            email : 'martinrichards@mail.biz',
            phone : '+1-902-500-2668',
            title : 'Junior Developer',
        },
        {
            id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
            avatar: 'assets/images/avatars/female-20.jpg',
            name  : 'Candice Munoz',
            email : 'candicemunoz@mail.co.uk',
            phone : '+1-838-562-2769',
            title : 'Lead Designer',
        },
        {
            id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
            avatar: 'assets/images/avatars/female-01.jpg',
            name  : 'Vickie Mosley',
            email : 'vickiemosley@mail.net',
            phone : '+1-939-555-3054',
            title : 'Designer',
        },
        {
            id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
            avatar: 'assets/images/avatars/female-02.jpg',
            name  : 'Tina Harris',
            email : 'tinaharris@mail.ca',
            phone : '+1-933-464-2431',
            title : 'Designer',
        },
        {
            id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
            avatar: 'assets/images/avatars/male-02.jpg',
            name  : 'Holt Manning',
            email : 'holtmanning@mail.org',
            phone : '+1-822-531-2600',
            title : 'Marketing Manager',
        },
        {
            id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
            avatar: 'assets/images/avatars/female-03.jpg',
            name  : 'Misty Ramsey',
            email : 'mistyramsey@mail.us',
            phone : '+1-990-457-2106',
            title : 'Consultant',
        },
    ],
};
