import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PRODUCTS_FEATURE} from './products.reducer';
import {ProductsState} from './products.state';
import {Product} from '../../shared/products/product.interface';

// export const productsFeatureSelector = (state: State): State['products'] => state[PRODUCTS_FEATURE];
export const productsFeatureSelector = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE);

// export const productsSelector = (state: State): State['products']['data'] =>
//     productsFeatureSelector(state).data;
export const productsSelector = createSelector(
    productsFeatureSelector,
    productsState => productsState.data, // extractFn
);
// (state: State) => extractFn(productsFeatureSelector(state))

export const getProductByIdSelector = (productId: Product['_id']) =>
    createSelector(productsSelector, products =>
        products?.find(product => product._id === productId),
    );
