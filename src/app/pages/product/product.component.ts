import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {filter, map, switchMap, tap} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);

    // readonly product$ = of('96-planset-dexp-ursus-s290-32-gb-3g-cernyj').pipe(
    // readonly product$ = this.activatedRoute.params.pipe(
    //     // eslint-disable-next-line dot-notation
    //     map(params => params['id']),
    readonly product$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        filter(Boolean),
        tap(productId => {
            this.productsStoreService.loadProduct(productId);
        }),
        switchMap(() => this.productsStoreService.currentProduct$),
    );

    // constructor() {
    //     console.log(this.activatedRoute.snapshot);
    // }

    navigateTo(childPath: string) {
        // const urlTree = this.router.createUrlTree(['./', childPath], {
        //     relativeTo: this.activatedRoute,
        // });

        // console.log('urlTree', urlTree.toString());
        // console.log('childPath', childPath);

        // this.router.navigateByUrl(urlTree.toString());
        // this.router.navigateByUrl(urlTree);
        this.router.navigate(['./', childPath], {
            relativeTo: this.activatedRoute,
            queryParams: {
                name: 'Egor',
            },
        });
    }
}
