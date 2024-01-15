import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature-twenty-seven',
    templateUrl: './feature-twenty-seven.component.html',
    styleUrls: ['./feature-twenty-seven.component.css'],
})
export class FeatureTwentySevenComponent implements OnInit {
    feature_list_one = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Military-grade encryption ',
            subtitle:
                'Advanced encryption technology akin to government agencies, offering complete data confidentiality and defense against unauthorized access .',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Zero-knowledge architecture',
            subtitle: ' We never store your master password or decryption keys. Unmatched privacy control, as even our staff cannot access your data without explicit authorization.',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Multi-factor authentication',
            subtitle:
                'Extra verification steps beyond passwords, such as identity integration or one-time codes. Security by ensuring only authorized users can access your information.',
        },
        {
            id: 4,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Secure cloud infrastructure',
            subtitle:
                'Hosting data on secure, geographically distributed cloud servers. Accessibility and protection against unforeseen events through robust disaster recovery plans.',
        },
        {
            id: 5,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Ongoing Security Assessments',
            subtitle:
                'Continuous evaluation and improvement of security measures to ensure robust protection.',
        },
        {
            id: 6,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Transparent Privacy Policy',
            subtitle:
                ' We are committed to open communication and provide a clear and detailed privacy policy outlining exactly how your data is collected, used, and protected.',
        },
        {
            id: 7,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'GDPR and CCPA compliance',
            subtitle:
                'eWasya adheres to the strictest global data privacy regulations, including GDPR and CCPA, guaranteeing your data is handled with utmost respect and care.',
        },
    ];
    block_styles = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/164.svg',
            title: 'Limited data collection',
            subtitle:
                ' We only collect the essential information needed to support your estate planning needs, minimizing the amount of personal data stored',
        },
        // 1
        {
            id: 2,
            icon: 'assets/images/deski/icon/161.svg',
            title: 'No data sharing',
            subtitle:
                ' We never share your data with third parties without your explicit consent, ensuring your information remains confidential and under your control.',
            delay: '100',
        },
        // 4
        {
            id: 3,
            icon: 'assets/images/deski/icon/163.svg',
            title: 'Transparency and accountability',
            subtitle:
                ' We are committed to open communication and provide you with full control over your data, including the ability to access, edit, or delete your information at any time.',
            delay: '200',
        },
    ];
    block_styles_two = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/163.svg',
            title: 'Easy Customize',
            subtitle:
                'Keep a track on real-time performance while analyzing the success of your mail campaigns.',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/164.svg',
            title: '100+ Template',
            subtitle:
                'Keep a track on real-time performance while analyzing the success of your mail campaigns.',
            delay: '100',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/165.svg',
            title: 'Clean & Unique',
            subtitle:
                'Keep a track on real-time performance while analyzing the success of your mail campaigns.',
            delay: '200',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
