import {inject, InjectionToken} from '@angular/core';

// Tokens

// Что можно использзовать
// token1 = 123
// token2 = 'user'
// token3 = {};
// token4 = function() {...}
// token5 = class {}
// token6 = ProductsStoreService

export const invalidToken = {};

// Что стоит использовать
// token5 = class {}
// token6 = ProductsStoreService

export class HttpService {}

export class ProductsStoreService {
    private readonly http = inject(HttpService);
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {}
}

export const testToken = new InjectionToken<string>('Is test token');
export const referToken = new InjectionToken<ProductsStoreService>('Is copy token');
