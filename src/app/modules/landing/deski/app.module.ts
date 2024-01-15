import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskiModule } from './Deski/deski.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, AppRoutingModule, DeskiModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
