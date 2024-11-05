import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform(
        products: Product[] | null | undefined,
        propertyName: string,
        searchPropertyValue: string | number | object | object[] | null | undefined,
    ): Product[] {
        if (!searchPropertyValue) {
            return [];
        }

        if (products) {
            const resProductList: Product[] = [];

            for (const product of products) {
                let prop: keyof Product;

                for (prop in product) {
                    if (
                        prop === propertyName &&
                        typeof product[prop] === typeof searchPropertyValue
                    ) {
                        if (this.isEqualProductProperty(product[prop], searchPropertyValue)) {
                            resProductList.push(product);

                            break;
                        }
                    }
                }
            }

            return resProductList;
        }

        return [];
    }

    isEqualProductProperty(
        productPropertyValue: string | number | object | object[] | undefined,
        searchPropertyValue: string | number | object | object[],
    ): boolean {
        if (typeof productPropertyValue === 'string' && typeof searchPropertyValue === 'string') {
            return productPropertyValue.toLowerCase().includes(searchPropertyValue.toLowerCase());
        }

        return productPropertyValue === searchPropertyValue;
    }
}
