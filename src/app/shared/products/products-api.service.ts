import {map, Observable} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.interface';
import {ProductsDto} from './products.dto';
import {getParamsFromObject} from '../params/get-params-from-object';
import {SubCategory} from '../categories/sub-category.interface';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private readonly httpClient = inject(HttpClient);

    getProducts$(subCategoryId?: SubCategory['_id'] | null): Observable<Product[]> {
        return this.httpClient
            .get<ProductsDto>(`/products`, {params: getParamsFromObject({subCat: subCategoryId})})
            .pipe(map(({data}) => data.items));
    }

    getProduct$(id: Product['_id']): Observable<Product | undefined> {
        return this.httpClient.get<{data: Product}>(`/products/${id}`).pipe(map(({data}) => data));
    }
}
