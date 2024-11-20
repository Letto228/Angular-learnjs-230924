import {Product} from '../../shared/products/product.interface';

export interface ProductsState {
    data: null | Product[];
}

export const productsInitialState: ProductsState = {
    data: null,
};
