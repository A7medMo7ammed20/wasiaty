import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blog-data/blogs.service';

@Component({
    selector: 'app-solution-management',
    templateUrl: './solution-management.component.html',
    styleUrls: ['./solution-management.component.css'],
})
export class SolutionManagementComponent implements OnInit {
    text_block_data = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/09.svg',
            title: 'Project management',
            subtitle:
                'tempor incididunt ut labor culpa dolore magna aliqua. Ut enim qui minim veniam,',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/10.svg',
            title: 'Customer Support',
            subtitle:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa non officia.',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/11.svg',
            title: 'Marketing',
            subtitle:
                'consectetur adipiscing elit, sed dou eiusmod tempor incididu ut lab et dolore.',
        },
    ];

    text_block_data_two = [
        {
            id: 1,
            icon: 'assets/images/deski/icon/12.svg',
            title: 'Media & Hospital',
            subtitle:
                'Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim',
        },
        {
            id: 2,
            icon: 'assets/images/deski/icon/13.svg',
            title: 'Educational',
            subtitle:
                'Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim',
        },
        {
            id: 3,
            icon: 'assets/images/deski/icon/14.svg',
            title: 'Financial Service',
            subtitle:
                'Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim',
        },
    ];

    blogItems: any;

    constructor(private blogs: BlogsService) {
        this.blogItems = this.blogs.blogData().slice(6, 9);
    }

    ngOnInit(): void {}
}
