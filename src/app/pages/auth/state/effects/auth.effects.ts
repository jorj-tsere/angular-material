import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromAuthActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LoginPage),
      concatMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((user) => fromAuthActions.LoginSuccess({ user })),
          catchError((error) => of(fromAuthActions.LoginFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
