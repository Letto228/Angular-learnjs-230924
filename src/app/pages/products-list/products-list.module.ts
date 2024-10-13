import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ProductsListComponent} from './products-list.component';
import {CardComponent} from './card/card.component';

@NgModule({
    imports: [MatCardModule, MatButtonModule],
    declarations: [ProductsListComponent, CardComponent],
    exports: [ProductsListComponent, CardComponent],
})
export class ProductsListModule {}
