import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | undefined;
    @Output() addProduct = new EventEmitter<string>();

    addToCart(): void {
        this.addProduct.emit(this.product?._id);
    }
}
