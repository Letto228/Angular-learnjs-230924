import {NgModule} from '@angular/core';
import {NgFor} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CardModule, NgFor],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
