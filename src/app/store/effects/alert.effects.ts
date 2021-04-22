import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { AlertService } from 'ngx-alerts';
import * as fromAuthActions from '../../pages/auth/state/actions/auth.actions';
import { tap } from 'rxjs/operators';
import { registerFailure, registerPage, registerSuccess } from '@pages/users-page/state/actions';

@Injectable()
export class AlertEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginPage),
        tap(() => this.fakeAlertService('Checking your information'))
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
         this.fakeAlertService(
            'Welcome Back ' + JSON.stringify(action) + '!'
          )
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => this.fakeAlertService('Unable to login'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.fakeAlertService('You are logged out'))
      ),
    { dispatch: false }
  );

  RegisterCheckingSubmitRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerPage),
        tap(() => this.fakeAlertService('Checking RegisterCheckingSubmitRequest information'))
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
        tap(() => this.fakeAlertService('RegisterCheckingFailure Failed: Unable to Register'))
      ),
    { dispatch: false }
  );


  constructor(private actions$: Actions) {}


  fakeAlertService(message: string): void {
    console.log('[[ message from fake alert EFFECT ]]', message);
  }

}
