import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {

    const menulabToken = localStorage.getItem('ml_token');

    if (menulabToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + menulabToken)
      });

      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
