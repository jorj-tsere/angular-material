import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, throttleTime } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import * as fromAuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LoginPage),
      concatMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((_user) => {
            const user = _user[0];
            if(!user || typeof user === 'undefined') {
              return fromAuthActions.LoginFailure({ error: 'user not found' });
            }
            return fromAuthActions.LoginSuccess({ user })
          }),
          catchError((error) => {
            console.error(' login$ = createEffect(() error', error)
            return of(fromAuthActions.LoginFailure({ error }));
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
