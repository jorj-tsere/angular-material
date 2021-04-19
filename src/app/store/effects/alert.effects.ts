import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { AlertService } from 'ngx-alerts';
import * as fromAuthActions from '../../pages/auth/state/actions/auth.actions';
import * as fromRegisterActions from '../../pages/auth/state/actions/register.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AlertEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.LoginPage),
        tap(() => this.fakeAlertService('Checking your information'))
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.LoginSuccess),
        tap((action) =>
         this.fakeAlertService(
            'Welcome Back ' + action.user.email + '!'
          )
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.LoginFailure),
        tap(() => this.fakeAlertService('Unable to login'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.Logout),
        tap(() => this.fakeAlertService('You are logged out'))
      ),
    { dispatch: false }
  );

  RegisterCheckingSubmitRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRegisterActions.RegisterPage),
        tap(() => this.fakeAlertService('Checking RegisterCheckingSubmitRequest information'))
      ),
    { dispatch: false }
  );

  RegisterCheckingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRegisterActions.RegisterSuccess),
        tap(() => this.fakeAlertService('RegisterCheckingSuccess Success'))
      ),
    { dispatch: false }
  );

  RegisterCheckingFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRegisterActions.RegisterFailure),
        tap(() => this.fakeAlertService('RegisterCheckingFailure Failed: Unable to Register'))
      ),
    { dispatch: false }
  );


  constructor(private actions$: Actions) {}


  fakeAlertService(message: string): void {
    console.log('[[ message from fake alert EFFECT ]]', message);
  }

}
