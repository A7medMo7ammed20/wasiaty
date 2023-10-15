/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'AssetDashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/dashboard',
    },

    {
        id: 'AssetsManagment',
        title: 'Wealth Managment',
        type: 'collapsable',
        icon: 'heroicons_outline:square-3-stack-3d',
        link: '/',
        children: [
            {
                id: 'currentAssets',
                title: 'Current Wealth',
                type: 'basic',
                link: '/assets-management/current-assets',
                exactMatch: true,
            },

            {
                id: 'longtermAssets',
                title: 'Long-Term Wealth',
                type: 'collapsable',
                link: '/assets-management/long-term',
                children: [
                    {
                        id: 'tangableAssets',
                        title: 'Tangable Wealth',
                        type: 'basic',
                        link: '/assets-management/long-term/tangible-assets',
                    },
                    {
                        id: 'intangableAssets',
                        title: 'Intangable Wealth',
                        type: 'basic',
                        link: '/assets-management/long-term/intangible-assets',
                    },
                ],
            },
        ],
    },
    {
        id: 'DocumentManagment.FileManager',
        title: 'Doucument Management',
        type: 'basic',
        icon: 'heroicons_outline:folder',
        link: '/document-managment/file-manager',
    },

    {
        id: 'FamilyTree',
        title: 'Family Tree',
        type: 'collapsable',
        icon: 'mat_outline:family_restroom',
        children: [
            {
                id: 'FamilyMembers',
                title: 'Family members',
                type: 'basic',
                link: '/family-tree/family-members',
            },
            {
                id: 'RelationshipsFamily',
                title: 'Relationships Family',
                type: 'basic',
                link: '/family-tree/relationships-family',
            },
        ],
    },
    {
        id: 'BequestManagement',
        title: 'Bequest Management',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/bequest-management',
    },

    {
        id: 'DebtManagement',
        title: 'Debt Management',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/debt-management',
    },

    {
        id: 'WealthEvaluation',
        title: 'Wealth Evaluation',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/wealth-evaluation',
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
            {
                id: 'dashboards.finance',
                title: 'Finance',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: '/dashboards/finance',
            },
            {
                id: 'dashboards.crypto',
                title: 'Crypto',
                type: 'basic',
                icon: 'heroicons_outline:currency-dollar',
                link: '/dashboards/crypto',
            },
        ],
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
