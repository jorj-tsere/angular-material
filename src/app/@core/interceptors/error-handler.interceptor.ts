import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Logger } from 'app/services';
import { environment } from '@env';
import {
  HttpResponseBodyMessage,
  HttpResponseMessage,
} from '@shared/models/http-response-message';
import { AlertService } from 'app/services/alert-service.service';
import { messageTranslator } from '@shared/helpers';

const log = new Logger('ErrorHandlerInterceptor');

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((response: HttpResponse<any>) => {
        if (response.body && response.body) {
          const myBody: HttpResponseMessage = response.body;
          if (myBody.showMessage) {
            this.alertService.showNotification(
              myBody.message.text,
              messageTranslator(myBody.message.type)
            );
          }
        }
      }),
      catchError((error) => this.errorHandler(error))
    );
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    throw response;
  }
}
