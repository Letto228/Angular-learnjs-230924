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
// import {FilterModule} from './filter/reactive/filter.module';
import {FilterModule} from './filter/template-driven/filter.module';

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
        FilterModule,
    ],
})
export class ProductsListModule {}
