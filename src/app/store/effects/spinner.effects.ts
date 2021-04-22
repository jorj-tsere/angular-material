import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { NgxSpinnerService } from 'ngx-spinner';
import * as fromAuthActions from '../../pages/auth/state/actions/auth.actions';
import * as fromRegisterActions from '../../pages/users-page/state/actions/register.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginPage),
        tap(() => {
          this.fakeSpinnerService('fromAuthActions.LoginPage, SHOW');
          }
        )
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess,
          fromAuthActions.loginFailure),
        tap(() => {
          setTimeout(() => {
            this.fakeSpinnerService('fromAuthActions.LoginSuccess, fromAuthActions.LoginFailure, HIDE');
          }, 1000);
        })
      ),
    { dispatch: false }
  );




  RegisterSpinnerOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRegisterActions.registerPage),
        tap(() => {
          this.fakeSpinnerService('RegisterSpinnerOn, SHOW');
          }
        )
      ),
    { dispatch: false }
  );

  RegisterSpinnerOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromRegisterActions.registerSuccess,
          fromRegisterActions.registerFailure),
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
