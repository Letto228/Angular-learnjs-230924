import {map, Observable} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.interface';
import {BASE_URL_TOKEN} from '../base-url/base-url';
import {ProductsDto} from './products.dto';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private readonly baseUrl = inject(BASE_URL_TOKEN);
    private readonly httpClient = inject(HttpClient);

    getProducts$(): Observable<Product[]> {
        // return of(productsMock);
        return (
            this.httpClient
                // .get<ProductsDto>(`${this.baseUrl}/products/suggestion`)
                .get<ProductsDto>(`/products/suggestion`)
                .pipe(map(({data}) => data.items))
        );
    }
}
