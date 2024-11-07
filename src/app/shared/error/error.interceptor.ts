import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, retry} from 'rxjs';

export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // request
        return next.handle(request).pipe(
            retry({
                count: 3,
                delay: 1000,
            }),
        );
    }
}
