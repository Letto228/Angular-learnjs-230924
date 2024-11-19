import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {CardItemModule} from './card/card-item/card-item.module';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CardItemModule],
})
export class ProductsListModule {}
