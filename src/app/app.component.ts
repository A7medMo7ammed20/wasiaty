import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { AppModule } from './modules/landing/deski/app.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, AppModule],
})
export class AppComponent {
    /**
     * Constructor
     */
    /**
     * this constructor  to  define  animation when  routing
     */
    // constructor(private contexts: ChildrenOutletContexts) {}
    // getRouteAnimationData() {
    //     return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
    //         'animation'
    //     ];
    // }
}
