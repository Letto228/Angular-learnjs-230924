import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {ProductCardComponent} from './card/product-card/product-card.component';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent],
    exports: [ProductsListComponent, ProductCardComponent],
})
export class ProductsListModule {}
