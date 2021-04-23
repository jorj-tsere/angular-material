import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LookupActions from '../actions/lookup.actions';
import { LookupService } from '@core/services/lookup.service';

@Injectable()
export class LookupEffects {
  loadLookups$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LookupActions.loadAdminRoles),
      concatMap(() =>
        this.lookupService.getAdminRoles().pipe(
          map((data) => LookupActions.loadAdminRolesSuccess({ data })),
          catchError((error) =>
            of(LookupActions.loadAdminRolesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private lookupService: LookupService
  ) {}
}
