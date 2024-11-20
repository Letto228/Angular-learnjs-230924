import {PRODUCTS_FEATURE, productsReducer} from './products/products.reducer';
import {ProductsState} from './products/products.state';

export interface State {
    [PRODUCTS_FEATURE]: ProductsState;
}

export const storeReducer = {
    [PRODUCTS_FEATURE]: productsReducer,
};
