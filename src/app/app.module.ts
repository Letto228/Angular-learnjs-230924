import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './core-components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './core-components/sidenav/sidenav.module';
import {PopupHostComponent} from './core-components/popup-host/popup-host.component';

@NgModule({
    declarations: [AppComponent, PopupHostComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        SidenavModule,
        MatListModule,
    ],
    bootstrap: [AppComponent],
    exports: [PopupHostComponent],
})
export class AppModule {}
