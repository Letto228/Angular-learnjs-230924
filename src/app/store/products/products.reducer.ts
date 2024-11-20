import {createReducer, on} from '@ngrx/store';
import {productsInitialState, ProductsState} from './products.state';
import {addProducts} from './products.actions';

export const PRODUCTS_FEATURE = 'products';
export const productsReducer = createReducer(
    productsInitialState,
    on(
        addProducts,
        (state: ProductsState, action): ProductsState => ({
            ...state,
            data: action.products,
        }),
    ),
);
