import {inject, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './core-components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './core-components/sidenav/sidenav.module';
import {PopupHostModule} from './core-components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {HttpService, ProductsStoreService, referToken, testToken} from './tokens';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
    ],
    providers: [
        // {
        //     provide: 'user',
        //     useValue: 'Library user',
        // },
        // {
        //     provide: 'user',
        //     useValue: 'Application user',
        // },
        // {
        //     provide: testToken, // token
        //     useValue: 'Test',
        //     // useValue: {name: 'Egor'},
        // },
        {
            provide: testToken,
            useFactory: () => 'Test new',
        },
        // {
        //     provide: HttpService,
        //     useClass: HttpService,
        // },
        // {
        //     provide: ProductsStoreService,
        //     useClass: ProductsStoreService,
        // },
        HttpService,
        ProductsStoreService,
        // {
        //     provide: ProductsStoreService,
        //     useFactory: () => new ProductsStoreService(),
        // },
        // {
        //     provide: referToken,
        //     useExisting: ProductsStoreService,
        // },
        {
            provide: referToken,
            useFactory: () => inject(ProductsStoreService),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
