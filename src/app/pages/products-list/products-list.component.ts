import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {getNextProducts} from './get-next-chunk';

const chunkSize = 4;

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    products: Product[] | null = null;

    constructor() {
        setTimeout(() => {
            this.products = getNextProducts(chunkSize);

            this.changeDetectorRef.markForCheck();
        }, 3000);
    }

    trackByProductId(_index: number, item: Product) {
        return item._id;
    }

    loadNextProducts() {
        if (!this.products) {
            return;
        }

        const lastProductIndex = this.products.length - 1;
        const lastProductId = this.products[lastProductIndex]._id;
        const nextChunk = getNextProducts(chunkSize, lastProductId);

        this.products = [...this.products, ...nextChunk];
    }
}
