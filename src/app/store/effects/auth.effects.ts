import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, throttleTime } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { ICredentials, IUser } from '@pages/auth/models';
import {
  loginPage,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} from '@store/actions/auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginPage),
      concatMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((response: ICredentials) => {
            const loggedUser: IUser = this.jwtHelper.decodeToken(response.accessToken);
            return loginSuccess({ loggedUser });
          }),
          catchError((error: any) => {
            return of(loginFailure({ error }));
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

  constructor(private actions$: Actions, public jwtHelper: JwtHelperService, private authService: AuthService) {}
}
