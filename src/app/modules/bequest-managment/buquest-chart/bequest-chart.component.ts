import { CurrencyPipe, DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { BequestManagementService } from '../bequest-management.service';

@Component({
    selector       : 'BequestChart',
    templateUrl    : './bequest-chart.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [TranslocoModule, MatIconModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgIf, MatTableModule, NgClass, CurrencyPipe ,MatButtonModule, MatTooltipModule, NgFor, DecimalPipe],
})
export class BequeqstChartComponent implements OnInit, OnDestroy
{



    chartNewVsReturning: ApexOptions;

    chartTaskDistribution: ApexOptions = {};

    data: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _bequestService: BequestManagementService,
        private _router: Router,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {


           // Get the data
           this._bequestService.bequests$
           .pipe(takeUntil(this._unsubscribeAll))
           .subscribe((data) =>
           {
               // Store the data
               this.data = data;

               // Prepare the chart data
               this._prepareChartData();
           });

       // Attach SVG fill fixer to all ApexCharts
       window['Apex'] = {
           chart: {
               events: {
                   mounted: (chart: any, options?: any): void =>
                   {
                       this._fixSvgFill(chart.el);
                   },
                   updated: (chart: any, options?: any): void =>
                   {
                       this._fixSvgFill(chart.el);
                   },
               },
           },
       };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

      // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fix the SVG fill references. This fix must be applied to all ApexCharts
     * charts in order to fix 'black color on gradient fills on certain browsers'
     * issue caused by the '<base>' tag.
     *
     * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
     *
     * @param element
     * @private
     */
    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
            .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
            .forEach((el) =>
            {
                const attrVal = el.getAttribute('fill');
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {





        // New vs. returning
        this.chartNewVsReturning = {
            chart      : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false,
                    },
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'radialBar',
                sparkline : {
                    enabled: true,
                },
            },
            colors     : ['#3182CE', '#63B3ED'  ],
            labels     : this.data.newVsReturning.labels,
            plotOptions: {
                radialBar: {
                    dataLabels: {
                      total: {
                        show: true,
                        label: 'TOTAL'
                      }
                    }
                  }
            },
            series     : this.data.newVsReturning.series,
            states     : {
                hover : {
                    filter: {
                        type: 'none',
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                    },
                },
            },
            tooltip    : {
                enabled        : true,
                fillSeriesColor: false,
                theme          : 'dark',
                custom         : ({
                    seriesIndex,
                    w,
                }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                    <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                    <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                                </div>`,
            },
        };
           // Task distribution
           this.chartTaskDistribution = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'polarArea',
                toolbar   : {
                    show: false,
                },
                zoom      : {
                    enabled: false,
                },
            },
            labels     : this.data.taskDistribution.labels,
            legend     : {
                position: 'bottom',
            },
            plotOptions: {
                polarArea: {
                    spokes: {
                        connectorColors: 'var(--fuse-border)',
                    },
                    rings : {
                        strokeColor: 'var(--fuse-border)',
                    },
                },
            },
            series     : this.data.taskDistribution.series,
            states     : {
                hover: {
                    filter: {
                        type : 'darken',
                        value: 0.75,
                    },
                },
            },
            stroke     : {
                width: 2,
            },
            theme      : {
                monochrome: {
                    enabled       : true,
                    color         : '#93C5FD',
                    shadeIntensity: 0.75,
                    shadeTo       : 'dark',
                },
            },
            tooltip    : {
                followCursor: true,
                theme       : 'dark',
            },
            yaxis      : {
                labels: {
                    style: {
                        colors: 'var(--fuse-text-secondary)',
                    },
                },
            },
        };

    }



}
