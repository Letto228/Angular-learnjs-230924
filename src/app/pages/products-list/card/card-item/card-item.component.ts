import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../../shared/products/product.interface';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
    @Input() product: Product | undefined;

    @Output() readonly buyButtonClick = new EventEmitter<string>();

    notifyParent(event: MouseEvent): void {
        event.stopPropagation();

        if (this.product) {
            this.buyButtonClick.emit(this.product._id);
        }
    }

    get imageUrl(): string {
        return this.product?.images[0].url ?? '';
    }
}
