import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    @Input() product: Product | undefined;
    @Output() buyEmit = new EventEmitter<string>();

    onBuy(): void {
        if (this.product) {
            this.buyEmit.emit(this.product?._id);
            // eslint-disable-next-line no-console
            console.log(`id товара ${this.product?._id}`);
        }
    }
}
