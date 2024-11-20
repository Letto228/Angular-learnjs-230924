import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {Store} from '@ngrx/store';
import {addProducts, loadProducts} from './products.actions';
import {ProductsApiService} from '../../shared/products/products-api.service';

@Injectable()
export class ProductsEffects {
    private readonly actions$ = inject(Actions);
    private readonly productsApiService = inject(ProductsApiService);
    private readonly store = inject(Store);

    loadProducts$ = createEffect(
        () =>
            this.actions$.pipe(
                // filter(action => action.type === loadProducts.type)
                ofType(loadProducts),
                switchMap(({subCategoryId}) =>
                    this.productsApiService.getProducts$(subCategoryId).pipe(
                        // tap(products => {
                        //     this.store.dispatch(addProducts(products));
                        // }),
                        map(products => addProducts(products)),
                    ),
                ),
            ),
        // {
        //     dispatch: true,
        // },
    );
}
