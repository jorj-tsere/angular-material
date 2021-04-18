import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { NgxSpinnerService } from 'ngx-spinner';
import * as fromAuthActions from '../../pages/auth/state/actions/auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.LoginPage),
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
        ofType(fromAuthActions.LoginSuccess, fromAuthActions.LoginFailure),
        tap(() => {
          setTimeout(() => {
            this.fakeSpinnerService('fromAuthActions.LoginSuccess, fromAuthActions.LoginFailure, HIDE');
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
