import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from 'app/pages/auth/state/actions/auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.Logout),
        tap(() => localStorage.removeItem('ml_token'))
      ),
    { dispatch: false }
  );

  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.LoginSuccess),
        tap((action) =>
          localStorage.setItem('ml_token', JSON.stringify(action))
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
