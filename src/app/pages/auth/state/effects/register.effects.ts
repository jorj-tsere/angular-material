import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { registerFailure, registerPage, registerSuccess } from '@pages/users-page/state/actions';

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerPage),
      concatMap((action) => {
        return this.authService.register(action.registerRequestPayload).pipe(
          map((registerResponse) =>
            registerSuccess({ registerResponse })
          ),
          catchError((error) =>
            of(registerFailure({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
