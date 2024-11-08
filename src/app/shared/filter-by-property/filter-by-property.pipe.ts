import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, P extends keyof T>(
        items: T[] | undefined | null,
        propertyName: P,
        searchPropertyValue: T[P],
    ): T[] | undefined | null {
        if (!items || items.length === 0) {
            return items;
        }

        if (typeof searchPropertyValue === 'string') {
            const normalizedSearchValue = searchPropertyValue.toLowerCase();

            return items.filter(item => {
                const searchingItemValue = item[propertyName] as string;

                return searchingItemValue.toLowerCase().includes(normalizedSearchValue);
            });
        }

        return items.filter(item => item[propertyName] === searchPropertyValue);
    }
}
