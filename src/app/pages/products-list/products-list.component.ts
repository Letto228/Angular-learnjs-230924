import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly products: Product[] = productsMock;
    // protected readonly productsMock = productsMock;

    printBoughtItemId(id: string) {
        alert(`Congratulations, you bought: ${id}`);
    }
}
