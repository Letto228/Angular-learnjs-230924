import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {inject} from '@angular/core';
import {Observable} from 'rxjs';
import {BASE_URL_TOKEN} from './base-url';

export class BaseUrlInterceptor implements HttpInterceptor {
    private readonly baseUrl = inject(BASE_URL_TOKEN);

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const patchedRequest = request.clone({
            url: `${this.baseUrl}${request.url}`,
        });

        return next.handle(patchedRequest).pipe();
    }
}
