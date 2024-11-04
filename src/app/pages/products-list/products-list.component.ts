import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {getNextProducts} from './get-next-chunk';
import {ProductsStoreService, referToken, testToken} from '../../tokens';

const chunkSize = 4;

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    // ProductsStoreService
    // private readonly httpService = new HttpService();
    // private readonly productsStoreService = new ProductsStoreService(this.httpService, new UserService(this.httpService));

    // provide ProductsStoreService as singleton
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly test = inject(testToken);
    // private readonly user = getUser();

    products: Product[] | null = null;

    // constructor(
    //     @Inject(testToken) readonly test: string,
    //     // @Inject(ProductsStoreService) readonly productsStoreService: ProductsStoreService
    //     readonly productsStoreService: ProductsStoreService,
    // ) {
    //      super(test, productsStoreService);
    constructor() {
        // @ts-ignore
        // eslint-disable-next-line no-console
        console.log(inject('user'));
        // eslint-disable-next-line no-console
        console.log(this.test, this.productsStoreService);
        // eslint-disable-next-line no-console
        console.log(inject(ProductsStoreService) === inject(referToken));

        setTimeout(() => {
            this.products = getNextProducts(chunkSize);

            this.changeDetectorRef.markForCheck();
        }, 3000);
    }

    trackByProductId(_index: number, item: Product) {
        return item._id;
    }

    loadNextProducts() {
        if (!this.products) {
            return;
        }

        const lastProductIndex = this.products.length - 1;
        const lastProductId = this.products[lastProductIndex]._id;
        const nextChunk = getNextProducts(chunkSize, lastProductId);

        this.products = [...this.products, ...nextChunk];
    }
}
