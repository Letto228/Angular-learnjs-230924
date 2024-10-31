import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {MyNgIfModule} from '../../shared/my-ng-if/my-ng-if.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CommonModule,
        CardModule,
        MyNgIfModule,
        MatProgressSpinnerModule,
        PaginationModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
