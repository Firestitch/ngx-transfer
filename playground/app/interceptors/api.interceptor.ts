
import { makeInterceptorFactory,  } from '@firestitch/api';

import { Observable } from 'rxjs';


import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';


export class ApiInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const apiDomain= 'specify.firestitch.dev';
    const apiDomain = 'specify.local.firestitch.com';
    const url = `https://${apiDomain}/api/`.concat(req.url);

    return next.handle(req.clone({ url }));
  }
}

export const ApiInterceptorFactory = makeInterceptorFactory(ApiInterceptor);
