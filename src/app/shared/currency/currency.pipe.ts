import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
    transform(price: number | undefined | null, symbol = '$'): string {
        return `${price || 0} ${symbol}`;
    }
}
