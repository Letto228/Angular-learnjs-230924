import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {BrandsService} from '../../shared/brands/brands.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly brandsService = inject(BrandsService);
    private readonly activatedRoute = inject(ActivatedRoute);

    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.productsStoreService.loadProducts(subCategoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );

    readonly brands$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.brandsService.loadBrands(subCategoryId);
        }),
        switchMap(() => this.brandsService.brands$),
    );

    constructor() {
        this.productsStoreService.loadProducts();
    }

    trackByProductId(_index: number, item: Product) {
        return item._id;
    }

    loadNextProducts() {
        // load next products
    }
}
