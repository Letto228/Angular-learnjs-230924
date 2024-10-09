import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgFor} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardComponent} from './card/card.component';

@NgModule({
    declarations: [ProductsListComponent, CardComponent],
    exports: [ProductsListComponent, CardComponent],
    imports: [MatButtonModule, MatCardModule, NgFor],
})
export class ProductsListModule {}
