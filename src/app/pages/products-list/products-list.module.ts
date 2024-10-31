import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ProductsListComponent} from './products-list.component';
import {ProductCardComponent} from './card/product-card/product-card.component';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent],
    exports: [ProductsListComponent, ProductCardComponent],
    imports: [MatCardModule, MatButtonModule],
})
export class ProductsListModule {}
