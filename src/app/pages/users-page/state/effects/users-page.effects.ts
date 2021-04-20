import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UsersPageActions from '../actions/users-page.actions';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UsersPageEffects {
  loadUsersPages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersPageActions.loadUsersPage),
      concatMap(() =>
        this.userService.loadEmployeeTableData().pipe(
          map((data) => {
            // console.log(data)
            return UsersPageActions.loadUsersPageSuccess({ data })
          }),
          catchError((error) =>
            of(UsersPageActions.loadUsersPageFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UsersService) {}
}
