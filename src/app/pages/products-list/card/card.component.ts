import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product!: Product;
    @Output() buyProduct = new EventEmitter<string>();

    buy(event: MouseEvent) {
        event.stopPropagation();
        this.buyProduct.emit(this.product._id);
    }
}
