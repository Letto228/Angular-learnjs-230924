import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {MyNgIfModule} from '../../shared/my-ng-if/my-ng-if.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule, MyNgIfModule, MatProgressSpinnerModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
