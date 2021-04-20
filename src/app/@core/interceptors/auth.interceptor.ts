import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'app/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const menulabToken = this.localStorageService.getObject('ml_token');

    if (menulabToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + menulabToken),
      });

      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
