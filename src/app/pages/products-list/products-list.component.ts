import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly products = productsMock;

    onProductAddedToCart(productId: string) {
        /* eslint-disable no-console */
        console.log('Product added to cart', productId);
        /* eslint-enable no-console */
    }
}
