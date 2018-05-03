import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor () {}

  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    debugger;
    return next.handle(request);

  }

}
