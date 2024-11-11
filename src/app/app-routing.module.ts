import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';

// const productsListConfig: Routes = [
//     {
//         path: '',
//         component: ProductsListComponent,
//     },
// ];

// const productConfig: Routes = [
//     {
//         path: '',
//         component: ProductComponent,
//         children: [
//             {
//                 path: '',
//                 pathMatch: 'full',
//                 redirectTo: 'description',
//             },
//             {
//                 path: 'description',
//                 component: DescriptionComponent,
//             },
//             {
//                 path: 'type',
//                 component: TypeComponent,
//             },
//         ],
//     },
// ];

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products-list',
    },
    {
        path: 'products-list',
        // component: ProductsListComponent,
        // children: productsListConfig,
        loadChildren: () =>
            import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
    },
    {
        path: 'product/:id',
        // children: productConfig,
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NotFoundModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * url === http://localhost:4200/product/id/description
 *
 * urlSegments === 'product/id/description'
 *
 * current url segments: ['product', 'id', 'description']
 *
 * search indexes: 0 -> 1 -> 2 -> 3 -> ...
 */

/**
 *            ___________________ undefined ___________________
 *           /                  /           \                  \
 *          /                ['']           ['']                \
 *         /                  /               \                  \
 *       ['']       ['products-list']    ['product', ':id']     ['**']
 *                                     /         |         \
 *                                    /          |          \
 *                                 ['']   ['description']   ['type']
 */
