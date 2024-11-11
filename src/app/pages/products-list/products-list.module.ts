import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {ScrollWithLoadingModule} from '../../shared/scroll-with-loading/scroll-with-loading.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {ProductsListRoutingModule} from './products-list-routing.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CommonModule,
        CardModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        ScrollWithLoadingModule,
        FilterByPropertyModule,
        ProductsListRoutingModule,
    ],
})
export class ProductsListModule {}
