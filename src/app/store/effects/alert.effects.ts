import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {
  registerFailure,
  registerPage,
  registerSuccess,
} from '@store/actions';
import { loginPage, loginSuccess, loginFailure, logoutSuccess, logoutFailure } from '@store/actions/auth.actions';


@Injectable()
export class AlertEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginPage),
        tap(() => this.fakeAlertService('Checking your information'))
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) =>
          this.fakeAlertService('Welcome Back ' + JSON.stringify(action) + '!')
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure),
        tap(() => this.fakeAlertService('Unable to login'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => this.fakeAlertService('You are logged out'))
      ),
    { dispatch: false }
  );

  unableToLogOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutFailure),
        tap(() => this.fakeAlertService('unable to log out'))
      ),
    { dispatch: false }
  );

  RegisterCheckingSubmitRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerPage),
        tap(() =>
          this.fakeAlertService(
            'Checking RegisterCheckingSubmitRequest information'
          )
        )
      ),
    { dispatch: false }
  );

  RegisterCheckingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap(() => this.fakeAlertService('RegisterCheckingSuccess Success'))
      ),
    { dispatch: false }
  );

  RegisterCheckingFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerFailure),
        tap(() =>
          this.fakeAlertService(
            'RegisterCheckingFailure Failed: Unable to Register'
          )
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}

  fakeAlertService(message: string): void {
    console.log('[[ message from fake alert EFFECT ]]', message);
  }
}
