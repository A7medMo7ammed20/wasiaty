import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AssetsDashboardComponent } from 'app/modules/admin/dashboards/assets-dashboard/assets-dashboard.component';
import { AssetsDashboardService } from 'app/modules/admin/dashboards/assets-dashboard/assets-dashboard.service';

export default [
    {
        path     : '',
        component: AssetsDashboardComponent,
        resolve  : {
            data: () => inject(AssetsDashboardService).getData(),
        },
    },
] as Routes;
