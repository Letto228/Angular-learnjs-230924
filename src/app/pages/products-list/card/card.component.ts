import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: Product | undefined;

    @Output() productId = new EventEmitter<string>();

    buyProduct(productId: string | undefined): void {
        if (productId) {
            this.productId.emit(productId);
        }
    }
}
