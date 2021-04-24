import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, throttleTime } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import { AuthService } from '../../pages/auth/services/auth.service';
import { ICredentials } from '@pages/auth/models';
import {
  loginPage,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} from '@store/actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginPage),
      concatMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((response: ICredentials) => {
            return loginSuccess({ response });
          }),
          catchError((error: any) => {
            return of(loginFailure({ error: error.error }));
          })
        )
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      concatMap(() =>
        this.authService.logout().pipe(
          map((message: any) => {
            return logoutSuccess({ message });
          }),
          catchError((error: any) => {
            return of(logoutFailure({ error }));
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
