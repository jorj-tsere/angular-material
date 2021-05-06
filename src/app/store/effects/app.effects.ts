import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageType } from '@shared/enums/message-type.enum';
import { messageTranslator } from '@shared/helpers';
import { logoutSuccess, loginSuccess } from '@store/actions/auth.actions';
import { LocalStorageService } from 'app/services';
import { AlertService } from 'app/services/alert-service.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => {
          try {
            this.localStorageService.removeItem('ml_token');
          } catch (error) {
            console.error(error);
          }
        })
      ),
    { dispatch: false }
  );

  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap((action: any) => {
          try {
            this.localStorageService.setObjectItem('ml_token', action.response);
            const authorizedUser = this.localStorageService.readToken();
            console.log('authorizedUser', authorizedUser);
            this.alertService.showNotification(
              `Welcome Back  ${authorizedUser.firstName} ${authorizedUser.lastName}!`,
              messageTranslator(MessageType.success)
            );
          } catch (error) {
            console.error(error);
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private alertService: AlertService
  ) {}
}
