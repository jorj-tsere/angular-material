import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromRegisterActions from '../../../users-page/state/actions/register.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class RegisterEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromRegisterActions.registerPage),
      concatMap((action) =>
        this.authService.register(action.registerRequestPayload).pipe(
          map((registerResponse) => fromRegisterActions.registerSuccess({ registerResponse })),
          catchError((error) => of(fromRegisterActions.registerFailure({ error: error.message })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
