import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocalStorageService } from 'app/@core/services';
import * as fromAuthActions from 'app/pages/auth/state/actions/auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logoutSuccess),
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
        ofType(fromAuthActions.loginSuccess),
        tap((action) => {
          try {
            this.localStorageService.setObjectItem('ml_token', action.response);
          } catch (error) {
            console.error(error);
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}
}
