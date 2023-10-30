import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import {
    OnChanges,
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
} from '@angular/core';

import { OrgChart } from 'd3-org-chart';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FamilyTreeService } from '../../family-tree.service';

@Component({
    selector: 'family-tree',
    standalone: true,
    imports: [
        MatButtonModule,
        RouterLink,
        MatIconModule,
        NgIf,
        MatFormFieldModule,
        NgFor,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatMenuModule,
        NgClass,
        MatTooltipModule,
        MatInputModule,
    ],
    templateUrl: './family-tree.component.html',
    styleUrls: ['./family-tree.component.scss'],
})
export class FamilyTreeComponent implements OnInit, OnChanges {
    @ViewChild('chartContainer') chartContainer: ElementRef;
    data: any[];
    chart;

    constructor(
        private _matDialog: MatDialog,
        private _familyTreeServeice: FamilyTreeService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.data = data;
    }

    ngAfterViewInit() {
        if (!this.chart) {
            this.chart = new OrgChart();
        }
        this.updateChart();
    }

    ngOnChanges() {
        this.updateChart();
    }

    updateChart() {
        if (!this.data) {
            return;
        }
        if (!this.chart) {
            return;
        }
        this.chart
            .container(this.chartContainer.nativeElement)
            .pagingStep((d) => 5)
            .minPagingVisibleNodes((d) => 3)
            .nodeContent(function (d, i, arr, state) {
                const color = '#FFFFFF';
                const imageDiffVert = 25 + 2;
                return `
                <div style='width:${
                    d.width
                }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                        <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                            <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${
                                d.data.id
                            }</div>
                            <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
                            <div style="margin-top:${
                                -imageDiffVert - 20
                            }px;">   <img src=" ${d.data.image}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                            <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${
                                d.data.name
                            } </div>
                            <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
                                d.data.position
                            } </div>

                        </div>
                    </div>
                            `;
            })
            .data(this.data)
            .nodeHeight((d) => 85 + 25)
            .nodeWidth((d) => {
                return 220 + 2;
            })
            .childrenMargin((d) => 50)
            .onNodeClick((d) => this.createRelationship(d))

            .compactMarginBetween((d) => 35)
            .compactMarginPair((d) => 30)
            .neighbourMargin((a, b) => 20);

        // .initialZoom(0)
        // .onNodeClick((d) => this.createRelationship(d));
        this.chart.layoutBindings(
            (() => {
                const layouts = this.chart.layoutBindings();
                layouts.top.linkY = (node) => node.y + 0;
                layouts.top.linkCompactYStart = (node) =>
                    node.y + node.height / 2 + 15;
                return layouts;
            })()
        );

        this.chart.render();
    }

    // Add a relationship
    createRelationship(data: any): void {
        console.log('data', data);
        const type = 'relationship';
        // Create the task
        this._familyTreeServeice
            .createRelationship(type)
            .subscribe((newFamily) => {
                // Go to the new task
                this._router.navigate(['./', newFamily.id], {
                    relativeTo: this._activatedRoute,
                });

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }
    filterChart(e) {
        // Get input value
        const value = e.srcElement.value;

        // Clear previous higlighting
        this.chart.clearHighlighting();

        // Get chart nodes
        const data = this.chart.data();

        // Mark all previously expanded nodes for collapse
        data.forEach((d) => (d._expanded = false));

        // Loop over data and check if input value matches any name
        data.forEach((d) => {
            if (
                value != '' &&
                d.name.toLowerCase().includes(value.toLowerCase())
            ) {
                // If matches, mark node as highlighted
                d._highlighted = true;
                d._expanded = true;
            }
        });

        // Update data and rerender graph
        this.chart.data(data).render().fit();

        console.log('filtering chart', e.srcElement.value);
    }
}

const data = [
    {
        id: '100',
        parentId: '',
        name: 'Steven',
        lastName: 'King',
        position: 'Chief Operating Officer',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait12.png',
        email: 'SKING',
        phone_number: '515.123.4567',
        hire_date: '2003-07-16T19:00:00.000Z',
        job_id: 'AD_PRES',
        salary: '24000',
        commission_pct: '',
        department_id: '90',
        job_min_salary: '20080',
        location_state: 'Washington',
        job_max_salary: '40000',
        department_name: 'Executive',
        department_location_id: '1700',
        department_location_street_address: '2004 Charade Rd',
        department_location_postal_code: '98199',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '101',
        parentId: '100',
        name: 'Neena',
        lastName: 'Kochhar',
        position: 'Administration Vice President',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait85.png',
        email: 'NKOCHHAR',
        phone_number: '515.123.4568',
        hire_date: '2005-10-20T20:00:00.000Z',
        job_id: 'AD_VP',
        salary: '17000',
        commission_pct: '',
        department_id: '90',
        job_min_salary: '15000',
        location_state: 'Washington',
        job_max_salary: '30000',
        department_name: 'Executive',
        department_location_id: '1700',
        department_location_street_address: '2004 Charade Rd',
        department_location_postal_code: '98199',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '102',
        parentId: '100',
        name: 'Lex',
        lastName: 'De Haan',
        position: 'Administration Vice President',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait16.png',
        email: 'LDEHAAN',
        phone_number: '515.123.4569',
        hire_date: '2001-02-12T20:00:00.000Z',
        job_id: 'AD_VP',
        salary: '17000',
        commission_pct: '',
        department_id: '90',
        job_min_salary: '15000',
        location_state: 'Washington',
        job_max_salary: '30000',
        department_name: 'Executive',
        department_location_id: '1700',
        department_location_street_address: '2004 Charade Rd',
        department_location_postal_code: '98199',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '103',
        parentId: '102',
        name: 'Alexander',
        lastName: 'Hunold',
        position: 'Programmer',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait17.png',
        email: 'AHUNOLD',
        phone_number: '590.423.4567',
        hire_date: '2006-02-02T20:00:00.000Z',
        job_id: 'IT_PROG',
        salary: '9000',
        commission_pct: '',
        department_id: '60',
        job_min_salary: '4000',
        location_state: 'Texas',
        job_max_salary: '10000',
        department_name: 'IT',
        department_location_id: '1400',
        department_location_street_address: '2014 Jabberwocky Rd',
        department_location_postal_code: '26192',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '104',
        parentId: '103',
        name: 'Bruce',
        lastName: 'Ernst',
        position: 'Programmer',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait18.png',
        email: 'BERNST',
        phone_number: '590.423.4568',
        hire_date: '2007-06-20T20:00:00.000Z',
        job_id: 'IT_PROG',
        salary: '6000',
        commission_pct: '',
        department_id: '60',
        job_min_salary: '4000',
        location_state: 'Texas',
        job_max_salary: '10000',
        department_name: 'IT',
        department_location_id: '1400',
        department_location_street_address: '2014 Jabberwocky Rd',
        department_location_postal_code: '26192',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '105',
        parentId: '103',
        name: 'David',
        lastName: 'Austin',
        position: 'Programmer',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait19.png',
        email: 'DAUSTIN',
        phone_number: '590.423.4569',
        hire_date: '2005-07-24T20:00:00.000Z',
        job_id: 'IT_PROG',
        salary: '4800',
        commission_pct: '',
        department_id: '60',
        job_min_salary: '4000',
        location_state: 'Texas',
        job_max_salary: '10000',
        department_name: 'IT',
        department_location_id: '1400',
        department_location_street_address: '2014 Jabberwocky Rd',
        department_location_postal_code: '26192',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '106',
        parentId: '103',
        name: 'Valli',
        lastName: 'Pataballa',
        position: 'Programmer',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait86.png',
        email: 'VPATABAL',
        phone_number: '590.423.4560',
        hire_date: '2006-03-04T20:00:00.000Z',
        job_id: 'IT_PROG',
        salary: '4800',
        commission_pct: '',
        department_id: '60',
        job_min_salary: '4000',
        location_state: 'Texas',
        job_max_salary: '10000',
        department_name: 'IT',
        department_location_id: '1400',
        department_location_street_address: '2014 Jabberwocky Rd',
        department_location_postal_code: '26192',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '107',
        parentId: '103',
        name: 'Diana',
        lastName: 'Lorentz',
        position: 'Programmer',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait89.png',
        email: 'DLORENTZ',
        phone_number: '590.423.5567',
        hire_date: '2007-03-06T20:00:00.000Z',
        job_id: 'IT_PROG',
        salary: '4200',
        commission_pct: '',
        department_id: '60',
        job_min_salary: '4000',
        location_state: 'Texas',
        job_max_salary: '10000',
        department_name: 'IT',
        department_location_id: '1400',
        department_location_street_address: '2014 Jabberwocky Rd',
        department_location_postal_code: '26192',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
    {
        id: '108',
        parentId: '101',
        name: 'Nancy',
        lastName: 'Greenberg',
        position: 'Finance Manager',
        image: 'https://bumbeishvili.github.io/avatars/avatars/portrait61.png',
        email: 'NGREENBE',
        phone_number: '515.124.4569',
        hire_date: '2002-09-16T19:00:00.000Z',
        job_id: 'FI_MGR',
        salary: '12008',
        commission_pct: '',
        department_id: '100',
        job_min_salary: '8200',
        location_state: 'Washington',
        job_max_salary: '16000',
        department_name: 'Finance',
        department_location_id: '1700',
        department_location_street_address: '2004 Charade Rd',
        department_location_postal_code: '98199',
        department_location_country_id: 'US',
        department_location_country_name: 'United States of America',
        department_location_country_region_id: '2',
        department_location_country_region_name: 'Americas',
    },
];
