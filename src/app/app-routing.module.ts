import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {questionCanActivateGuard} from './shared/question-guards/question-can-activate.guard';
import {questionCanDeactivateGuard} from './shared/question-guards/question-can-deactivate.guard';
import {questionCanMatchGuard} from './shared/question-guards/question-can-match.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products-list',
    },
    {
        path: 'products-list',
        loadChildren: () =>
            import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
    },
    {
        path: 'product/:id',
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
        canActivate: [questionCanActivateGuard],
        canDeactivate: [questionCanDeactivateGuard],
        canMatch: [questionCanMatchGuard],
    },
    // {
    //     path: 'product/:id',
    //     component: NotFoundComponent,
    // },
    {
        path: '**',
        component: NotFoundComponent,
    },
    // {
    //     path: 'shared-layout',
    //     component: SharedLayoutComponent,
    //     children: [
    //         // {
    //         //     path: 'aadmin',
    //         //     canActivate:
    //         // },
    //         // {
    //         //     path: 'user',
    //         // },
    //         {
    //             path: 'eq',
    //             component: AdminComponent,
    //             canMatch: () => {},
    //         },
    //         {
    //             path: 'eq',
    //             component: UserComponent,
    //         }
    //     ],
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NotFoundModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
