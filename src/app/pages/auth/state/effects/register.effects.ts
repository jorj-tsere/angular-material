import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromRegisterActions from '../actions/register.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class RegisterEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromRegisterActions.RegisterPage),
      concatMap((action) =>
        this.authService.register(action.registerRequestPayload).pipe(
          map((registerResponse) => fromRegisterActions.RegisterSuccess({ registerResponse })),
          catchError((error) => of(fromRegisterActions.RegisterFailure({ error: error.message })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
