import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var clonedReq = req;
        if (localStorage.getItem('token') != null) {
            clonedReq = req.clone({
                headers: req.headers.set('Authorization', localStorage.getItem('token'))
            });
        }

        return next.handle(clonedReq);
    }

}