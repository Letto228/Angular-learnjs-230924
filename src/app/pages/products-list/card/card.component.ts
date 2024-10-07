import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() productAdd: EventEmitter<string> = new EventEmitter<string>();

    onAddToCart(): void {
        this.productAdd.emit(this.product?._id);
    }
}
