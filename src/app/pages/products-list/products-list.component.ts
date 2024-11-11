import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
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
    private readonly router = inject(Router);

    readonly products$ = this.productsStoreService.products$;

    constructor() {
        this.productsStoreService.loadProducts();
    }

    navigateToCard() {
        this.router.navigateByUrl('/product/id');
        // this.router.navigate(['/', 'product', 'id']);
    }

    trackByProductId(_index: number, item: Product) {
        return item._id;
    }

    loadNextProducts() {
        // load next products
    }
}
