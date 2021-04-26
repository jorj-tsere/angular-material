import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerFailure, registerPage, registerSuccess } from '@pages/users-page/state/actions/register.actions';

import { loginFailure, loginPage, loginSuccess } from '@store/actions/auth.actions';
// import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginPage),
        tap(() => {
          this.fakeSpinnerService('LoginPage, SHOW');
        })
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess, loginFailure),
        tap(() => {
          setTimeout(() => {
            this.fakeSpinnerService('LoginSuccess, LoginFailure, HIDE');
          }, 1000);
        })
      ),
    { dispatch: false }
  );

  RegisterSpinnerOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerPage),
        tap(() => {
          this.fakeSpinnerService('RegisterSpinnerOn, SHOW');
        })
      ),
    { dispatch: false }
  );

  RegisterSpinnerOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess, registerFailure),
        tap(() => {
          setTimeout(() => {
            this.fakeSpinnerService('RegisterSpinnerOff, HIDE');
          }, 1000);
        })
      ),
    { dispatch: false }
  );

  fakeSpinnerService(message: string): void {
    console.log('[[message from spinner effects]]', message);
  }

  constructor(private actions$: Actions) {}
}
