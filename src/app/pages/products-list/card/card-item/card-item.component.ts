import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../../shared/products/product.interface';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
    @Input() product: Product | undefined;

    @Output() buyButtonClick = new EventEmitter<string>();

    notifyParent(_id: string | undefined) {
        this.buyButtonClick.emit(this.product?._id);
    }
}
