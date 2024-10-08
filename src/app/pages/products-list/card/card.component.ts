import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | undefined;
    @Output() buyProduct = new EventEmitter<Product>();

    addToCart(event: Event) {
        console.info('🛸 Добавлен в корзину: ', this.product?.name);
        event.stopPropagation();
        this.buyProduct.emit(this.product);
    }
}
