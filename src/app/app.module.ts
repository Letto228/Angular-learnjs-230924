import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './core-components/header/header.module';
import {SidenavModule} from './core-components/sidenav/sidenav.module';
import {PopupHostModule} from './core-components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {BaseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {ErrorInterceptor} from './shared/error/error.interceptor';
import {storeReducer} from './store/reducer';
import {effects} from './store/effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        // ProductsListModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
        HttpClientModule,
        StoreModule.forRoot(storeReducer),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot(effects),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
