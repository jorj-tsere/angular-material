import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {
  loginPage,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from '@store/actions/auth.actions';
import {
  registerPage,
  registerSuccess,
  registerFailure,
} from '@pages/users-page/state/actions/register.actions';
import { NotifierService } from 'angular-notifier';
import { UpdateUserSuccess } from '@pages/users-page/state/actions/users-page.actions';
import { AlertService } from 'app/services/alert-service.service';
import { MessageType } from '@shared/models/message-type.enum';
import { messageTranslator } from '@shared/helpers';
import { LocalStorageService } from 'app/services';

@Injectable()
export class AlertEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginPage),
        tap(() =>
          this.alertService.showNotification(
            'Checking your information',
            messageTranslator(MessageType.info)
          )
        )
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {

          this.alertService.showNotification(
            'Welcome Back ' + JSON.stringify(action) + '!',
            messageTranslator(MessageType.success)
          )
        })
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure),
        tap(() =>
          this.alertService.showNotification(
            'Unable to login',
            messageTranslator(MessageType.warning)
          )
        )
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => this.alertService.showNotification('You are logged out'))
      ),
    { dispatch: false }
  );

  unableToLogOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutFailure),
        tap(() =>
          this.alertService.showNotification(
            'unable to log out',
            messageTranslator(MessageType.warning)
          )
        )
      ),
    { dispatch: false }
  );

  RegisterCheckingSubmitRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerPage),
        tap(() =>
          this.alertService.showNotification(
            'Checking information',
            messageTranslator(MessageType.warning)
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private alertService: AlertService,
    private localStorageService: LocalStorageService
  ) {}
}
