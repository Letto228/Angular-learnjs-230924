import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product?: Product;
    @Output() addToCart = new EventEmitter<string>();

    add(e: Event) {
        e.stopPropagation();

        if (!this.product) {
            return;
        }

        this.addToCart.emit(this.product._id);
    }
}
