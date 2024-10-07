import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ProductsListComponent} from './products-list.component';
import {ProductCardComponent} from './card/card.component';

@NgModule({
    declarations: [ProductsListComponent, ProductCardComponent],
    exports: [ProductsListComponent, ProductCardComponent],
    imports: [MatCardModule, MatButtonModule],
})
export class ProductsListModule {}
