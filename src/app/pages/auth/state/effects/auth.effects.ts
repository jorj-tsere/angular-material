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
      ofType(fromAuthActions.loginPage),
      concatMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((response) => {
            if(!response) {
              return fromAuthActions.loginFailure({ error: 'user not found' });
            }
            return fromAuthActions.loginSuccess({ response })
          }),
          catchError((error) => {
            console.error(' login$ = createEffect(() error', error)
            return of(fromAuthActions.loginFailure({ error }));
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
