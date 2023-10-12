import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { WealthManagementService } from './wealth-management.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-assets-management',
  standalone: true,
  imports: [CommonModule ,RouterOutlet],
  templateUrl: './assets-management.component.html',
  styleUrls: ['./assets-management.component.scss'],

})
export class AssetsManagementComponent {


  data: any;

  private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
    constructor(
      private _wealthManagementService: WealthManagementService,
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
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }





      /**
     * Prepare the chart data from the data
     *
     * @private
     */
      private _prepareChartData(): void
      {
          // Github issues






      }
}
