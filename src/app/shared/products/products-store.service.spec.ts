import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {productsMock} from './products.mock';
import {ProductsApiService} from './products-api.service';

// const httpClientMock: HttpClient = {
//     get<T>(_url: string) {},
// } as HttpClient;

describe('Products api service', () => {
    let service: ProductsApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            // providers: [
            //     {
            //         provide: HttpClient,
            //         useValue: httpClientMock,
            //     },
            // ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);
        httpMock = TestBed.inject(HttpTestingController);

        // spyOn(httpClientMock, 'get').and.returnValue(
        //     timer(10).pipe(map(() => ({data: {items: productsMock}}))),
        // );
    });

    it('Загрузка продуктов', done => {
        service.getProducts$().subscribe(products => {
            expect(products).toEqual(productsMock);

            done();
        });

        httpMock.expectOne('/products').flush({data: {items: productsMock}});
    });
});
