import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('category')),
        tap(categoryId => {
            this.productsStoreService.loadProducts(categoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );

    trackByProductId(_index: number, item: Product) {
        return item._id;
    }

    loadNextProducts() {
        // load next products
    }
}
