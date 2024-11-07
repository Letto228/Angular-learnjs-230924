import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
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

    readonly products$ = this.productsStoreService.products$;

    constructor() {
        this.productsStoreService.loadProducts();
    }

    trackByProductId(_index: number, item: Product) {
        return item._id;
    }

    loadNextProducts() {
        // load next products
    }
}
