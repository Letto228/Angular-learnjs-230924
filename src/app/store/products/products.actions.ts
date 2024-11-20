import {createAction} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
    LoadProducts = '[Products] Load products',
    AddProducts = '[Products] Add products',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: Product[]) => ({
    products,
}));

// addProducts([...]) => {type: ProductsActionTypes.AddProducts, ...cb([...])}

export const loadProducts = createAction(
    ProductsActionTypes.LoadProducts,
    (subCategoryId?: string | null) => ({subCategoryId}),
);
