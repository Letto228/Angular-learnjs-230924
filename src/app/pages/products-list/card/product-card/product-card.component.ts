import {Component, inject, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Product} from '../../../../shared/products/product.interface';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
    providers: [MatSnackBar],
})
export class ProductCardComponent {
    @Input() product: Product | null = null;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    private readonly snackBar = inject(MatSnackBar);

    buyProduct(event: Event, productName: string | undefined): void {
        event.stopPropagation();

        this.snackBar.open(
            productName
                ? `"${productName}" добавлен в корзину`
                : 'Ошибка добавления товара в корзину',
            productName ? 'Звучит как сказка!' : 'жестб...',
        );
    }
}
