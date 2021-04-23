import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, throttleTime } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import * as fromAuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { ICredentials } from '@pages/auth/models';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.loginPage),
      concatMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((response: ICredentials) => {
            return fromAuthActions.loginSuccess({ response })
          }),
          catchError((error: any) => {
            return of(fromAuthActions.loginFailure({ error: error.error }));
          })
        )
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.logout),
      concatMap(() =>
        this.authService.logout().pipe(
          map((message: any) => {
            return fromAuthActions.logoutSuccess({ message })
          }),
          catchError((error: any) => {
            return of(fromAuthActions.logoutFailure({ error }));
          })
        )
      )
    );
  })



  constructor(private actions$: Actions, private authService: AuthService) {}
}
