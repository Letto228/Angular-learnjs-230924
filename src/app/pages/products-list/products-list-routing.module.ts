import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlMatchResult} from '@angular/router';
import {ProductsListComponent} from './products-list.component';

const routes: Routes = [
    {
        matcher: url => {
            if (url.length >= 2) {
                return null;
            }

            const result: UrlMatchResult = {
                consumed: url,
            };

            if (url.length === 1) {
                result.posParams = {
                    category: url[0],
                };
            }

            return result;
        },
        component: ProductsListComponent,
    },
    {
        path: ':category',
        component: ProductsListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsListRoutingModule {}
